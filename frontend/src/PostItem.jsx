import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./components/ui/card";
import { useQuery, gql } from "@apollo/client";

export const IMAGE_BASE_URL = "https://cdn.tfashion.ai";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      description
      influencer {
        id
        username
      }
      image {
        url
        width
        height
      }
    }
  }
`;

function PostItem() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.posts.map((post) => (
    <div key={post.id}>
      <Card className={"w-full mb-2"}>
        <CardHeader className={"space-y-0 p-0 h-full"}>
          <CardContent className={"p-0"}>
            <img
              src={`${IMAGE_BASE_URL}${post.image.url}`}
              alt="Post Image"
              className={"rounded-t-lg rounded-b-none"}
            />
          </CardContent>
        </CardHeader>
        <CardDescription className={"text-left pt-1 py-1 px-2 font-bold"}>
          @{post.influencer.username}
        </CardDescription>
        <CardDescription className={"text-left py-1 px-2"}>
          {post.description}
        </CardDescription>
      </Card>
    </div>
  ));
}

export default PostItem;
