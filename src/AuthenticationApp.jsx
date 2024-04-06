import React from 'react'
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




function AuthenticationApp(){
  return (
    <div className='flex container mx-auto px-5'>
      <div className='w-[20%] h-[100vh] overflow-y-auto pl-[50px] pt-[30px]'>
        <Navbar/>
      </div>
      <div className='w-[52%]  h-[100vh] overflow-y-auto border-r-[2px] border-[#C4C4C4] border-l-[2px]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/lists' element={<Lists/>}/>
        <Route path='/bookmarks' element={<Bookmarks/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/more' element={<More/>}/>
      </Routes>
      </div>
      <div className='w-[28%]  h-[100vh] overflow-y-auto px-[30px] pt-[20px]'>
        <SearchWrap/>
      </div>
    </div>
  )
}

export default AuthenticationApp