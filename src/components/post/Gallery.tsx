import React from "react";
import { PostItemPops } from "../../types/postTypes";

const Gallery = ({ post }: PostItemPops) => {
  return (
    <React.Fragment>
      {post.images.length == 1 && (
        <div className="relative w-full max-h-[517px] bg-[#000000e6]">
          <div
            className={`absolute inset-0 bg-cover bg-center opacity-40`}
            style={{ backgroundImage: `url(${post.images[0]})` }}
          ></div>
          <img
            loading="lazy"
            className="relative h-full max-w-[881px] mx-auto w-full object-cover"
            src={post.images[0]}
            alt={post.text}
          />
        </div>
      )}
      {post.images.length == 2 && (
        <div className="w-full max-h-[517px] ">
          <div className=" grid grid-cols-2 gap-1.5 max-h-[517px] overflow-hidden">
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              src={post.images[0]}
              alt={post.text}
            />
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              src={post.images[1]}
              alt={post.text}
            />
          </div>
        </div>
      )}
      {post.images.length >= 3 && (
        <div className="grid grid-cols-2 gap-1.5 overflow-hidden w-full max-h-[517px] ">
          <img
            loading="lazy"
            className="h-full w-full  object-cover"
            src={post.images[0]}
            alt={post.text}
          />
          <div className=" grid grid-cols-1 gap-1.5 max-h-[517px]">
            <img
              loading="lazy"
              className="object-cover w-full max-h-[calc(517px/2)]"
              src={post.images[1]}
              alt={post.text}
            />
            <div className=" relative">
              {post.images.length > 3 && (
                <span className="absolute inset-0 z-30 bg-[#000000a0] w-full h-full flex items-center justify-center text-6xl text-secondary">
                  +{post.images.length - 3}
                </span>
              )}
              <img
                loading="lazy"
                className="object-cover w-full max-h-[calc(517px/2)]"
                src={post.images[2]}
                alt={post.text}
              />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Gallery;
