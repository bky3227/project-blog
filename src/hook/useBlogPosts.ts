import { useEffect, useState } from "react";
import axios from "axios";
import type { BlogPost } from "@/types/blog";

const BASE_URL = "https://blog-post-project-api.vercel.app/posts";

export function useBlogPosts(category: string, keyword?: string) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async (pageNumber: number, isReset = false) => {
    setIsLoading(true);

    try {
      const categoryParam = category === "Highlight" ? "" : category;

      const response = await axios.get(BASE_URL, {
        params: {
          page: pageNumber,
          limit: 6,
          category: categoryParam || undefined,
          keyword: keyword || undefined,
        },
      });

      setPosts((prev) =>
        isReset ? response.data.posts : [...prev, ...response.data.posts]
      );

      setHasMore(
        response.data.currentPage < response.data.totalPages
      );
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setPosts([]);
    setPage(1);
    setHasMore(true);
    fetchPosts(1, true);
  }, [category, keyword]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage);
  };

  return { posts, isLoading, hasMore, loadMore };
}
