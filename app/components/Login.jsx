'use client'

import { Button } from '@nextui-org/button';
import Image from 'next/image';
import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {
  const toMainPage = () => {
    setIsLoading(true);
    toast.success('Login Successful!!')
    setTimeout(() => {
        window.location.href = './main';
    }, 2000); 
}


    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
      try {
        
      } catch (error) {
        console.log(error)
      }
    }
   

  return (

    <div className='flex items-center justify-center gap-[30px]  min-h-[100vh]'>
      <div>
          <Image 
          height={300}
          width={300}
          src='/doc.jpg'
          alt='a young doctor smiling'
          className='rounded-[10px] doc'
          />
      </div>
        <div className='bg-white p-10 rounded-[10px] shadow-lg flex flex-col gap-[12px] items-center form'>
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
          <div onClick={() => toMainPage()}> 
          <button  className='bg-[dodgerblue] hover:bg-[#4482d4] mt-[20px] text-[13px] items-center flex justify-center p-[10px] w-[16vw] text-white rounded-[10px]'>{isLoading? <img className='h-[3vh] ' src='/loading.gif' alt='loading' /> : 'Login'}</button>
          </div>
           
            <div className='flex gap-[5px]'>
              <p className='text-[13px]'>Are you a new Admin?</p> 
              <p className='text-[dodgerblue] text-[13px] cursor-pointer'>Sign up</p>
            </div>
        </div>
       <Toaster />
    </div>
  )
}

export default Login