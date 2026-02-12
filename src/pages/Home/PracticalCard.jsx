import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Auth } from '../../provide/AuthProvide';
import axios from 'axios';
import { MdOutlineDeleteSweep } from "react-icons/md";

const PracticalCard = ({pracClass,allClass, setPracClass}) => {
const {user}= useContext(Auth)

  const handleDelete = (e,id) => {
     e.preventDefault();  
     e.stopPropagation();
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
          setPracClass(allClass.filter((article) => article._id !== id));
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
    <Link to={`/article/${pracClass?._id}`}>
      <div className="card w-full bg-base-100 card-sm shadow-sm shadow-gray-400">
        <div className="card-body">
          <div className='flex justify-between'>
            <h2 className="card-title">{pracClass?.title}</h2>
            {
                        user?.role==="admin" && (
                          <button className='' onDoubleClick={(e) => handleDelete(e,pracClass._id)}>
                            <MdOutlineDeleteSweep className="text-red-500 text-xl" />
                          </button>
                        )
                       }
          </div>
          <p className='w-full h-16 overflow-hidden p-2'>{pracClass?.content}</p>
        </div>
      </div>
    </Link>
  );
};

export default PracticalCard;
