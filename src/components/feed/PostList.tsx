import PostItem from "./PostItem";
import PostItemSkeleton from "../skeleton/PostItemSkeleton";
import useDataFeed from "../../hooks/useDataFeed";

const PostList = () => {
  const { posts, hasMore, loading, error, skip, observerRef } = useDataFeed(); // Hook manage the feed

  // Display loading for initial page load
  if (loading && skip === 0) {
    return (
      <div className=" py-20 min-h-screen gap-3">
        <PostItemSkeleton />
      </div>
    );
  }

  // Display error message if an error occurred
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-textError">{error}</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 py-10 pt-20 relative">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      {/* Observer element */}
      {hasMore && !loading && <div ref={observerRef} />}

      {/* Loading more posts */}
      {hasMore && loading && skip > 0 && (
        <div className="flex items-center justify-center py-4 h-40 fixed bottom-0 right-0 w-full z-30 bg-gradient-to-t from-[#f6f6f6] via-[#f6f6f6ef] to-[#f6f6f600]">
          <span className=" bg-secondary px-10 py-5 rounded flex items-center gap-3 shadow-sm shadow-shadow border-border border-[1px]">
            Loading more posts...
            <img src="/logo.svg" className="h-7 w-7 animate-spin" alt="" />
          </span>
        </div>
      )}
    </div>
  );
};

export default PostList;
