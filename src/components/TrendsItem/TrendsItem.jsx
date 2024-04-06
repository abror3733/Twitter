import React from 'react'
import elVector from "../../assets/Images/vector.svg"
function TrendsItem({titletop,title,titlebottom}) {
  return (
    <div className='flex items-center justify-between pb-4'>
      <div className='flex flex-col'>
      <span className='text-[#393B41] text-[16px]'>{titletop}</span>
      <h4 className='text-[20px] font-semibold '>{title}</h4>
      <span className='text-[#393B41] text-[16px]'>{titlebottom}</span>
      </div>
      <img src={elVector} alt="icon" />
    </div>
  )
}

export default TrendsItem