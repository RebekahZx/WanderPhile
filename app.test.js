const request = require("supertest");
const mongoose = require("mongoose");
const app = require("./app.js"); 

beforeAll(async () => {
  const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust-test';
  await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe("Basic route tests", () => {
  test("GET / returns Hello World", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World");
  });

  test("GET /listings returns 200", async () => {
    const response = await request(app).get("/listings");
    expect(response.statusCode).toBe(200);
  });
});
