import { BsThreeDots } from "react-icons/bs";
import { useAuth } from "../contexts/auth-context";
import { useToggle } from "../hooks/useToggle";
import { useNavigate } from "react-router-dom";
import * as api from "../api";
const UserLogout = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const [showModal, setShowModal] = useToggle();
  const navigate = useNavigate();

  const logout = async () => {
    await api.logout();
    navigate("/login", { replace: true });
    // setCurrentUser({
    //   fullName: "",
    //   username: "",
    //   following: [],
    //   followers: [],
    // });
  };

  return (
    <>
      <div className=" mt-40">
        <div className="flex items-center justify-between ">
          <div
            title="View Profile"
            onClick={() => navigate("/profile")}
            className="flex cursor-pointer gap-4 items-center "
          >
            <img
              className=" w-12 h-12 rounded-full"
              src="https://avatars.githubusercontent.com/u/5550850?v=4"
              alt="brad"
            />
            <div className="">
              <h1 className="font-bold text-[#1C1C1E]">
                {currentUser.fullName}
              </h1>
              <span className="text-[#9A9A9A]">@{currentUser.username}</span>
            </div>
          </div>
          <button
            onClick={() => setShowModal(!showModal)}
            title="Logout"
            className="  font-bold  text-[#9A9A9A]"
          >
            <BsThreeDots size="30" />
          </button>
        </div>
      </div>
      {showModal && (
        <div className=" flex items-center justify-center relative -top-20 left-32 h-10 w-28 rounded-sm bg-white">
          <button onClick={logout} className=" font-bold">
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default UserLogout;
