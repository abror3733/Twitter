import React from 'react'
import elDarkMode from "../../assets/Images/Customize.svg"
import BoburAvatar from "../../assets/Images/profile.png"
import elGallery from "../../assets/Images/gallery.svg"
import elGif from "../../assets/Images/gif.svg"
import elSmail from "../../assets/Images/smile.svg"
import elschedule from "../../assets/Images/schedule.svg"

function Home() {
  return (
    <div>
      <div className='flex items-center justify-between p-[20px] border-b-[2px] border-[#C4C4C4]'>
      <h2 className='font-bold text-[22px]'>Home</h2>
      <button>
      <img src={elDarkMode} alt="icon" width={24} height={24} />
      </button>
      </div>
      <form className='p-4 h-[150px] flex flex-col justify-between'>
        <div className='flex'>
        <img src={BoburAvatar} alt="profile img" width={60} height={60}/>
          <input  className='w-[60%] py-[10px] pl-5 outline-none text-[22px] text-[#828282]' type="text" placeholder='What’s happening' required />
        </div>
           <div className='flex items-center justify-between pl-[80px]'>
              <div className='flex items-center space-x-[20px]'>
            <button>
              <img src={elGallery} alt="icon" width={20} height={20} />
            </button>
            <button>
              <img src={elGif} alt="icon" width={20} height={20} />
            </button>
            <button>
              <img src={elSmail} alt="icon" width={20} height={20} />
            </button>
            <button>
              <img src={elschedule} alt="icon" width={20} height={20} />
            </button>
              </div>
              <button className='px-[30px] pt-[12px] pb-[15px] rounded-[30px] text-white font-semibold text-[17px] border-none bg-[#1DA1F2] hover:opacity-60 transition'>Tweet</button>
           </div>
      </form>
    </div>
  )
}

export default Home