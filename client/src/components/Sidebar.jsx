import React, { useState } from "react";
import { useNavigate } from "react-router";
import Input from "./PostForm";
import Modal from "./Modal";
import SidebarData from "./SidebarData";
import UserLogout from "./UserLogout";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const sidebar = SidebarData.map(({ label, icon, path }) => (
    <li
      style={{
        fontWeight: window.location.pathname === path ? "bold" : "",
      }}
      className={` flex gap-4 h-10  items-center cursor-pointer `}
      key={path}
      onClick={() => {
        navigate(path);
      }}
    >
      <div className="">{icon} </div>
      <div className="tracking-wider">{label} </div>
    </li>
  ));

  return (
    <div className="hidden lg:block fixed z-20 inset-0 top-[6rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto scroll-none h-screen">
      <nav className="  lg:leading-6 relative  ">
        <ul className="space-y-4">{sidebar}</ul>
        <button
          onClick={() => setShowModal(true)}
          className="hidden w-full lg:block bg-[#FF3B30] tracking-wider mt-6 px-8 py-1 w-58 text-[#FFFFFF] "
        >
          Create New Post
        </button>
        <UserLogout />
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div className=" max-w-2xl w-[42rem] xl:max-w-none">
            <Input />
          </div>
        </Modal>
      </nav>
    </div>
  );
};

export default Sidebar;
