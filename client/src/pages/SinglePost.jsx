import { useState } from "react";
import Comment from "../components/Comment";
import PostCard from "../components/PostCard";
import PostIcons from "../components/PostIcons";

const SinglePost = () => {
  const [value, setValue] = useState("");
  let post = "";
  return (
    <div className=" my-5 bg-white p-2.5 sm:p-5 space-x-3">
      <h1>Back</h1>
      {/* <PostCard post={post} /> */}
      <div> 12:11 AM · Oct 11, 2021</div>
      <div>4 Likes</div>
      {/* <PostIcons post={post} /> */}
      {/* commentForm */}
      <form className="flex items-center justify-between gap-4 ">
        <img
          className="w-12 h-12  rounded-full"
          src="https://avatars.githubusercontent.com/u/5550850?v=4"
          alt="brad"
        />
        <input
          type="text"
          name="value"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Comment your reply"
          className="bg-[#F7F7F7] text-lg w-full outline-none border py-1 pl-4 "
        />
        <button
          type="submit"
          className="bg-[#FF3B30] px-4 py-1.5 sm:w-24  font-semi-bold text-[#FFFFFF] "
        >
          Post
        </button>
      </form>
      {/* comments */}
      <Comment />
    </div>
  );
};
export default SinglePost;
