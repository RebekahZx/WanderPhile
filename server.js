const mongoose = require("mongoose");
const app = require("./app.js");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";
const PORT = process.env.PORT || 8080;

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to DB or starting server:", err);
    process.exit(1);
  }
}

main();
