'use client'
import { Image } from '@nextui-org/react'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const page = () => {

  const signup = () =>{
    
  }

  return (
    <div className='min-h-screen flex items-center justify-center sign'>
        <div className='flex gap-[2rem]'>
            <div className='image'>
                <Image 
                width={300}
                height={300}
                src='/fdoc.jpg'
                alt='female doctor'
                />
            </div>
            <div className='bg-white p-10 rounded-[10px] shadow-lg flex flex-col gap-[12px] items-center forms'>
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
             <button  className='bg-[dodgerblue] hover:bg-[#4482d4] mt-[20px] text-[13px] items-center flex justify-center p-[10px] w-[16vw] text-white rounded-[10px]'> Signup</button>
          </div>
           
            <div className='flex gap-[5px]'>
              <p className='text-[13px]'>Already an admin?</p> 
              <p className='text-[dodgerblue] text-[13px] cursor-pointer' >Login</p>
            </div>
            
        </div>
      
        </div>
        <Toaster />
    </div>
  )
}

export default page