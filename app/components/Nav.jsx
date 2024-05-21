import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//icons import
import { AccountCircle,  Article,  ExitToApp,  FileCopy,  Language,  MenuBook, NotificationImportant, Policy, Settings, ToggleOff,  } from '@mui/icons-material';
import { Button } from '@nextui-org/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Switch } from '@nextui-org/react';
import { ToggleButton } from '@mui/material';
const Nav = () => {
  return (
    <div className='flex h-[15vh] w-[80vw] bg-white items-center '>
        <div className='flex  items-center gap-[20rem]'> 
          <div className='border-[1px] rounded-[30px] w-[33vw] flex items-center '>
            <input type="text" placeholder='Search...' className='text-[13px] p-2 rounded-[30px] w-[30vw] outline-none border-none ' />
            < SearchIcon  className='text-gray-300 cursor-pointer'/>
          </div>
          <div className='flex  items-center gap-6  '>
            {/* <NotificationsNoneIcon className='cursor-pointer'/> */}
            <NotificationImportant style={{fontSize:18, color:'gray'}}/>
            <div className='flex items-center '>
            <p className='cursor-pointer'>Dr. Nana K</p>
            {/* <AccountCircle className='cursor-pointer'/> */}
            <AccountCircle style={{fontSize:18, color:'gray'}}/>
            </div>
            {/* <KeyboardArrowDownIcon className='cursor-pointer' /> */}
           
            <div className='ml-[1.5rem]'>
              <Dropdown>
                <DropdownTrigger>
                  <Settings variant='bordered' style={{fontSize:18, color:'gray'}}/>
                </DropdownTrigger>
                <DropdownMenu aria-label='Static Actions'>
                    <DropdownItem key='Profile' className='flex items-center outline-none'><AccountCircle className='text-gray-600'/> Profile </DropdownItem>
                    <DropdownItem><Switch defaultSelected size='sm'> Light</Switch> </DropdownItem>
                    <DropdownItem><Language className='text-gray-600'/> Language</DropdownItem>
                    <DropdownItem><Article className='text-gray-600'/> Terms of Use</DropdownItem>
                    <DropdownItem><Policy className='text-gray-600'/> Privacy Policy</DropdownItem>
                    <DropdownItem><FileCopy className='text-gray-600'/> Licenses</DropdownItem>
                    <DropdownItem key='logout' className='flex items-center outline-none text-[13px]'><ExitToApp className='text-gray-600'/> Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Nav