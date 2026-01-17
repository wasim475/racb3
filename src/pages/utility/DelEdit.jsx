import { Link, useNavigate } from "react-router-dom";
import { IoMdOptions } from "react-icons/io";
import { useState } from "react";
import Swal from 'sweetalert2';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";


import axios from 'axios';

const DelEdit = ({id}) => {
    const navigate = useNavigate()
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
          `https://racb3-server.vercel.app/api/v1/note/delete-note/${id}`
        );
        console.log(response.data.success);
        if (response.data.success) {
         navigate('/my-notes')
           Swal.fire({
          title: "Deleted!",
          text: "Your note has been deleted.",
          icon: "success",
        });
        }
      }
      
    });
  };
  return (
    <div className="fixed bottom-16 right-3">
      <div className="dropdown dropdown-top">
        <div tabIndex={0} role="button" className="btn m-1"  >
          <button>
             <IoMdOptions/>
          </button>
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm flex flex-col gap-y-3"
        >
          <Link className='text-xl text-green-300' to={`/write-note/${id}`}> <FiEdit/> </Link>
          <Link className='text-xl text-red-500' onClick={()=>handleDelete(id)}><RiDeleteBin6Line/></Link>
        </ul>
      </div>
    </div>
  );
};

export default DelEdit;
