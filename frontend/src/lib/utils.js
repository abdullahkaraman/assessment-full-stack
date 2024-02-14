import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { gql } from "@apollo/client";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const IMAGE_BASE_URL = "https://cdn.tfashion.ai";

export const GET_PAGINATED_POSTS = gql`
  query GetPaginatedPosts($page: Int, $limit: Int) {
    paginatePosts(page: $page, limit: $limit) {
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

export const GET_SEARCH_POSTS = gql`
  query paginatedSearchPosts($page: Int, $limit: Int, $query: String!) {
    paginatedSearchPosts(page: $page, limit: $limit, query: $query) {
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
