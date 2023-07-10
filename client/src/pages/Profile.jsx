import { Post, ProfileHeader } from "../components";
import { useAuth } from "../contexts/auth-context";
import { useParams } from "react-router-dom";

import * as api from "../api";
import { useEffect } from "react";

const Profile = () => {
  const { userProfile } = useAuth();
  const id = useParams();
  const { setUserProfile } = useAuth();

  const getUserProfile = async () => {
    const { data } = await api.getUserProfile(id.id);
    setUserProfile(data.user);
  };

  useEffect(() => {
    getUserProfile();
  }, [id]);

  return (
    <>
      <ProfileHeader />

      <h1 className="font-bold text-lg mt-8">Your Posts</h1>

      {userProfile.posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
};

export default Profile;
