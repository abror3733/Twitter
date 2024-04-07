import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Explore from './pages/Explore/Explore'
import Messages from './pages/Messages/Messages'
import Lists from './pages/Lists/Lists'
import Bookmarks from "./pages/Bookmarks/Bookmarks"
import Profile from "./pages/Profile/Profile"
import More from "./pages/More/More"
import SearchWrap from './components/SearchWrap/SearchWrap'

import Tweets from "./pages/Profile/ProfileNested/Tweets"
import TweetsReplies from "./pages/Profile/ProfileNested/TweetsReplies"
import Media from "./pages/Profile/ProfileNested/Media"
import Likes from "./pages/Profile/ProfileNested/Likes"



function AuthenticationApp(){
  const [state,setState] = useState(false)
  return (
    <div className='flex container mx-auto px-5'>
      <div className='w-[19%] h-[100vh] overflow-y-auto pl-[10px] pt-[30px]'>
        <Navbar/>
      </div>
      <div className='w-[56%]  h-[100vh] overflow-y-auto border-r-[2px] border-[#C4C4C4] border-l-[2px]'>
      <Routes>
        <Route path='/' element={<Home setState={setState}/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/lists' element={<Lists/>}/>
        <Route path='/bookmarks' element={<Bookmarks/>}/>
        <Route path='/profile' element={<Profile  setState={setState}/>}>
          <Route path='' element={<Tweets/>}/>
          <Route path='tweets-replies' element={<TweetsReplies/>}/>
          <Route path='media' element={<Media/>}/>
          <Route path='likes' element={<Likes/>}/>
        </Route>
        <Route path='/more' element={<More/>}/>
      </Routes>
      </div>
      <div className='w-[25%]  h-[100vh] overflow-y-auto pl-[20px] pb-[40px] pt-[20px]'>
        <SearchWrap state={state}/>
      </div>
    </div>
  )
}

export default AuthenticationApp