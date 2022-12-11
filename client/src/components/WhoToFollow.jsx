import React, { useState } from "react";
import { usePosts } from "../contexts/posts-context";

const WhoToFollow = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const { posts, setFollowingCount } = usePosts();

  const handleFollow = () => {
    setFollowingCount((prevCount) => prevCount + 1);
  };
  const handleUnFollow = () => { 
    setFollowingCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="  bg-[#FFFFFF] mt-6 p-4 ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[#1C1C1E]">Who to Follow?</h1>
        <button className="font-bold text-[#FF3B30]">Show more</button>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/5550850?v=4"
            alt="brad"
          />
          <div>
            <h1 className="font-bold text-[#1C1C1E]">Lokesh Khati</h1>
            <span className="text-[#9A9A9A]">@lokeshkhati</span>
          </div>
        </div>
        <div onClick={() => setIsFollowed(!isFollowed)}>
          {isFollowed ? (
            <button
              onClick={handleUnFollow}
              className="font-bold text-[#FF3B30]"
            >
              Unfollow
            </button>
          ) : (
            <button onClick={handleFollow} className="font-bold text-[#FF3B30]">
              Follow +
            </button>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/5550850?v=4"
            alt="brad"
          />
          <div>
            <h1 className="font-bold text-[#1C1C1E]">Lokesh Khati</h1>
            <span className="text-[#9A9A9A]">@lokeshkhati</span>
          </div>
        </div>
        <button className="font-bold text-[#FF3B30]">Follow +</button>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/5550850?v=4"
            alt="brad"
          />
          <div>
            <h1 className="font-bold text-[#1C1C1E]">Lokesh Khati</h1>
            <span className="text-[#9A9A9A]">@lokeshkhati</span>
          </div>
        </div>
        <button className="font-bold text-[#FF3B30]">Follow +</button>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/5550850?v=4"
            alt="brad"
          />
          <div>
            <h1 className="font-bold text-[#1C1C1E]">Lokesh Khati</h1>
            <span className="text-[#9A9A9A]">@lokeshkhati</span>
          </div>
        </div>
        <button className="font-bold text-[#FF3B30]">Follow +</button>
      </div>
    </div>
  );
};

export default WhoToFollow;
