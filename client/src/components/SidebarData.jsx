import { AiOutlineHome, AiOutlineRocket } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoArchive } from "react-icons/go";
import { MdLabelOutline } from "react-icons/md";

import { IoMdNotificationsOutline } from "react-icons/io";

const SidebarData = [
  {
    label: "Home",
    icon: <AiOutlineHome size="25" />,
    path: "/",
  },

  {
    label: "Explore",
    icon: <AiOutlineRocket size="25" />,
    path: "/explore",
  },
  {
    label: "Bookmarks",
    icon: <MdLabelOutline size="25" />,
    path: "/bookmarks",
  },
  {
    label: "Notifications",
    icon: <IoMdNotificationsOutline size="25" />,
    path: "/notifications",
  },
  {
    label: "Profile",
    icon: <CgProfile size="25" />,
    path: "/profile/:username",
  },
];

export default SidebarData;
