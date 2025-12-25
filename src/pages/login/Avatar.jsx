import { useContext } from 'react';
import { Auth } from '../../provide/AuthProvide';
import { Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";

const Avatar = () => {
    const { logout } = useContext(Auth);
    const handleLogout = () => {
        logout();
    }
  return (
    <>
     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-7 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {/* <li>
          {/* <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li> */}
        <Link to="/dashboard">Dashboard</Link>
        {/* <li><a onClick={handleLogout}><IoMdLogOut/></a></li> */}
      </ul>
    </div>
    </>
  );
};

export default Avatar;
