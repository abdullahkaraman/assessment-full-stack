export const typeDefs = `#graphql
  type Post {
    id: ID!
    influencer: Influencer!
    description: String!
    likes: Int!
    comments: Int!
    image: Image!
  }
  type Influencer {
    id: ID!
    fullName: String!
    username: String!
  }
  type Image {
    id: ID!
    url: String!
    width: Int!
    height: Int!
    blurhash: String!
  }
  type Query {
    posts(limit: Int): [Post]
    post(id: ID!): Post
    paginatePosts(page: Int, limit: Int): [Post]
    paginatedSearchPosts(page: Int, limit: Int, query: String!): [Post]
  }
`;
