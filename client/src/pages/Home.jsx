import { Feed, Input } from "../components";
import { usePosts } from "../contexts/posts-context";

const Home = () => {
  const { posts } = usePosts();

  return (
    <div className="relative">
      <Input />
      <div className="flex justify-between items-center my-7">
        <h1 className="font-bold text-lg">Latest Posts</h1>
        <span>Filter</span>
      </div>
      <Feed posts={posts} />
    </div>
  );
};

export default Home;
