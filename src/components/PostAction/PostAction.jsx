import React, { useState } from 'react'

function PostAction({actionIcon,actionCount,activeIcon,activeColor}) {
  const [changeAction,setChangeAction]=useState(false)
  const handleClickAction =()=>{
    setChangeAction(!changeAction)
  }
  return (
    <li onClick={handleClickAction} className=' flex items-center space-x-[8px]'>
      <img className='hover:cursor-pointer' src={changeAction ? activeIcon : actionIcon} alt="icon" width={24} height={24} />
      <span className={` text-[16px] ${changeAction ? activeColor : "text-[#536471]"}`}>{changeAction ? actionCount + 1 : actionCount}</span> 
    </li>
  )
}

export default PostAction