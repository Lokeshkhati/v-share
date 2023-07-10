import { BsThreeDots } from "react-icons/bs";
import moment from "moment";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const dateTimeAgo = moment(new Date(post.createdAt)).fromNow();
  
  return (
    <div>
      <div className="flex items-center text-md  justify-between">
        <div className="flex gap-2 items-center">
          <Link to={`profile/${post.author}`} className="font-bold ">
            {post.authorName}
          </Link>
          <span className="hidden sm:block text-[#9A9A9A]">
            {post.authorUserName}
          </span>
          <div className="w-1.5 h-1.5  rounded-full bg-[#9A9A9A]"></div>
          <span className="text-[#9A9A9A]">{dateTimeAgo}</span>
        </div>
        <button className="font-bold  text-[#9A9A9A]">
          <BsThreeDots size="18" />
        </button>
      </div>
      <Link to={`/post/${post._id}`} className="mt-2">
        <span className=" tracking-wide ">{post?.content}</span>
      </Link>
    </div>
  );
};
export default PostCard;
