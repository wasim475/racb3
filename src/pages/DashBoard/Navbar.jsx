import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiSpeakerphone } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { TbSettingsAutomation } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import { Auth } from '../../provide/AuthProvide';





const Navbar = () => {
  const {logout}= useContext(Auth)

  const navItems = [
    {name: <FaHome/>, path:"/dashboard", end:true},
    {name: <TfiWrite/>, path:"/dashboard/write-article"},
    {name: <HiSpeakerphone/>, path:"/dashboard/accouncement"},
    {name: <TbSettingsAutomation/>, path:"/dashboard/control-articles"},
    {name: <IoMdLogOut/>, onClick: ()=>logout()},
  ]
  return (
    <>
     <ul className='flex flex-col gap-y-5 text-3xl  top-5'>
      {
        navItems.map((navitem)=>(
          navitem.path ?
          <NavLink 
          key={navitem.path}
          to={navitem.path}
          end={navitem.end}
          className={({isActive})=> isActive?"border-l-2 border-b-4 rounded-lg py-1 border-red-400":"" }
          >{navitem.name}</NavLink>
          :
          <button onClick={navitem.onClick}>
            {navitem.name}
          </button>
        ))
      }
         
     </ul>
    </>
  )
}

export default Navbar
