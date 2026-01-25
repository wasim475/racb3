import { Auth } from "../../provide/AuthProvide";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { useContext } from "react";
import { RxTriangleDown } from "react-icons/rx";


const Avatar = () => {
  const { user } = useContext(Auth);
  // console.log(user)
  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full sticky ">
            <img
              alt="Tailwind CSS Navbar component"
              src={user?.profilePic ? user.profilePic : "https://i.ibb.co/RpxVCL40/d82c9c5a2621.png"}
            />
            <div className='absolute -bottom-4 left-1/2 -translate-1/2 z-50'>
              <RxTriangleDown className='text-xl text-gray-500'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
