import mongoose from "mongoose";

const influencerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

const Influencer = mongoose.model("Influencer", influencerSchema);

export default Influencer;
