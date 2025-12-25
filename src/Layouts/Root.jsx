import { Outlet } from "react-router-dom";
import Navbar from '../pages/sharedPages/Navbar';
import Footer from '../pages/sharedPages/Footer';


const Root = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className='min-h-[calc(100vh-110px)]'>
      <Outlet />
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
};

export default Root;
