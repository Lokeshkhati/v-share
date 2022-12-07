import { Link } from "react-router-dom";

const Navbar = ({ setIsOpen }) => {
  return (
    <div className=" h-14 bg-white sticky top-0 z-40 w-full  ">
      <div className="max-w-7xl mx-auto">
        <nav>
          <button className="lg:hidden  text-black" onClick={setIsOpen}>
            <svg width="24" height="24">
              <path
                d="M5 6h14M5 12h14M5 18h14"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>

          <Link to="/" className="font-bold text-2xl font-serif">
            <span className=" text-[#FF3B30]">V</span>-Share
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
