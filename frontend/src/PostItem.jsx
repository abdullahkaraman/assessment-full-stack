import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./components/ui/card";
import { useQuery } from "@apollo/client";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/error-fallback";
import Loading from "./components/loading";
import { useEffect, useState } from "react";
import {
  GET_PAGINATED_POSTS,
  GET_SEARCH_POSTS,
  IMAGE_BASE_URL,
} from "./lib/utils";

function PostItem({ page, searchQuery }) {
  const [currentData, setCurrentData] = useState([]);
  const { loading, error, data } = useQuery(
    searchQuery.length > 0 ? GET_SEARCH_POSTS : GET_PAGINATED_POSTS,
    {
      variables: {
        page: page,
        limit: 20,
        query: searchQuery,
      },
    }
  );

  useEffect(() => {
    if (data) {
      setCurrentData((prev) => {
        let fetchData =
          searchQuery.length > 0
            ? data.paginatedSearchPosts
            : data.paginatePosts;
        const newData = fetchData.filter(
          (post) => !prev.some((prevPost) => prevPost.id === post.id)
        );
        return searchQuery.length > 0 ? [...newData] : [...prev, ...newData];
      });
    }
  }, [data]);

  if (loading && currentData.length === 0) {
    return <Loading />;
  } else if (error) {
    return (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
      >
        <div className="w-full">Error! {error.message}</div>
      </ErrorBoundary>
    );
  }

  return currentData.map((post) => (
    <div key={post.id}>
      <Card className={"w-full inline-block mb-2"}>
        <CardHeader className={"space-y-0 p-0"}>
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
