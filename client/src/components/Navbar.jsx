import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const Navbar = ({ setIsOpen }) => {
  const { currentUser } = useAuth();
  return (
    <div className=" h-14 bg-white sticky top-0 z-40 w-full  ">
      <div className="max-w-7xl mx-auto">
        <nav className=" p-2 flex items-center justify-between">
          <div>
            <button className="lg:hidden  text-black" onClick={setIsOpen}>
              <svg width="24" height="24">
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>

            <Link to="/" className="font-bold text-2xl font-serif">
              <span className=" text-[#FF3B30]">V</span>-Share
            </Link>
          </div>
          <div>
            <h1 className="sm:text-lg font-bold">
              👋 Hi ! {currentUser.fullName}
            </h1>
            <Link to='/login'>Login</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
