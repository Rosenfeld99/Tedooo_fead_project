const PostItemSkeleton = () => {
    return (
      <div
        className={`w-full max-w-[1120px] pt-[24px] flex flex-col gap-[16px] md:min-h-[550px] mx-auto hover:shadow-xl hover:shadow-border bg-secondary shadow-md shadow-shadow rounded`}
      >
        <div className="flex flex-col gap-[16px] px-[24px] max-w-[1118px]">
          {/* User Section Skeleton */}
          <div className="flex items-center gap-3 max-h-[40px] w-[379px]">
            <div className="w-10 aspect-square rounded-full bg-skeleton animate-pulse"></div>
            <div className="flex flex-col items-start gap-1">
              <div className="w-24 h-4 bg-skeleton animate-pulse rounded"></div>
              <div className="flex items-center gap-1">
                <div className="w-16 h-3 bg-skeleton animate-pulse rounded"></div>
                <div className="w-10 h-3 bg-skeleton animate-pulse rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Post description skeleton */}
          <div className="space-y-3 py-1 animate-pulse">
            <div className="h-2 bg-skeleton rounded w-full"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-skeleton rounded col-span-2"></div>
              <div className="h-2 bg-skeleton rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-skeleton rounded w-full"></div>
          </div>
  
          {/* Post images skeleton */}
          <div className="w-full h-[450px] bg-skeleton animate-pulse rounded"></div>
  
          {/* Reactions Section Skeleton */}
          <div className="flex items-center justify-between px-[24px]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-skeleton animate-pulse rounded-full"></div>
              <span className="w-12 h-3 bg-skeleton animate-pulse rounded"></span>
            </div>
            <div className="w-12 h-3 bg-skeleton animate-pulse rounded"></div>
          </div>
  
          {/* Actions Section Skeleton */}
          <div className="flex items-center justify-evenly border-t-[1px] border-border mx-6 py-[15px]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-skeleton animate-pulse rounded"></div>
              <div className="w-12 h-3 bg-skeleton animate-pulse rounded"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-skeleton animate-pulse rounded"></div>
              <div className="w-12 h-3 bg-skeleton animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PostItemSkeleton;
  