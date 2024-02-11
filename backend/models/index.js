import mongoose from "mongoose";
import Influencer from "./Influencer.js";
import Post from "./Post.js";
import { MONGODB_URI } from "../config/index.js";

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

const models = {
  Influencer,
  Post,
};

export default models;
