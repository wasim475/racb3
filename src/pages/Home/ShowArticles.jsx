import axios from "axios";
import { use, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBackFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { Auth } from '../../provide/AuthProvide';
import { Data } from '../../provide/DataProvider';
import { motion } from "motion/react"
import Loading from '../utility/Loading';

const ShowArticles = () => {
  const {user} = useContext(Auth);
  const {showData, setShowData} = useContext(Data);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://racb3-server.vercel.app/api/v1/articles/articles`
      );
      setArticles(res.data.reverse());
    };

    fetchData();
  }, []);

  if(articles.length ===0){
  return <Loading/>
}

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
       const response = await axios.delete(
          `https://racb3-server.vercel.app/api/v1/articles/delete-article/${id}`
        );
        console.log(response.data.success);
        if (response.data.success) {
          setArticles(articles.filter((article) => article._id !== id));
           Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        }
      }
      
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {articles?.map((article) => (
        <motion.div
          key={article._id}
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9,  rotate: -1 , transition:5}}
                    
                
          
          className="border rounded-lg p-2 bg-base-100 flex justify-around"
        >
           {
            user?.role==="admin" && (
              <button onDoubleClick={() => handleDelete(article._id)}>
                <RiDeleteBackFill className="text-red-500 text-xl" />
              </button>
            )
           }
          
          <Link
            to={`/article/${article._id}`}
            className="relative px-5 py-2 font-medium text-white group"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <span className="relative">{article.title}</span>
          </Link>

          
         
        </motion.div>
      ))}
    </div>
  );
};

export default ShowArticles;
