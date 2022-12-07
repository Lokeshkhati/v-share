import React, { useState } from "react";

import { BsThreeDots } from "react-icons/bs";
import Modal from "./Modal";

const UserLogout = () => {
  return (
    <div className=" mt-40">
      <div className="flex items-center justify-between ">
        <div className="flex  gap-4 items-center ">
          <img
            className=" w-12 h-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/5550850?v=4"
            alt="brad"
          />
          <div className="">
            <h1 className="font-bold text-[#1C1C1E]">Lokesh Khati</h1>
            <span className="text-[#9A9A9A]">@lokeshkhati</span>
          </div>
        </div>
        <button className="  font-bold  text-[#9A9A9A]">
          <BsThreeDots size="30" />
        </button>
      </div>
    </div>
  );
};

export default UserLogout;
