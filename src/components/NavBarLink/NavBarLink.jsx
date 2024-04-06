
import React from 'react'
import { NavLink } from 'react-router-dom/dist'

function NavbarLink({children,title,url}) {
  return (
    <NavLink className={'flex items-center space-x-2 py-[15px] hover:font-bold transition-[0.4s] hover:bg-slate-200 pl-[30px] rounded-md w-[80%]'} to={url}>
      {children}
      <span>{title}</span>
    </NavLink>
  )
}

export default NavbarLink