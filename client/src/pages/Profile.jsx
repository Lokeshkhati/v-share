// import { usePosts } from "../contexts/posts-context";

import { Post, ProfileHeader } from "../components";

const Profile = () => {
  //   const { posts } = usePosts();
  //   const filteredPosts = posts.filter(
  //     (post) => post.username === userProfile.username
  //   );
  return (
    <div className="">
      <ProfileHeader />
      {/* <ProfileHeader userProfile={userProfile} posts={posts} /> */}
      <h1 className="font-bold text-lg mt-8">Your Posts</h1>
      <Post />

      {/* {filteredPosts
        .slice()
        .reverse()
        .map((post) => (
          <Post data={post} />
        ))} */}
    </div>
  );
};

export default Profile;
