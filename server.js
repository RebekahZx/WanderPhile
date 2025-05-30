const mongoose = require("mongoose");
const app = require("./app.js");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database connection successful");
    app.listen(8082, () => {
      console.log("Server is running on port 8080");
    });
  } catch (err) {
    console.error("Error connecting to DB or starting server:", err);
  }
}

main();
