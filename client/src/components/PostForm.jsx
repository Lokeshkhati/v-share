import { useState, useRef } from "react";
import { GrImage } from "react-icons/gr";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { usePosts } from "../contexts/posts-context";
import * as api from "../api";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  // const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);
  const { dispatch } = usePosts();
  const addImageToPost = () => { };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // dispatch({ type: "CREATE_POST_BEGIN" });

    // dispatch({ type: "CREATE_POST_SUCCESS", payload: newPost });
    try {
      const newPost = {
        content: inputValue,
      };
      await api.createPost(newPost);
      dispatch({ type: "CREATE_POST_SUCCESS" });
      setInputValue("");
    } catch (error) {
      // dispatch({ type: "CREATE_POST_ERROR" });
      console.log(error.message);
    }
  };

  return (
    <div className="overflow-hidden flex bg-white p-4  sm:p-6 space-x-3 ">
      <img
        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full"
        src="https://avatars.githubusercontent.com/u/5550850?v=4"
        alt="brad"
      />
      <form onSubmit={handleSubmit} className="w-full ">
        <div
          className={`${selectedFile && "pb-7"} ${inputValue && "space-y-2.5"}`}
        >
          <textarea
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            rows="2"
            autoFocus={true}
            className="  scroll-none resize-none  outline-none bg-[#F7F7F7] placeholder-gray-500 tracking-wide pl-4 pt-2 w-full h-[90px]"
            placeholder="Write something interesting . . ."
          />
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer "
                onClick={() => selectedFile(null)}
              >
                {/* XIcon */}
                <h1 className="h-5">X</h1>
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-2.5">
          <div className="flex justify-between items-center gap-4 ">
            <div onClick={() => filePickerRef.current.click()}>
              <button className="h-[22px] ">
                <GrImage size="20" />
              </button>
              <input
                type="file"
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>

            <div>
              <button className="h-[22px]  ">
                <AiOutlineGif size="20" />
              </button>
            </div>
            <div>
              <button className="h-[22px]  ">
                <BsEmojiHeartEyes size="20" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#FF3B30] px-4 py-1 sm:w-24  font-semi-bold text-[#FFFFFF] "
            disabled={!inputValue.trim() && !selectedFile}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
