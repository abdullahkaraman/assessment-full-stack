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
  input ImageInput {
    url: String!
    width: Int!
    height: Int!
    blurhash: String!
  }
  input PostInput {
    influencer: ID!
    description: String!
    image: ImageInput!
  }
  input PostUpdateInput {
    description: String
    image: ImageInput
  }
  type Query {
    posts: [Post]
    post(id: ID!): Post
    influencers: [Influencer]
    influencer(username: String!): Influencer
  }
  type Mutation {
    createPost(input: PostInput!): Post!
    updatePost(id: ID!, input: PostUpdateInput!): Post!
    deletePost(id: ID!): String!
  }
`;
