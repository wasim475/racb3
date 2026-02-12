import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <>
      <div className=" z-20">
        <div className="hero-content text-center">
          <div className="max-w-screen">
            <h1 className="text-4xl md:text-5xl font-bold">
              WelCome to
              <span className='bg-gradient-to-r bg-300% from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient'>
              <br className='md:hidden block'/>
              <span className=""> RAC </span>
              <span className="">Batch-04</span>
              </span>
            </h1>
            <p className="py-6 bangla">
              এইখানে আমাদের ক্লাসে পড়ানো সমস্ত প্রয়োজনীয় এলিমেন্ট এক জায়গায় সাজানো আছে। পাশাপাশি প্রশিক্ষণার্থীদের তৈরি করা নোটসও সহজেই দেখতে ও পড়তে পারবেন—যাতে শেখা হয় আরও গোছানো ও কার্যকর।

            </p>
            <div className="flex gap-x-4 justify-center">
              <Link to={"/classes"} className="relative inline-block px-4 py-2 font-medium group">
               
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
                  <span className="relative text-primary group-hover:text-white">
                    Classess
                  </span>
                
              </Link>

              <Link to={"/notes"} className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-secondary"></span>
                  <span className="relative text-secondary group-hover:text-white">
                   Notes
                  </span>
              </Link>

              <Link to={"/book-marks"} className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-accent group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-accent group-hover:bg-accent"></span>
                  <span className="relative text-accent group-hover:text-white">
                   BookMarks
                  </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;