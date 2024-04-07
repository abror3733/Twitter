import React, { useEffect, useState } from 'react'
import ProfileImg from "../../assets/Images/boburProfile.png"
import Arrow from "../../assets/Images/arrow.svg"
import boburAvatar from "../../assets/Images/boburAvatar.svg"
import { Link } from 'react-router-dom'
import {MapIcon,BornIcon,DateIcon,LinkIcon} from "../../assets/Images/Icons"
import {Outlet} from "react-router-dom"



function Profile({setState}) {
  const [activeLink,setActiveLink] = useState("Tweets")
  useEffect(()=>{
    setState(true)
    },[])
  return (
    <div className='pb-10'>
      <div className='px-[31px] py-[8px]  flex items-center space-x-10'>
        <button><img src={Arrow} alt="arrow icon"  width={20}/></button>
        <div className='flex flex-col'>
          <span className='text-[20px] font-bold'>Bobur</span>
          <p className='text-[18px] text-slate-500 '>1,070 Tweets</p>
        </div>
      </div>
      <img src={ProfileImg} alt="profile img" width={"100%"} height={280}/>
      <div className='flex items-center justify-between px-[20px]'>
        <img className='-mt-[78px]' src={boburAvatar} alt="avatar img" width={150} height={150} />
        <button className='text-[18px] py-[5px] px-[13px] rounded-[25px] border-[2px] border-slate-300 hover:bg-slate-600 hover:text-white hover:border-white transition-[0.6s]'>Edit profile</button>
      </div>
      <div className='mt-2 px-5 '>
        <h2 className='text-[22px] font-bold'>Bobur</h2>
        <p className='text-[16px] text-slate-400'>@bobur_mavlonov</p>
        <p className='text-[18px] mt-2'>UX&UI designer at <Link to={"#"}>@abutechuz</Link> </p>
      </div>
        <div className='pt-3 px-[20px]  flex items-center justify-between'>
          <Link to={"#"} className='flex items-center space-x-1'>
          <MapIcon/>
          <span className='text-[15px] text-slate-500'>Mashag’daman</span>
          </Link>
          <Link to={"#"} className='flex items-center space-x-1'>
          <LinkIcon/>
          <span className='text-[15px] text-[#1DA1F2]'>t.me/boburjon_mavlonov</span>
          </Link>
          <Link to={"#"} className='flex items-center space-x-1'>
          <BornIcon/>
          <span className='text-[15px] text-slate-500'>Born November 24, 2000</span>
          </Link>
          <Link to={"#"} className='flex items-center space-x-1'>
          <DateIcon/>
          <span className='text-[15px] text-slate-500'>Joined May 2020</span>
          </Link>
        </div>
        <div className='flex items-center px-[20px] space-x-6 pt-3'>
          <p className='text-slate-500'><strong className='font-bold text-black mr-1'>67</strong>Following</p>
          <p className='text-slate-500'><strong className='font-bold text-black '>47</strong> Followers</p>
        </div>
        <div className='mt-[40px] flex items-center justify-between px-5'>
          <Link onClick={()=>setActiveLink("Tweets")} className={`${activeLink == "Tweets" ? "text-black font-bold rounded-[7px] border-b-black" : "border-transparent"} text-[18px] text-slate-900 font-semibold border-b-[3px] hover:text-black hover:border-b-slate-400 hover:rounded-[7px] transition-[0.6s]`} to={""}>Tweets</Link>
          <Link onClick={()=>setActiveLink("Tweets & replies")} className={`${activeLink == "Tweets & replies" ? "text-black font-bold rounded-[7px] border-b-black" : "border-transparent"} text-[18px] text-slate-900 font-semibold border-b-[3px] hover:text-black hover:border-b-slate-400 hover:rounded-[7px] transition-[0.6s]`} to={"tweets-replies"}>Tweets & replies</Link>
          <Link onClick={()=>setActiveLink("Media")} className={`${activeLink == "Media" ? "text-black font-bold rounded-[7px] border-b-black" : "border-transparent"} text-[18px] text-slate-900 font-semibold border-b-[3px] hover:text-black hover:border-b-slate-400 hover:rounded-[7px] transition-[0.6s]`} to={"media"}>Media</Link>
          <Link onClick={()=>setActiveLink("Likes")} className={`${activeLink == "Likes" ? "text-black font-bold rounded-[7px] border-b-black" : "border-transparent"} text-[18px] text-slate-900 font-semibold border-b-[3px] hover:text-black hover:border-b-slate-400 hover:rounded-[7px] transition-[0.6s]`} to={"likes"}>Likes</Link>
        </div>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default Profile