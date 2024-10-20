import { useEffect, useRef, useState } from "react";
import { PostItemType } from "../types/postTypes";
import { fetchPostList } from "../services/services";

const useDataFeed = () => {
  const [posts, setPosts] = useState<PostItemType[]>([]);
  const [hasMore, setHasMore] = useState<Boolean>(true); // Tracks if more items are available
  const [loading, setLoading] = useState<Boolean>(true); // Tracks loading state
  const [error, setError] = useState<string | null>(null); // Tracks error state
  const [skip, setSkip] = useState(0); // Tracks the number of items to skip
  const observerRef = useRef<HTMLDivElement | null>(null); // For the scroll observer

  // Fetch data when skip changes
  useEffect(() => {
    if (hasMore || skip == 0) handleFetchData();
  }, [skip]);

  // Detect when the user reaches the bottom of the page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setSkip((prevSkip) => prevSkip + 6); // Load 6 more items
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.disconnect();
    };
  }, [hasMore, loading]);

  const handleFetchData = async () => {
    try {
      setLoading(true);
      const postData = await fetchPostList(skip);
      setPosts((prevPosts) => [...prevPosts, ...postData.data]); // Append new posts
      setHasMore(postData.hasMore); // Update hasMore
    } catch (err) {
      setError("Failed to load posts. Please try again.");
    } finally {
      // delay to show loading :) --> because is very quick
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return {
    // Funcations
    handleFetchData,

    // States
    posts,
    hasMore,
    loading,
    error,
    skip,

    // Refs
    observerRef,
  };
};

export default useDataFeed;
