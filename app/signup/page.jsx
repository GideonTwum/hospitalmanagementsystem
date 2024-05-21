'use client'
import { Image } from '@nextui-org/react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const signup = () =>{
    setIsLoading(true)
    toast.success('You are an Admin now!')
    setTimeout(()=>{
      window.location.href='/main';
    },2000)
  }

  const toLoginPage = () => {
    window.location.href = '/';
  }

  return (
    <div className='min-h-screen flex items-center justify-center sign'>
        <div className='flex items-center gap-[2rem]'>
            <div className='image'>
                <Image 
                width={300}
                height={300}
                src='/fdoc.jpg'
                alt='female doctor'
                />
            </div>
            <div className='bg-white h-[70vh] p-10 rounded-[10px] shadow-lg flex flex-col gap-[12px] items-center forms'>
              <div className='flex flex-col items-center'>
                <h1 className='text-[20px]  font-bold '>G_TEN HOSPITAL</h1>
                <h1 className='text-[15px] text-[dodgerblue] font-bold '>ADMIN PORTAL</h1>
              </div>
         
            <form action="" className='flex flex-col  gap-[12px]'>
            
              <div className='flex flex-col gap-[5px]'>
                <label htmlFor="" className='text-[13px]'>Username</label>
                <input className='text-[13px] p-[10px] border-dashed outline-none bg-[transparent] w-[16vw] border-[#ccc] border-[2px] rounded-[10px]' type="text" placeholder='Enter your username' />
              </div>
              <div className='flex flex-col gap-[5px]'>
                <label htmlFor="" className='text-[13px]'>Password</label>
                <input className='text-[13px] p-[10px] border-dashed outline-none bg-[transparent] w-[16vw] border-[#ccc] border-[2px] rounded-[10px]' type="password" placeholder='Enter your password' />
              </div>
            </form>
          <div > 
             <button onClick={()=> signup()}  className='bg-[dodgerblue] hover:bg-[#4482d4] mt-[20px] text-[13px] items-center flex justify-center p-[10px] w-[16vw] text-white rounded-[10px]'>{isLoading? <img className='h-[3vh] ' src='/loading.gif' alt='loading' /> : 'signup'}</button>
          </div>
           
            <div className='flex gap-[5px]'>
              <p className='text-[13px]'>Already an admin?</p> 
              <p className='text-[dodgerblue] text-[13px] cursor-pointer' onClick={() => toLoginPage()} >Login</p>
            </div>
            
        </div>
      
        </div>
        <Toaster />
    </div>
  )
}

export default page