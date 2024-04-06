
import React from 'react'
import { NavLink } from 'react-router-dom/dist'

function NavbarLink({children,title,url}) {
  return (
    <NavLink className={'flex items-center space-x-2 py-[15px]'} to={url}>
      {children}
      <span>{title}</span>
    </NavLink>
  )
}

export default NavbarLink