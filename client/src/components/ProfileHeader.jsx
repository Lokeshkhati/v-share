import { useState } from "react";
import { useAuth } from "../contexts/auth-context";
import EditProfile from "./EditProfile";
import Modal from "./Modal";
import { BiLoader } from "react-icons/bi";

const ProfileHeader = () => {
  const { currentUser, userProfile } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: userProfile.fullName,
    bio: "add something about yourself",
    website: "add your website link here",
  });
  const { name, bio, website } = userInfo;

  const postCount = userProfile.posts?.length;
  const following = userProfile.following?.length;
  const followers = userProfile.followers?.length;

  const isFollowing = userProfile.followers?.some(
    (person) => person.fullName === currentUser.fullName
  );

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
            <span className="font-bold text-lg"> {userProfile.fullName} </span>
            <span className="text-[#9A9A9A] text-lg">
              @{userProfile.username}
            </span>
            {userProfile.fullName === currentUser.fullName ? (
              <button
                onClick={() => setShowModal(!showModal)}
                className="px-4 py-1 border border-[#9A9A9A]"
              >
                Edit Profile
              </button>
            ) : (
              <button className="px-6 text-white py-1 bg-[#FF3B30] ">
                {isFollowing ? "Unfollow" : "Follow"}
              </button>
            )}
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
              <h1 className="font-bold text-lg">
                {following > 0 ? following : 0}
              </h1>
              <span className="text-lg font-semibold">Following</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">{postCount} </h1>
              <span className="text-lg font-semibold">Posts</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">
                {followers > 0 ? followers : 0}
              </h1>
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
