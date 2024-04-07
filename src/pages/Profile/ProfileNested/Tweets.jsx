import React from 'react'
import PostItem from '../../../components/PostItem/PostItem'
import AvatarBoubur from "../../../assets/Images/boburAvatar.svg"
import Pinned from "../../../assets/Images/pinned.svg"
import TweetsheroImg from "../../../assets/Images/tweetsheroImg.png"

function Tweets() {
  return (
    <div className='relative'>
      <div className=' absolute flex items-center space-x-2 py-3 px-5'>
        <img src={Pinned} alt="icon" width={14} height={17} />
        <span className='text-[#536471] text-[16px]'>Pinned Tweet</span>
      </div>
      <PostItem avatarIcon={AvatarBoubur} commentCount={10} likeCount={8} postBody={"4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim"} userName={"Bobur"} reweetCount={1} userEmail={"@bobur_mavlonov · Apr 1"} />
      <PostItem userName={"Bobur"} reweetCount={5} userEmail={"@bobur_mavlonov · Apr 1"} avatarIcon={AvatarBoubur} commentCount={0} likeCount={9} postBody={" Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar haqida emas."}/>
      <PostItem postBody={"A bo'pti maskamasman"} postHeroImg={TweetsheroImg} userName={"Bobur"} reweetCount={1} userEmail={"@bobur_mavlonov · Apr 1"} avatarIcon={AvatarBoubur} commentCount={10} likeCount={8}/>
    </div>
  )
}

export default Tweets