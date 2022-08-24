const mongoose = require("mongoose");
const config = require("config");
const db = config.get(mongURI);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewURLParser: true,
    });
    console.log("MongoDB is connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
