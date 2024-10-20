import { useEffect, useRef } from "react";
import { PostItemPops } from "../../types/postTypes";
import Gallery from "../post/Gallery";
import Description from "../post/Description";
import Reactions from "../post/Reactions";
import { sendImpression } from "../../services/services";
import UserInfo from "../post/UserInfo";

const PostItem = ({ post }: PostItemPops) => {
  const itemRef = useRef<HTMLDivElement | null>(null); // For intersection observer

  // Send the GET request when post becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sendImpression(post.id);
        }
      },
      { threshold: 1 } // Trigger when 100% of the post is visible
    );

    if (itemRef.current) observer.observe(itemRef.current);

    return () => {
      if (itemRef.current) observer.disconnect();
    };
  }, [post.id]);

  return (
    <div
      ref={itemRef}
      className={` w-full max-w-[1120px] pt-[24px] flex flex-col gap-[16px] md:min-h-[550px] mx-auto hover:shadow-xl hover:shadow-border bg-secondary shadow-md shadow-shadow rounded `}
    >
      <div className={` flex flex-col gap-[16px] px-[24px] max-w-[1118px]`}>
        {/* User Section */}
        <UserInfo post={post} />
        {/* Post description */}
        <Description text={post.text} />
      </div>
      {/* Post images */}
      <Gallery post={post} />

      {/* Reactions Section */}
      <Reactions post={post} />
    </div>
  );
};

export default PostItem;
