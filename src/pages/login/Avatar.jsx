import { Auth } from "../../provide/AuthProvide";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { useContext } from "react";

const Avatar = () => {
  const { logout, user } = useContext(Auth);
  // console.log(user)
  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-7 rounded-full sticky ">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-10 p-2 shadow"
        >
          {user.role ==='admin' ? (
            <Link to="/dashboard" className="text-3xl text-cyan-400">
              <MdSpaceDashboard />
            </Link>
          ) : (
            <button to="/dashboard" className="text-3xl text-red-400" onClick={()=>logout()}>
              <AiOutlineLogout />
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default Avatar;
