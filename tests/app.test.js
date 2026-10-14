// Route and middleware tests. No database is needed: Mongoose model methods are
// replaced with Jest spies, so these run the same locally and in CI.
const request = require("supertest");
const mongoose = require("mongoose");

process.env.NODE_ENV = "test";
const app = require("../app.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");

const alice = new User({ username: "alice", email: "alice@example.com" });
alice.authenticate = async (pw) =>
  pw === "correct" ? { user: alice } : { user: false, error: new Error("Password or username is incorrect") };

const otherUserId = new mongoose.Types.ObjectId();
const listingId = new mongoose.Types.ObjectId().toString();
const reviewId = new mongoose.Types.ObjectId().toString();

beforeEach(() => {
  jest.restoreAllMocks();
  // Used by both the login strategy (promise form) and session deserialisation (callback form).
  jest.spyOn(User, "findByUsername").mockImplementation((username, arg) => {
    const user = username === "alice" ? alice : null;
    if (typeof arg === "function") return arg(null, user);
    return Promise.resolve(user);
  });
});

async function loggedInAgent() {
  const agent = request.agent(app);
  const res = await agent.post("/login").type("form").send({ username: "alice", password: "correct" });
  expect(res.headers.location).toBe("/listings");
  return agent;
}

describe("public routes", () => {
  test("GET / responds", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World");
  });

  test("GET /listings renders every listing", async () => {
    jest.spyOn(Listing, "find").mockResolvedValue([
      { _id: listingId, title: "Beach villa", price: 1200, image: { url: "https://img/x.jpg" } },
    ]);
    const res = await request(app).get("/listings");
    expect(res.status).toBe(200);
    expect(res.text).toContain("Beach villa");
    expect(res.text).toContain("1,200");
  });

  test("unknown route returns the 404 page", async () => {
    const res = await request(app).get("/no-such-page");
    expect(res.status).toBe(404);
    expect(res.text).toContain("Page not Found");
  });

  test("a missing listing redirects instead of crashing", async () => {
    jest.spyOn(Listing, "findById").mockReturnValue({
      populate() { return this; },
      then(resolve) { resolve(null); },
    });
    const res = await request(app).get(`/listings/${listingId}`);
    expect(res.status).toBe(302);
    expect(res.headers.location).toBe("/listings");
  });
});

describe("authentication", () => {
  test("protected pages redirect to /login", async () => {
    for (const [method, path] of [["get", "/listings/new"], ["post", "/listings"], ["delete", `/listings/${listingId}`]]) {
      const res = await request(app)[method](path);
      expect(res.status).toBe(302);
      expect(res.headers.location).toBe("/login");
    }
  });

  test("wrong password is rejected", async () => {
    const res = await request(app).post("/login").type("form").send({ username: "alice", password: "nope" });
    expect(res.headers.location).toBe("/login");
  });

  test("login, then logout", async () => {
    const agent = await loggedInAgent();
    const res = await agent.get("/logout");
    expect(res.headers.location).toBe("/listings");
    const after = await agent.get("/listings/new");
    expect(after.headers.location).toBe("/login");
  });
});

describe("ownership checks", () => {
  test("a non-owner cannot delete a listing", async () => {
    const agent = await loggedInAgent();
    jest.spyOn(Listing, "findById").mockResolvedValue({ _id: listingId, owner: { _id: otherUserId } });
    const del = jest.spyOn(Listing, "findByIdAndDelete").mockResolvedValue(null);
    const res = await agent.delete(`/listings/${listingId}`);
    expect(res.headers.location).toBe(`/listings/${listingId}`);
    expect(del).not.toHaveBeenCalled();
  });

  test("the owner can delete a listing", async () => {
    const agent = await loggedInAgent();
    jest.spyOn(Listing, "findById").mockResolvedValue({ _id: listingId, owner: { _id: alice._id } });
    const del = jest.spyOn(Listing, "findByIdAndDelete").mockResolvedValue({});
    const res = await agent.delete(`/listings/${listingId}`);
    expect(res.headers.location).toBe("/listings");
    expect(del).toHaveBeenCalledWith(listingId);
  });

  test("ownership check on a missing listing redirects instead of crashing", async () => {
    const agent = await loggedInAgent();
    jest.spyOn(Listing, "findById").mockResolvedValue(null);
    const res = await agent.delete(`/listings/${listingId}`);
    expect(res.headers.location).toBe("/listings");
  });

  test("only a review's author can delete it", async () => {
    const agent = await loggedInAgent();
    const del = jest.spyOn(Review, "findByIdAndDelete").mockResolvedValue({});
    jest.spyOn(Listing, "findByIdAndUpdate").mockResolvedValue({});

    jest.spyOn(Review, "findById").mockResolvedValue({ _id: reviewId, author: otherUserId });
    let res = await agent.delete(`/listings/${listingId}/reviews/${reviewId}`);
    expect(res.headers.location).toBe(`/listings/${listingId}`);
    expect(del).not.toHaveBeenCalled();

    Review.findById.mockResolvedValue({ _id: reviewId, author: alice._id });
    res = await agent.delete(`/listings/${listingId}/reviews/${reviewId}`);
    expect(res.headers.location).toBe(`/listings/${listingId}`);
    expect(del).toHaveBeenCalledWith(reviewId);
  });
});

describe("validation", () => {
  test("a review rating outside 1-5 is rejected with 400", async () => {
    const agent = await loggedInAgent();
    const res = await agent
      .post(`/listings/${listingId}/reviews`)
      .type("form")
      .send({ "review[rating]": "7", "review[comment]": "great" });
    expect(res.status).toBe(400);
  });

  test("each review gets its own creation time", async () => {
    // The default used to be Date.now() (evaluated once at startup), so every
    // review carried the server's start time.
    const first = new Review({ comment: "x", rating: 4 });
    await new Promise((r) => setTimeout(r, 20));
    const second = new Review({ comment: "y", rating: 5 });
    expect(second.createdAt.getTime()).toBeGreaterThan(first.createdAt.getTime());
  });
});
