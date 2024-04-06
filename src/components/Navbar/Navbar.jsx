import React from 'react'

import NavbarLink from "../NavBarLink/NavBarLink"
import elSiteLogo from "../../assets/Images/logo.svg"
import elProfile from "../../assets/Images/profile.png"
import elVector from "../../assets/Images/vector.svg"

import {Bookmarks, Explore, Home, Lists, Messages, More, Profile} from "../../assets/Images/Icons"

function Navbar() {
  return (
    <nav>
      <div>
      <img className='mb-[40px] ml-[30px]' src={elSiteLogo} alt="logo" width={40} height={33} />
       <div className='flex flex-col '>
         <NavbarLink url={"./"} title={"Home"}>
          <Home/>
         </NavbarLink>
         <NavbarLink url={"/explore"} title={"Explore"}>
          <Explore/>
         </NavbarLink>
         <NavbarLink url={"/messages"} title={"Messages"}>
          <Messages/>
         </NavbarLink>
         <NavbarLink url={"/bookmarks"} title={"Bookmarks"}>
          <Bookmarks/>
         </NavbarLink>
         <NavbarLink url={"/lists"} title={"Lists"}>
          <Lists/>
         </NavbarLink>
         <NavbarLink url={"/profile"} title={"Profile"}>
          <Profile/>
         </NavbarLink>
         <NavbarLink url={"/more"} title={"More"}>
          <More/>
         </NavbarLink>
       </div>
       <button className='text-[18px] mt-[20px] text-[white] font-semibold hover:opacity-50 transition bg-[#1D9BF0] rounded-[25px] py-[10px] w-[220px]'>Tweet</button>
      </div>
      <div className='flex items-center space-x-5 pt-[150px] pb-10'>
         <div className='flex items-center space-x-1'>
          <img src={elProfile} alt="profile img" width={40} height={40}/>
           <div>
            <div className='flex flex-col'>
            <h4 className='text-[14px] font-semibold'>Bobur</h4>
            <span className='text-[14px] text-slate-500'>@bobur_mavlonov</span>
            </div>
           </div>
         </div>
          <img src={elVector} alt="icon"/>
      </div>
    </nav>
  )
}

export default Navbar