import React from 'react'

import NavbarLink from "../NavBarLink/NavBarLink"
import elSiteLogo from "../../assets/Images/logo.svg"
import {Bookmarks, Explore, Home, Lists, Messages, More, Profile} from "../../assets/Images/Icons"

function Navbar() {
  return (
    <nav>
       <img className='mb-[40px]' src={elSiteLogo} alt="logo" width={40} height={33} />
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
    </nav>
  )
}

export default Navbar