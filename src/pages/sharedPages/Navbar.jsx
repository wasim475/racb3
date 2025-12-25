import { useContext } from "react";
// import Avatar from './Login/Avatar';
// import Login from './Login/Login';
// import { DataState } from '../Provider/DataProvider';
import { Link } from "react-router-dom";
import { Auth } from "../../provide/AuthProvide";
import Login from "../login/Login";
import Avatar from "../login/Avatar";
import logo from "../../assets/racLogo.png";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const { user } = useContext(Auth);
  // console.log(user);

  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Photos</a>
            </li>
            <li>
                  <a
                    href="https://chat.whatsapp.com/LrRqT2YHODV51EJIYwvHfG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:underline"
                  >
                    WhatsApp Group
                  </a>
                </li>
            <li>
              <a>About Admin</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xs bangla font-normal">
        <span className='font-extrabold text-2xl flex items-center relative'><FaHome/>Home
        
        <span className='text-sm absolute right-0 -top-0.5 font-bold text-red-400'>RAC</span>
        </span>

          {/* <img src={logo} alt="Logo" className="h-7  object-contain" /> */}

        </Link>
      </div>

     <div>
      {!user ? <Login /> : <Avatar />}

     </div>
    </div>
  );
};

export default Navbar;
