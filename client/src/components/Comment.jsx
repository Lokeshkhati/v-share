import React from "react";

import { BsHeart, BsShare, BsBookmark } from "react-icons/bs";
import { TfiComment } from "react-icons/tfi";

import { BsThreeDots } from "react-icons/bs";
import IconButton from "./IconButton";

const Comment = () => {
  return (
    <div className="my-5 flex mt-5 bg-white  p-5 space-x-3 ">
      <img
        className="w-10 h-10 rounded-full"
        src="https://avatars.githubusercontent.com/u/5550850?v=4"
        alt="brad"
      />
      <div className="w-full ">
        <div className="flex items-center  justify-between">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold ">Prince Singh</h1>
            <span className="text-[#9A9A9A]">@princesingh</span>
            <div className="w-1.5 h-1.5  rounded-full bg-[#9A9A9A]"></div>
            <span className="text-[#9A9A9A]">1m ago</span>
          </div>
          <button className="font-bold  text-[#9A9A9A]">
            <BsThreeDots size="22" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#9A9A9A]">Replying to</span>
          <span className="text-[#FF3B30]">@lokeshkhati</span>
        </div>
        <span>Interested</span>

        <div className="text-[#9A9A9A]  flex justify-between items-center mt-2 pt-2.5">
          <IconButton Icon={BsHeart} />
          <IconButton Icon={TfiComment} />
          <IconButton Icon={BsShare} />
          <IconButton Icon={BsBookmark} />
        </div>
      </div>
    </div>
  );
};

export default Comment;
