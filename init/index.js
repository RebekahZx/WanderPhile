// Seed the database with the sample listings in data.js.
//
//   MONGO_URL      MongoDB connection string (default: local "wanderlust" database)
//   MAP_TOKEN      Mapbox token, used to geocode each sample location
//   SEED_OWNER_ID  _id of an existing user to own the sample listings (optional)
//
// Usage: npm run seed
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";

async function geocode(client, place) {
  const response = await client.forwardGeocode({ query: place, limit: 1 }).send();
  const feature = response.body.features[0];
  if (!feature) throw new Error(`No map location found for "${place}"`);
  return feature.geometry;
}

async function main() {
  if (!process.env.MAP_TOKEN) {
    throw new Error("Set MAP_TOKEN: listings need map coordinates, which are looked up with Mapbox.");
  }
  const client = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });
  await mongoose.connect(MONGO_URL);

  const listings = [];
  for (const obj of initData.data) {
    listings.push({
      ...obj,
      owner: process.env.SEED_OWNER_ID || undefined,
      geometry: await geocode(client, `${obj.location}, ${obj.country}`),
    });
  }

  await Listing.deleteMany({});
  await Listing.insertMany(listings);
  console.log(`Inserted ${listings.length} listings`);
}

main()
  .catch((err) => {
    console.error(err.message);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
