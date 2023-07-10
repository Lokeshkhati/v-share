import { Feed } from "../components";
import { usePosts } from "../contexts/posts-context";

const Bookmarks = () => {
  const { bookmarks } = usePosts();
  return (
    <div>
      <h1 className="font-bold text-lg">Your Bookmarks</h1>
      <Feed posts={bookmarks} />
    </div>
  );
};

export default Bookmarks;
