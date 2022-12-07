import { AiOutlineHome } from "react-icons/ai";
import { BsArchive, BsTrash } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoArchive } from "react-icons/go";
import { MdLabelOutline } from "react-icons/md";

const SidebarData = [
  {
    label: "Home",
    icon: <AiOutlineHome size="25" />,
    path: "/",
  },

  {
    label: "Explore",
    icon: <GoArchive size="25" />,
    path: "/explore",
  },
  {
    label: "Bookmarks",
    icon: <MdLabelOutline size="25" />,
    path: "/bookmarks",
  },
  {
    label: "Notifications",
    icon: <BsTrash size="25" />,
    path: "/notifications",
  },
  {
    label: "Profile",
    icon: <CgProfile size="25" />,
    path: "/profile",
  },
];

export default SidebarData;
