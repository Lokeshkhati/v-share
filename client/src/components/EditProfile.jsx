import React, { useRef, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const EditProfile = ({ userInfo, setUserInfo, setShowModal }) => {
  const { name, bio, website } = userInfo;

  const imgRef = useRef(null);
  const addImageToProfile = () => { };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO
  };

  return (
    <div className="bg-white p-5  w-full ">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <button
              onClick={() => setShowModal(false)}
              className="  hover:text-[#FF3B30]"
            >
              <MdOutlineClose size="25" />
            </button>

            <h1 className="font-bold ">Edit Profile</h1>
          </div>
          <button
            type="submit"
            className="bg-[#FF3B30] px-4 py-1 sm:w-24  font-semi-bold text-[#FFFFFF] "
          >
            Save
          </button>
        </div>

        <div className="flex justify-center items-center mt-5 mb-5 ">
          <div
            onClick={() => imgRef.current.click()}
            className="flex justify-center h-20 w-20 sm:h-32 sm:w-32 bg-[#C4C4C4] rounded-full"
          >
            <button>
              <RiImageAddLine size="30" color="gray" />
            </button>
            <input
              type="file"
              hidden
              onChange={addImageToProfile}
              ref={imgRef}
              className="absolute"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-4 ">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[#9A9A9A]">
              Name
            </label>
            <input
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter name"
              className="border border-[#C4C4C4] rounded-sm outline-none p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bio" className="text-[#9A9A9A]">
              Bio
            </label>
            <textarea
              name="bio"
              value={bio}
              onChange={handleChange}
              placeholder="Write something about yourself..."
              className="border min-h-[90px] resize-none p-2 border-[#C4C4C4] rounded-sm outline-none "
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="website" className="text-[#9A9A9A]">
              Website
            </label>
            <input
              name="website"
              value={website}
              onChange={handleChange}
              placeholder="Enter your site link"
              className="border border-[#C4C4C4] rounded-sm outline-none p-2"
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
