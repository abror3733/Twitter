import React from 'react'
import elSearchImg from "../../assets/Images/search.svg"
import elSettings from "../../assets/Images/settings.svg"
import TrendsItem from '../TrendsItem/TrendsItem'


function SearchWrap() {
  return (
    <div className='w-[300px]'>
      <label className='relative'>
        <img className='absolute left-[26px] top-[-1px]' src={elSearchImg} alt="icon" width={24} height={24}/>
        <input className='bg-[#EFF3F4] text-[#5C6C79] text-[18px] pt-[15px] pb-[16px] pl-[64px] w-full rounded-[30px] outline-none' type="text" placeholder='Search Twitter' />
      </label>
      <div className='w-full flex flex-col px-[15px] pt-[20px] pb-[30px] mt-[20px] rounded-[10px] bg-[#F7F9F9]'>
        <div className='flex items-center justify-between'>
        <h3 className='text-[24px] font-bold'>Trends for you</h3>
        <img src={elSettings} alt="settings icon"  width={24} height={24}/>
        </div>
        <div className='pt-[20px]'>
          <TrendsItem title={"Revolution"} titlebottom={"50.4K Tweets"} titletop={"Trending in Germany"}/>
          <TrendsItem title={"Revolution"} titlebottom={"50.4K Tweets"} titletop={"Trending in Germany"}/>
          <TrendsItem title={"Revolution"} titlebottom={"50.4K Tweets"} titletop={"Trending in Germany"}/>
        </div>
        <span className='text-[#1DA1F2] text-[18px] font-semibold'>Show more</span>
      </div>
    </div>
  )
}

export default SearchWrap