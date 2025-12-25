import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Auth } from '../provide/AuthProvide';


const Protected = ({children}) => {
    const {user}= useContext(Auth)
    // const location = useLocation()
    // if(loading){
    //     return  <div className="relative flex justify-center items-center">
    //     <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
    //     <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"  className="rounded-full h-28 w-28"/>
    // </div>
    // }
    if(user){
        return children;
    }
    return <Navigate to='/' />
    // return <Navigate to='/login' state={{from:location}} replace='true' />
};

export default Protected;