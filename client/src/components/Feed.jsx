import Post from "./Post";

const Feed = ({ posts }) => {
  const postsList = posts?.map((post) => <Post key={post._id} post={post} />);
  return <div>{postsList}</div>;
};

export default Feed;
