import React, { useState } from "react";
import { PostItemPops } from "../../types/postTypes";
import { icons } from "../../constant/icons";

const Reactions = ({ post }: PostItemPops) => {
    const [isLiked, setIsLiked] = useState<Boolean>(post.didLike);
    const [likesCount, setLikesCount] = useState<number>(post.likes || 0);

    const handleToggleLike = () => {
        isLiked ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1);
        setIsLiked(!isLiked);
      };
  
  return (
    <React.Fragment>
      <div className="flex items-center justify-between px-[24px] text-[#747877] text-sm font-[400]">
        <div className=" duration-150  flex items-center gap-2">
          <img src={icons.like} alt="likes" />
          <span>{likesCount > 0 && likesCount} Likes</span>
        </div>

        <div className="">{post.comments > 0 && post.comments} Comments</div>
      </div>

      {/* Actions Section */}
      <div className=" flex items-center justify-evenly border-t-[1px] font-medium border-border mx-6 text-btnAction py-[7px]">
        <button
          onClick={handleToggleLike}
          className={` flex items-center gap-2 px-[24px] py-2 rounded max-h-[40px] active:scale-110 duration-75 ${
            isLiked && "text-textActive duration-75"
          }`}
        >
          <img
            src={isLiked ? icons.likeActive : icons.likeInActive}
            alt="like"
          />
          <span>Like</span>
        </button>
        <button className=" flex items-center gap-2 px-[24px] py-2 rounded max-h-[40px]">
          <img src={icons.comment} alt="comment" />
          <span>Comment</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Reactions;
