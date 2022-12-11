import React, { useState } from "react";

import {
  BsHeart,
  BsHeartFill,
  BsShare,
  BsBookmark,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { TfiComment } from "react-icons/tfi";

import { BsThreeDots } from "react-icons/bs";
import { usePosts } from "../contexts/posts-context";
import * as api from "../api";

import moment from "moment";

const Post = ({ post }) => {
  const {
    likes,
    bookmarks,
    addPostToBookmarks,
    removePostFromBookmarks,
    addLikeToPost,
    removeLikeFromPost,
    dispatch,
  } = usePosts();
  console.log(post)

  const [toggle, setToggle] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const dateTimeAgo = moment(new Date(post.createdAt)).fromNow();

  const bookmarkedPosts = bookmarks?.find(
    (bookmark) => bookmark?.id === post._id
  );
  const isBookmarked = bookmarkedPosts ? true : false;

  console.log(post._id);
  const likeAndUnlike = async () => {
    await api.like(post._id);
    // const { data } = await api.like(post._id);
    // console.log(data);
    // const { posts } = data;
    // const { likes } = posts;
    dispatch({ type: "LIKE_OR_UNLIKE" });
    // dispatch({ type: "LIKE_OR_UNLIKE", payload: { likes } });
  };

  return (
    <div className="flex my-5 bg-white p-2.5 sm:p-5 space-x-3 ">
      <img
        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full"
        src="https://avatars.githubusercontent.com/u/5550850?v=4"
        alt="brad"
      />
      <div className="w-full ">
        <div className="flex items-center text-md  justify-between">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold ">{post.authorName} </h1>
            <span className="text-[#9A9A9A]">@ {post.authorUserName} </span>
            <div className="w-1.5 h-1.5  rounded-full bg-[#9A9A9A]"></div>
            <span className="text-[#9A9A9A]">{dateTimeAgo}</span>
          </div>
          <button className="font-bold  text-[#9A9A9A]">
            <BsThreeDots size="18" />
          </button>
        </div>
        <div className="mt-2">
          <span className=" tracking-wide ">{post?.content}</span>
        </div>

        <div className="text-[#9A9A9A]  flex justify-between items-center mt-2 pt-2.5">
          <div
            onClick={() => setIsLiked(!isLiked)}
            className="flex justify-between items-center gap-2 "
          >
            <button onClick={likeAndUnlike}>
              {isLiked ? (
                <BsHeartFill color="#e11d48" size="20" />
              ) : (
                <BsHeart size="20" />
              )}
            </button>
            {post.likes.length > 0 && post.likes.length}
          </div>
          <div className="flex justify-between items-center gap-4 ">
            <button>
              <TfiComment size="20" />
            </button>
          </div>
          <div className="flex justify-between items-center gap-4 ">
            <button>
              <BsShare size="20" />
            </button>
          </div>
          <div
            onClick={() => setToggle(!toggle)}
            className="  flex justify-between items-center gap-4 "
          >
            {isBookmarked ? (
              <button onClick={() => removePostFromBookmarks(post.id)}>
                <BsFillBookmarkFill size="20" />
              </button>
            ) : (
              <button onClick={() => addPostToBookmarks(post)}>
                <BsBookmark size="20" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
