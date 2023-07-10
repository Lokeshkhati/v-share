import PostIcons from "./PostIcons";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="flex my-5 bg-white p-2.5 sm:p-5 space-x-3 ">
      <Link to={`profile/${post.author}`} className="w-10 h-10 sm:w-14 sm:h-14">
        <img
          className="w-full rounded-full"
          src="https://avatars.githubusercontent.com/u/5550850?v=4"
          alt="brad"
        />
      </Link>
      <div className="w-full ">
        <PostCard post={post} />
        <PostIcons post={post} />
      </div>
    </div>
  );
};

export default Post;
