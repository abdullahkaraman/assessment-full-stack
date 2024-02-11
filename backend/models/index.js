const mongoose = require("mongoose");
const Influencer = require("./Influencer");
const Post = require("./Post");
const { MONGODB_URI } = require("../config");

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected successfully");
});

module.exports = {
  Influencer,
  Post,
};
