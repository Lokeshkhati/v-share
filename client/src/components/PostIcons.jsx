import { useState } from "react";
import {
  BsBookmark,
  BsFillBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

import * as api from "../api";
import { TfiComment } from "react-icons/tfi";
import { usePosts } from "../contexts/posts-context";
import IconButton from "./IconButton";

const PostIcons = ({ post }) => {
  const [toggle, setToggle] = useState(false);
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const { bookmarks, dispatch } = usePosts();

  const bookmarkedPosts = bookmarks?.find(
    (bookmark) => bookmark?._id === post._id
  );
  const isBookmarked = bookmarkedPosts ? true : false;
  const likeAndUnlike = async () => {
    const { data } = await api.like(post._id);
    // const { post } = data;
    dispatch({ type: "LIKE_OR_UNLIKE", payload: { post } });
  };

  return (
    <div className="text-[#9A9A9A]  flex justify-between items-center mt-2 pt-2.5">
      <div
        onClick={() => setIsLiked(!isLiked)}
        className="flex justify-between items-center gap-2 "
      >
        <IconButton Icon={isLiked ? BsHeartFill : BsHeart} color="red" />
        {post.likes.length > 0 && post.likes.length}
      </div>
      <div className="flex justify-between items-center gap-4 ">
        <button>
          <IconButton Icon={TfiComment} />
        </button>
      </div>
      <div className="flex justify-between items-center gap-4 ">
        <IconButton Icon={TbEdit} />
      </div>
      <div
        onClick={() => setToggle(!toggle)}
        className="  flex justify-between items-center gap-4 "
      >
        <IconButton Icon={isBookmarked ? BsBookmark : BsFillBookmarkFill} />
      </div>
    </div>
  );
};
export default PostIcons;
