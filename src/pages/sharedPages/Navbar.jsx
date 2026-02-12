import { useContext } from "react";
// import Avatar from './Login/Avatar';
// import Login from './Login/Login';
// import { DataState } from '../Provider/DataProvider';
import { Link, NavLink } from "react-router-dom";
import { Auth } from "../../provide/AuthProvide";
import Login from "../login/Login";
import Avatar from "../login/Avatar";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaUserEdit, FaWhatsapp, FaQuestionCircle } from "react-icons/fa";
import Reordering from '../utility/Reordering';
import Sidebar from '../utility/Sidebar';
import Search from '../utility/Search';

const Navbar = () => {
  const { user } = useContext(Auth);
   
  // console.log(user);

  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between fixed top-0 left-0  z-50">
      {/* Navbar Start */}
      <div className="navbar-start w-14">
          {/* <Search/> */}
        <Link to="/" className="btn btn-ghost text-xs bangla font-normal">
        <span className='font-extrabold text-2xl flex items-center relative'>
        
        <span className='text-sm  font-bold text-red-400'> <Reordering/> </span>
        </span>

          {/* <img src={logo} alt="Logo" className="h-7  object-contain" /> */}

        </Link>
      </div>

     <div className='fixed top-1 right-1/3 md:right-1/2'>
      <Search/>
     </div>

     <div className='justify-between items-center px-4 gap-2 -mt-5'>
      {!user && <Login />}

      <Sidebar/>
     </div>
    </div>
  );
};

export default Navbar;
