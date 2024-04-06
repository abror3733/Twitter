import React from 'react'

import commentIcon from "../../assets/Images/comment.svg"
import vector from "../../assets/Images/vector.svg"
import retweet from "../../assets/Images/retweet.svg"
import like from "../../assets/Images/like.svg"
import upload from "../../assets/Images/upload.svg"
import statistic from "../../assets/Images/statistic.svg"
import elActiveLike from "../../assets/Images/activLik.svg"
import elActiveReweet from "../../assets/Images/activeReweet.svg"

import PostAction from '../PostAction/PostAction'

function PostItem({avatarIcon,userName,userEmail,postBody,commentCount,likeCount,reweetCount,postHeroImg}) {
  return (
    <li className='relative px-[25px] pt-[30px] pb-[21px] border-y-[1px] border-b-[#D8D8D8]'>
    <div className='flex items-start'>
      <img src={avatarIcon} alt="avatar img" width={60} height={60} />
      <div className='ml-[15px] flex flex-col'>
        <div className='flex space-x-[5px] items-center'>
          <h2 className='text-[#000000] text-[20px] font-bold'>{userName}</h2>
          <p className='text-[18px] text-[#000000] opacity-60'>{userEmail}</p>
        </div>
        <div className='mb-[22px]'>
          <p className='text-[18px] text-[#000000]'>{postBody}</p>
        </div>
        {postHeroImg ? <img className='mb-4 max-w-[529px] max-h-[303px]' src={postHeroImg} alt="img" width={529} height={303} /> : ""}
        <ul className='flex items-center space-x-[75px]'>
         <PostAction  activeIcon={commentIcon} actionIcon={commentIcon} actionCount={commentCount}/>
         <PostAction activeColor={"text-[#0CB245]"}  activeIcon={elActiveReweet} actionIcon={retweet} actionCount={reweetCount}/>
         <PostAction activeColor={"text-[#EF1C5C]"} activeIcon={elActiveLike} actionIcon={like} actionCount={likeCount}/>
         <PostAction  activeIcon={upload} actionIcon={upload} actionCount={0}/>
         <PostAction  activeIcon={statistic} actionIcon={statistic} actionCount={0}/>
        </ul>
      </div>
      <img className='ml-[20px] absolute top-[41px] right-[25px]'  src={vector} alt="Vector img" width={17} height={4} />
    </div>
  </li>
  )
}

export default PostItem