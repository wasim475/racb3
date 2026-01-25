import { useContext } from "react";
import { FaBars, FaQuestionCircle, FaUserEdit } from "react-icons/fa";
import { Auth } from "../../provide/AuthProvide";
import { NavLink } from "react-router-dom";
import { FaRegNoteSticky, FaWhatsapp } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { SiLibreofficewriter } from "react-icons/si";
import { CiImageOn } from "react-icons/ci";
import { closeDrawer } from "./closeDrawer";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import Avatar from '../login/Avatar';

const Sidebar = () => {
  const { user, logout } = useContext(Auth);
  const navItems = [
     {
      name: <CgProfile/>,
      text: "My Profile",
      path: "/profile",
      auth: true,
    },
    {
      name: <MdOutlineDashboard />,
      text: "Dashboard",
      path: "/dashboard",
      admin: true,
    },
    // { name: <FaRegNoteSticky />, text: "All Notes", path: "/notes" },
    {
      name: <SiLibreofficewriter />,
      text: "Write a Note",
      path: "/write-note",
      auth: true,
    },
    {
      name: <CiImageOn />,
      text: "Get Image URL",
      path: "/get-image-url",
      auth: true,
    },
    { name: <FaUserEdit />, text: "My Notes", path: "/my-notes", auth: true },
    // { name: <FaQuestionCircle />, text: "FAQ", path: "/faq" },
    {
      name: <FaWhatsapp />,
      text: "Group",
      path: "https://chat.whatsapp.com/LrRqT2YHODV51EJIYwvHfG",
    },
    { name: <IoIosLogOut />, text: "Logout", auth: true, action: logout },
  ];
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-5"
            className={`drawer-button ${user ? "":"btn btn-primary"}  fixed top-0.5 right-2 z-50`}
          >
            {user ?  <Avatar/> : <FaBars />}
            
           
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className=" mt-20 z-50">
            <ul className="flex flex-col gap-y-4 text-2xl bg-cyan-700 p-4 rounded-lg">
              {navItems.map((navitem) =>
                navitem.auth && !user ? null : // admin check
                navitem.admin &&
                  user?.role !== "admin" ? null : // path vs action
                navitem.path ? (
                  <NavLink
                    key={navitem.text}
                    to={navitem.path}
                    end={navitem.end}
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                      isActive ? "text-gray-300" : "text-white"
                    }
                  >
                    <div className="flex items-center gap-2">
                      {navitem.name} {navitem.text}
                    </div>
                  </NavLink>
                ) : (
                  <button
                    key={navitem.text}
                    onClick={()=>navitem.action(closeDrawer)}
                    className="flex items-center gap-2"
                  >
                    {navitem.name} {navitem.text}
                  </button>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
