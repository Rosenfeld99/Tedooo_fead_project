import { PostItemPops } from "../../types/postTypes";
import { getTimeAgo } from "../../utils/func";

const UserInfo = ({ post }: PostItemPops) => {
  return (
    <div className=" flex items-center gap-3 max-h-[40px] w-[379px]">
      <img
        loading="lazy"
        className="w-10 aspect-square rounded-full object-cover"
        src={post.avatar}
        alt="avatar"
      />
      <div className=" flex flex-col items-start gap-0">
        <div className="font-[500] text-base text-[#292f2d]">
          {post.username}
        </div>
        <div className=" flex items-center gap-1 text-[14px] text-neutral">
          <span className="text-textActive font-semibold text-sm">
            {post.shopName}
          </span>
          {post.shopName && "·"}
          <span className=" text-neutral">{getTimeAgo(post.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
