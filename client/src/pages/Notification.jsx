import { BsThreeDots } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import PostCard from "../components/PostCard";
import heart from "../images/heart.svg";
import comment from "../images/comment.svg";

const notifications = [{
  type: 'like',
  label: "someone liked your post"
}, {
  type: 'comment',
  label: "someone commented on your post"
}]
const Notification = () => {
  return (
    <div className="flex  bg-white   sm:pt-4 sm:px-4 space-x-3 ">
      <img src={heart} alt="heart-svg" className="h-10 " />
      <h2>Lokesh liked your post</h2>
      {/* <img src={comment} alt="comment-svg" className="h-10 " /> */}
      <div>
        {/* <div className="flex  space-x-3 ">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/5550850?v=4"
            alt="brad"
          /> */}
        {/* <PostCard post={post} /> */}
        {/* </div> */}
        {/* <div className="flex my-5 border border-[#9A9A9A]  p-2.5 sm:p-5 space-x-3 ">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/5550850?v=4"
            alt="brad"
          />
          <PostCard post={post} />
        </div> */}
      </div>
    </div>
  );
};
export default Notification;
