import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <div className="  flex items-center bg-[#FFFFFF] border-2  border-[#D0D0D0]  px-2 py-2">
      <button>
        <AiOutlineSearch size="25" />
      </button>
      <input
        type="text"
        placeholder="Search Posts,People, anything"
        className=" flex-1 bg-transparent outline-none w-full pl-2"
      />
    </div>
  );
};

export default Searchbar;

