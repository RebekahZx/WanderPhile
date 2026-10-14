# WanderPhile

[![test](https://github.com/RebekahZx/WanderPhile/actions/workflows/test.yml/badge.svg)](https://github.com/RebekahZx/WanderPhile/actions/workflows/test.yml)

A vacation-rental listings site in the style of Airbnb. Hosts can post listings with
photos and a map location, and guests can browse them and leave star-rated reviews.
It is a server-rendered Node.js app: Express, EJS, MongoDB through Mongoose, and
session login with Passport.

## Features

- **Accounts.** Sign up, log in and log out. Passwords are salted and hashed by
  `passport-local-mongoose`, and sessions are cookie-based.
- **Listings.**
  - Create, read, update and delete listings.
  - Only a listing's owner can edit or delete it.
  - Images are uploaded to Cloudinary through `multer`.
- **Maps.** Each new listing's location is geocoded with the Mapbox API, and the
  listing page shows it on a Mapbox GL map.
- **Reviews.**
  - Logged-in users can give a 1–5 star rating with a comment.
  - Only the author can delete a review.
  - Deleting a listing deletes its reviews.
- **Validation and errors.**
  - Joi schemas validate listing and review forms on the server.
  - Errors render a page with the correct HTTP status: 400 for invalid input,
    404 for unknown pages.
  - Flash messages report the outcome of each action.

## How it is organised

```
app.js            Express app: views, sessions, Passport, routes, error handler (no DB connection)
server.js         Connects to MongoDB, then starts app.js on $PORT
routes/           listing, review and user routers
controllers/      Request handlers for each router
middleware.js     isLoggedIn, isOwner, isReviewAuthor, Joi validation
models/           Listing, Review and User Mongoose schemas
schema.js         Joi schemas for form input
views/            EJS templates (ejs-mate layouts)
init/             Sample data and the seed script
tests/            Jest + Supertest route tests
```

Because `app.js` doesn't connect to a database, the tests can import it directly.

## Run locally

You need Node.js 20+, MongoDB running locally (or a MongoDB Atlas URL), a free
Cloudinary account and a Mapbox token.

```bash
git clone https://github.com/RebekahZx/WanderPhile.git
cd WanderPhile
npm install
cp .env.example .env      # then fill in the values
npm run seed              # optional: load 29 sample listings (geocoded with your MAP_TOKEN)
npm start                 # http://localhost:8080
```

| Variable | Purpose |
|---|---|
| `MONGO_URL` | MongoDB connection string |
| `SESSION_SECRET` | Signs the session cookie. Set a long random value outside development |
| `PORT` | HTTP port (default 8080) |
| `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET` | Cloudinary image uploads |
| `MAP_TOKEN` | Mapbox geocoding and map display |

Docker: `docker build -t wanderphile . && docker run -p 8080:8080 --env-file .env wanderphile`.

## Tests

```bash
npm test
```

The 13 Jest + Supertest tests run the real Express app, but replace Mongoose model calls with Jest
spies, so they need no database and no API keys. They cover:

- public pages and the 404 page;
- login, logout and protected routes;
- owner-only listing deletion and author-only review deletion;
- validation errors;
- review timestamps.

GitHub Actions runs them on every push.

The `Jenkinsfile` describes a Windows Jenkins pipeline: install, Docker build, tests,
`npm audit`, and a Docker Hub push.

## Fixed in the latest revision

The tests were written against these bugs. Five of them fail on the previous code.

- **Review deletion always failed.** `isReviewAuthor` looked up a listing using the review id, then
  read an undefined `review` variable.
- **Error status.** Every 404 and validation error was answered with HTTP 500.
  `ExpressError` stored `statuscode`, but the handler read `statusCode`.
- **Review timestamps.** Every review got the server's start time as its `createdAt`
  (`default: Date.now()` instead of `Date.now`).
- **Missing records.** A deleted or unknown listing crashed the ownership check, or rendered after a
  redirect.
- **Startup without a Mapbox token.** The app couldn't start without a valid `MAP_TOKEN`; the
  geocoding client is now created on first use.
- **Start command.** `npm start`, which the Dockerfile runs, didn't exist. The server also listened on
  8082 while logging 8080.
- **Seed script.** It failed schema validation: the sample data has no map coordinates. It now
  geocodes each location.
- **Repository hygiene.**
  - Login and logout error paths referenced an undefined `next`.
  - The session secret is now read from `SESSION_SECRET`.
  - `node_modules` is no longer tracked.

## Not implemented

There is no booking or availability calendar, search or filtering, or admin role.
These would be the natural next features.

## Author

Shrinivas Anavekar · MIT License
