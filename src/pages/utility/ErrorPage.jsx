import { Link } from "react-router-dom";
import errorPic from '../../assets/4o4.png'

const ErrorPage = () => {
  return (
    <div className='bangla text-center h-screen'>
      <div>
        <h1 className='text-3xl mt-32'>পেজটি খুঁজে পাওয়া যায়নি!</h1>
      <div>
        <p className='text-xl text-gray-500 mt-6'>
        আপনি যে পেজটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি! নিচের <span className='font-bold'>হোম পেজে চলুন</span> বাটনে  ক্লিক করে আপনি ওয়েবসাইটের হোম পেজে যেতে পারেন।
      </p>
      </div>
      <div className='mt-5'>
        <Link to={"/"} className='bg-cyan-500 py-1 px-3 font-bold rounded-full'>হোম পেজে চলুন।</Link>
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;
