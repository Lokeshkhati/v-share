import { useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";

const User = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const followOrUnFollow = async () => {
    await api.followOrUnFollow(user._id);
    setIsFollowed(!isFollowed);
  };

  return (
    <div className="flex items-center justify-between mt-5">
      <Link to={`/profile/${user._id}`} className="flex items-center gap-4">
        <img
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          src="https://avatars.githubusercontent.com/u/5550850?v=4"
          alt="brad"
        />
        <div>
          <h1 className="font-bold text-[#1C1C1E]">{user.fullName}</h1>
          <span className="text-[#9A9A9A]">@{user.username}</span>
        </div>
      </Link>
      <div onClick={followOrUnFollow}>
        <button className="font-bold text-[#FF3B30]">
          {isFollowed ? " Unfollow" : "Follow +"}
        </button>
      </div>
    </div>
  );
};
export default User;
