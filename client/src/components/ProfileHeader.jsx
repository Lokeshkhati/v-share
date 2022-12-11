import { useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { usePosts } from "../contexts/posts-context";
import EditProfile from "./EditProfile";
import Modal from "./Modal";

const ProfileHeader = () => {
  // const ProfileHeader = ({ userProfile, posts }) => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: user.fullName,
    bio: "khatikhati khati",
    website: "https://beta.reactjs.org/learn/updating-objects-in-state",
  });
  const { name, bio, website } = userInfo;
  const { posts, followers, following } = usePosts();
  const postCount = posts.length;
  return (
    <>
      <div>
        <div className=" flex  flex-col justify-center items-center gap-4">
          <div className=" bg-[#C4C4C4] rounded-full"></div>
          <img
            className=" h-20 w-20 sm:h-32 sm:w-32 rounded-full"
            src="https://avatars.githubusercontent.com/u/5550850?v=4"
            alt="profile photo"
          />
          <div className=" flex  flex-col justify-center items-center gap-2">
            <span className="font-bold text-lg"> {name} </span>
            <span className="text-[#9A9A9A] text-lg">@{user.username}</span>
            <button
              onClick={() => setShowModal(!showModal)}
              className="px-4 py-1 border border-[#9A9A9A]"
            >
              Edit Profile
            </button>
            {/* <button
          className="px-6 text-white py-1 bg-[#FF3B30] border border-[#9A9A9A]"
        >
          Follow
        </button>
        <button
          className="px-6 text-white py-1 bg-[#FF3B30] border border-[#9A9A9A]"
        >
          Following
        </button> */}
          </div>
        </div>
        <div className="text-center mt-4">
          <h4>{bio}</h4>
          <a href={website} target="_blank" className="text-[#FF3B30]">
            {website}
          </a>
        </div>

        <div className="flex justify-center">
          <div className="w-[400px] flex justify-center gap-10 p-4 mt-4 text-center bg-white">
            <div>
              <h1 className="font-bold text-lg">{following} </h1>
              <span className="text-lg font-semibold">Following</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">{postCount} </h1>
              <span className="text-lg font-semibold">Posts</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">{followers} </h1>
              <span className="text-lg font-semibold">Followers</span>
            </div>
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="max-w-2xl w-[20rem] sm:w-[30rem]">
          <EditProfile
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setShowModal={setShowModal}
          />
        </div>
      </Modal>
    </>
  );
};
export default ProfileHeader;
