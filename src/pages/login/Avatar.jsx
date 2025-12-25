import { Auth } from '../../provide/AuthProvide';
import { Link } from 'react-router-dom';


const Avatar = () => {
  return (
    <>
     <div className="dropdown dropdown-end fixed top-1 right-2 z-50">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-7 rounded-full sticky ">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to="/dashboard">Dashboard</Link>
      </ul>
    </div>
    </>
  );
};

export default Avatar;
