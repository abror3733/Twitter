import React from 'react'

function Follow({imgUrl,title,email}) {
  return (
    <div className='flex items-center justify-between '>
    <div className='flex items-center space-x-2'>
    <img src={imgUrl} alt="img follow" width={50} height={50} />
      <div className='flex flex-col space-y-1'>
        <h4 className='text-[15px] font-semibold'>{title}</h4>
        <span className='text-[15px] text-slate-500'>{email}</span>
      </div>
    </div>
    <button className='bg-[#000000] hover:bg-blue-900 text-[15px] font-bold text-white py-[7px] px-[13px] rounded-[15px] transition-[0.5s]'>Follow</button>
    </div>
  )
}

export default Follow