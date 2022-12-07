import React from "react";
import Post from "./Post";

const Feed = ({ posts }) => {
  const postsList = posts?.map((post) =>  <Post post={post} /> );
  return <div>{postsList}</div>;
};

export default Feed;
