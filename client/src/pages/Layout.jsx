import { Outlet } from "react-router-dom";
import { MobileMenu, Navbar, Sidebar, Widgets } from "../components";
import { useToggle } from "../hooks/useToggle";

const Layout = () => {
  const [isOpen, setIsOpen] = useToggle();
  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <div className="min-h-screen bg-[#ebebeb]   overflow-hidden ">
        <div className=" max-w-[1360px] mx-auto px-3 sm:px-6 md:px-8">
          <Sidebar />
          {isOpen && <MobileMenu setIsOpen={setIsOpen} />}

          <div className=" lg:pl-[19.5rem]">
            <main className="max-w-2xl mx-auto pt-12 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
              <Outlet />
            </main>
            <Widgets />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
