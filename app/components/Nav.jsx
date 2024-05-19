import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Nav = () => {
  return (
    <div className='flex h-[15vh] w-[80vw] bg-white items-center '>
        <div className='flex  items-center gap-[20rem]'> 
          <div className='border-[1px] rounded-[30px] w-[33vw] flex items-center '>
            <input type="text" placeholder='Search...' className='text-[13px] p-2 rounded-[30px] w-[30vw] outline-none border-none ' />
            < SearchIcon  className='text-gray-300 cursor-pointer'/>
          </div>
          <div className='flex  items-center gap-3   ml-[1rem]'>
            <NotificationsNoneIcon className='cursor-pointer'/>
            <div className='flex items-center '>
            <p className='cursor-pointer'>Dr. Nana K</p>
            <AccountCircleIcon className='cursor-pointer'/>
            </div>
            <KeyboardArrowDownIcon className='cursor-pointer' />
          </div>
        </div>
    </div>
  )
}

export default Nav