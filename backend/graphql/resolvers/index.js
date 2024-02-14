import Influencer from "../../models/Influencer.js";
import models from "../../models/index.js";
const { Post } = models;
export const resolvers = {
  Query: {
    posts: async (_, { limit }) => {
      const defaultLimit = 20;

      const queryLimit = limit ? limit : defaultLimit;

      return await Post.find().limit(queryLimit).populate("influencer");
    },
    post: async (_, { id }) => {
      return await Post.findById(id).populate("influencer");
    },
    paginatePosts: async (_, { page, limit }) => {
      const defaultLimit = 20;
      const defaultPage = 1;

      const queryLimit = limit ? limit : defaultLimit;
      const queryPage = page ? page : defaultPage;

      return await Post.find()
        .skip(queryLimit * (queryPage - 1))
        .limit(queryLimit)
        .populate("influencer");
    },
    paginatedSearchPosts: async (_, { page, limit, query }) => {
      const defaultLimit = 20;
      const defaultPage = 1;

      const queryLimit = limit ? limit : defaultLimit;
      const queryPage = page ? page : defaultPage;

      try {
        const regex = new RegExp(query, "i");
        const posts = await Post.find({ description: { $regex: regex } })
          .skip(queryLimit * (queryPage - 1))
          .limit(queryLimit)
          .populate("influencer");
        const usernames = await Influencer.find({
          username: { $regex: regex },
        });
        const postsByUsernames = await Post.find({
          influencer: { $in: usernames },
        })
          .skip(queryLimit * (queryPage - 1))
          .limit(queryLimit)
          .populate("influencer");
        const allPosts = [...posts, ...postsByUsernames];
        return allPosts;
      } catch (error) {
        console.error("Error:", error);
        throw new Error("An error occurred while searching for posts.");
      }
    },
  },
};
