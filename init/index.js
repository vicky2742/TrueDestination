const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

//!DB connection
const MONGO_URL = "mongodb://127.0.0.1:27017/trueDestination";
main()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "652d0081ae547c5d37e56b5f",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
