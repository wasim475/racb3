import { FaHome } from "react-icons/fa";
import HomeTab from "../Home/HomeTab";
import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <div>
      <div className="sticky top-14 left-0 bg-white shadow-md rounded-md px-3 py-2 z-40 text-gray-600">
        <h1 className="flex items-center gap-x-1 text-xl ml-3">
          {" "}
          <Link to="/">
            <FaHome className="mr-1" />
          </Link>{" "}
          <span className="text-red-500">&gt;</span>{" "}
          <span className="font-medium">All Classes</span>{" "}
        </h1>
      </div>

      <div className='mt-14'>
        <HomeTab />
      </div>
    </div>
  );
};

export default Classes;
