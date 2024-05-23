"use client"
import React, { useState } from 'react'
import Dashboard from '../components/Dashboard';
import Appointments from '../components/Appointments';
import Doctors from '../components/Doctors';
import Departments from '../components/Departments';
import Patients from '../components/Patients';
import Settings from '../components/Settings';
import Help from '../components/Help';
import Nav from '../components/Nav';

//icon imports
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Business, ExitToApp, HelpCenter, PeopleOutline, SettingsAccessibility } from '@mui/icons-material';
import { Button, Popover, PopoverContent, PopoverTrigger, Spacer } from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';

const page = ({toggleTheme, isDark}) => {
    const [activePage, setActivePage] = useState('');
    const assignActivePage = (getValue) => {
        setActivePage(getValue);
    }

    const logout = () => {
      toast.success('Logout Successful!')
      setTimeout(()=>{
        window.location.href= "/"; 
      },1000)
       
      
    }

    const renderPages = () => {
        switch(activePage){
            case 'dashboard':
                return <Dashboard />
            case 'appointments':
                return <Appointments />
            case 'doctors':
                return <Doctors />
            case 'departments':
                return <Departments />
            case 'patients':
                return <Patients />
            case 'settings':
                return <Settings />
            case 'help':
                return <Help />
            default:
              return <Dashboard />
        }
    }


    //popover useState
    const [visible, setVisible] = useState(false);
    
    const handleCancel = ()=>{
      setVisible(false)
    }

  return (
    <div className='flex bg-[#F9FAFD]'>
      <div className='flex flex-col bg-white h-[100vh] w-[250px] items-center gap-[1rem] fixed'>
      <div className=' mt-[1rem] flex items-center gap-2'>
        <div className='bg-[dodgerblue] w-[fit-content] rounded-[10px]  p-2'>
          <h1 className='text-white font-bold'>H</h1>
        </div>
        <h1 className='font-bold'>HOSPITAL</h1>
      </div>
      <div className='flex flex-col gap-[1rem] mt-10'>
        <div onClick={() => assignActivePage('dashboard')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section  hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px] flex items-center gap-2'> <DashboardIcon style={{ fontSize:15, color:'gray'}}/> Dashboard</p>
        </div>

        {/* <div  onClick={() => assignActivePage('appointments')} className=' p-2 bg-[#FAFDF9] w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px]'>Appointments</p>
        </div> */}

        <div  onClick={() => assignActivePage('doctors')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px] flex items-center gap-2'> <AccountCircle style={{fontSize:18, color:'gray'}}/> Doctors</p>
        </div>

        <div  onClick={() => assignActivePage('departments')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px] flex items-center gap-2'> <Business style={{fontSize:15, color:'gray'}}/> Departments</p>
        </div>
        <div  onClick={() => assignActivePage('patients')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px] flex items-center gap-2'><PeopleOutline style={{fontSize:18, color:'gray'}} /> Patients</p>
        </div>
        <div  onClick={() => assignActivePage('settings')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px] flex items-center gap-2'> <SettingsAccessibility style={{fontSize:18, color:'gray'}} /> </p>
        </div>
        <div  onClick={() => assignActivePage('help')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px] flex items-center gap-2'> <HelpCenter style={{fontSize:18, color:'gray'}}/> Help</p>
        </div>
        <div className='mt-24'>
          {/* <button className='bg-[dodgerblue] p-2 text-[12px] text-white w-[15vw] rounded-[7px]'> <ExitToApp style={{fontSize:18, color:'white'}}/> logout</button> */}
          <Popover 
            isOpen={visible}
            onOpenChange={setVisible}
            placement='top-center'
            >
              <PopoverTrigger>
                <Button size='md' auto onClick={()=> setVisible(true)} className='bg-[dodgerblue] text-[12px] text-white w-[15vw] rounded-7px '>
                <ExitToApp style={{fontSize:18, color:'white'}}/>
                  Logout
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-[fit-content]' > 
                <p className='text-[12px]'>Are you sure?</p>
                <Spacer y={0.5}/>
                <div className='flex gap-2 '>
                  <Button onClick={() => logout()} className='h-[20px] bg-white hover:bg-[dodgerblue] hover:text-white text-[10px]' size='small'>Yes</Button>
                  <Button onClick={() => handleCancel()} className='h-[20px] bg-white hover:bg-[dodgerblue] hover:text-white text-[10px]' size='small'>No</Button>
                </div>
              </PopoverContent>

          </Popover>
        </div>

      </div>
    </div>

   

    <div className='flex flex-col ml-[18rem]'>
        <Nav />
        <div className='p-8 pt-[8rem]' >
            {renderPages()}
        </div>
    </div>
    <Toaster />
    </div>
  )
}

export default page