import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  influencer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Influencer",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  image: {
    url: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    blurhash: {
      type: String,
      required: true,
    },
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
