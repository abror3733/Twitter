import React, { useEffect, useState } from 'react'
import elDarkMode from "../../assets/Images/Customize.svg"
import BoburAvatar from "../../assets/Images/profile.png"
import profile2 from "../../assets/Images/profile2.png"
import profile1 from "../../assets/Images/profile3.png"
import profile33 from "../../assets/Images/profile33.png"
import elGallery from "../../assets/Images/gallery.svg"
import elGif from "../../assets/Images/gif.svg"
import elSmail from "../../assets/Images/smile.svg"
import elschedule from "../../assets/Images/schedule.svg"
import elObet from "../../assets/Images/obet.png"
import PostItem from '../../components/PostItem/PostItem'

function Home({ setState }) {
    useEffect(() => {
        setState(false)
    }, [])
    const [posts, setPosts] = useState([
        {
            id: 1,
            avatarIcon: profile1,
            userName: "Designsta",
            userEmail: "@inner · 25m",
            postBody: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
            commentCount: 10,
            reweetCount: 1,
            likeCount: 8,
            postHeroImg: null
        },
        {
            id: 2,
            avatarIcon: profile2,
            userName: "cloutexhibition",
            userEmail: "@RajLahoti · 22m",
            postBody: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
            commentCount: null,
            reweetCount: 5,
            likeCount: 9,
            postHeroImg: null
        },
        {
            id: 3,
            avatarIcon: profile33,
            userName: "CreativePhoto",
            userEmail: "@cloutexhibition · 1h",
            postBody: " Обетда.....Кечиринглар ",
            commentCount: 10,
            reweetCount: 1,
            likeCount: 8,
            postHeroImg: elObet
        }
    ])

    const [postImgUrl, setPostImgUrl] = useState(null);

    const handleAddPost = (evt) => {
        evt.preventDefault()
        const data = {
            id: posts.length ? posts[posts.length - 1].id + 1 : 1,
            avatarIcon: BoburAvatar,
            userName: "Bobur",
            userEmail: "@bobur_mavlonov",
            postBody: evt.target.userValue.value,
            commentCount: null,
            reweetCount: null,
            likeCount: null,
            postHeroImg: postImgUrl ? postImgUrl : null
        }
        setPosts([data, ...posts])
        evt.target.reset()
    }
    const handleChangeImg = (evt) => {
        setPostImgUrl(URL.createObjectURL(evt.target.files[0]));
    }
    return (
        <div>
            <div className='flex items-center justify-between p-[20px] border-b-[1px] border-[#D8D8D8]'>
                <h2 className='font-bold text-[22px]'>Home</h2>
                <button>
                    <img src={elDarkMode} alt="icon" width={24} height={24} />
                </button>
            </div>
            <form onSubmit={handleAddPost} className='p-4 h-[150px] flex flex-col justify-between'>
                <div className='flex'>
                    <img src={BoburAvatar} alt="profile img" width={60} height={60} />
                    <input name='userValue' className='text-black w-[60%] py-[10px] pl-5 outline-none text-[22px] ' autoComplete='off' type="text" placeholder='What’s happening' required />
                </div>
                <div className='flex items-center justify-between pl-[80px]'>
                    <div className='flex items-center space-x-[20px]'>
                        <label className='w-[20px] flex items-center cursor-pointer'>
                            <img className='hover:bg-slate-300' src={elGallery} alt="icon" width={20} height={20} />
                            <input onChange={handleChangeImg} className='scale-0 opacity-0' type="file" />
                        </label>
                        <img src={elGif} alt="icon" width={20} height={20} />
                        <img src={elSmail} alt="icon" width={20} height={20} />
                        <img src={elschedule} alt="icon" width={20} height={20} />
                    </div>
                    <button className='px-[30px] pt-[8px] pb-[11px] rounded-[30px] text-white font-semibold text-[17px] border-none bg-[#1DA1F2] hover:opacity-60 transition'>Tweet</button>
                </div>
            </form>

            <ul>
                {posts.map((item, index) => (
                    <PostItem key={index} avatarIcon={item.avatarIcon} userEmail={item.userEmail} userName={item.userName} postBody={item.postBody} commentCount={item.commentCount} likeCount={item.likeCount} reweetCount={item.reweetCount} postHeroImg={item.postHeroImg} />
                ))}
            </ul>
        </div>
    )
}

export default Home
