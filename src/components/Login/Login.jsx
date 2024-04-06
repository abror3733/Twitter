import React from 'react'

import elSiteLogo from "../../assets/Images/logo.svg"
function Login({setToken}) {
  const handleSubmit =(evt) =>{
    evt.preventDefault()
    const data ={
      email:evt.target.name.value,
      passowrd:evt.target.name.value
    }
    setToken(data)
    window.localStorage.setItem("token",JSON.stringify(data))
  }
  return (
   <form onSubmit={handleSubmit} className='w-[450px] mx-auto mt-[60px]'>
    <img className='mb-[30px]' src={elSiteLogo} alt="logo site" width={50} height={41} />
    <h2 className='text-[42px] mb-[36px] font-extrabold'>Log in to Twitter</h2>
    <input name='email' className='py-[23px] pl-[20px] w-full rounded-[10px] border-[1px] border-[#CCCCCC] outline-none mb-[25px]' type="email" requared placeholder="Phone number, email address" />
    <input name='passowrd' className='py-[23px] pl-[20px] w-full rounded-[10px] border-[1px] border-[#CCCCCC] outline-none mb-[20px]' type="password" requared placeholder="Password" />
    <button type='submit' className='pb-[18px] pt-[15px] text-[white] text-[24px] font-semibold border-none rounded-[50px] mb-[40px] text-center bg-[#1DA1F2] w-full hover:opacity-60 transition'>Login</button>
    <div className='flex items-center justify-between'>
      <span className='text-[#1DA1F2] text-[18px] font-semibold'>Forgot password?</span>
      <span className='text-[#1DA1F2] text-[18px] font-semibold'>Sign up to Twitter</span>
    </div>
   </form>
  )
}

export default Login