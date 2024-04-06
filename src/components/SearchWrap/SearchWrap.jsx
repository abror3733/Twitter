import React from 'react'
import elSearchImg from "../../assets/Images/search.svg"
import elSettings from "../../assets/Images/settings.svg"
import mushtariy from "../../assets/Images/mushtariy.png"
import shuhratbek from "../../assets/Images/shuhratbek.png"
import TrendsItem from '../TrendsItem/TrendsItem'
import Follow from '../Follow/Follow'


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
      <div className='w-full flex flex-col px-[15px] pt-[20px] pb-[30px] mt-[20px] rounded-[10px] bg-[#F7F9F9]'>
      <h3 className='text-[24px] text-[#000000] font-bold'>You might like</h3>
       <div className='space-y-10 pt-[20px]'>
       <Follow imgUrl={mushtariy} title={"Mushtariy"} email={"@Mushtar565266"}/>
       <Follow imgUrl={shuhratbek} title={"Shuhratbek"} email={"@mrshukhrat"}/>
       <span className='text-[#1DA1F2] text-[18px] font-semibold block'>Show more</span>
       </div>
      </div>
      <p className='text-[#536471] text-[14px] mt-10 text-center'>Terms of Service Privacy Policy Cookie Policy
       Imprint Ads Info More ··· © 2021 Twitter, Inc.
       </p>
    </div>
  )
}

export default SearchWrap