import models from "../../models/index.js";
const { Post, Influencer } = models;
export const resolvers = {
  Query: {
    posts: async () => {
      return await Post.find().populate("influencer");
    },
    post: async (_, { id }) => {
      return await Post.findById(id).populate("influencer");
    },
    influencers: async () => {
      return await Influencer.find();
    },
    influencer: async (_, { username }) => {
      return await Influencer.findOne({ username });
    },
  },
  Mutation: {
    createPost: async (_, { input }) => {
      const post = new Post(input);
      await post.save();
      return post;
    },
    updatePost: async (_, { id, input }) => {
      const post = await Post.findByIdAndUpdate(id, input, { new: true });
      return post;
    },
    deletePost: async (_, { id }) => {
      await Post.findByIdAndDelete(id);
      return "Post deleted successfully";
    },
  },
  Post: {
    influencer: async (post) => {
      return await Influencer.findById(post.influencer);
    },
  },
};
