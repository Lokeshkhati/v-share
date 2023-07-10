import { useAuth } from "../contexts/auth-context";
import User from "./User";

const WhoToFollow = () => {
  const { currentUser, allUsers } = useAuth();

  const filteredUsers = allUsers.filter(
    (user) => user.fullName !== currentUser.fullName
  );

  return (
    <div className="  bg-[#FFFFFF] mt-6 p-4 ">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[#1C1C1E]">Who to Follow?</h1>
        <button className="font-bold text-[#FF3B30]">Show more</button>
      </div>

      {filteredUsers.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
};

export default WhoToFollow;
