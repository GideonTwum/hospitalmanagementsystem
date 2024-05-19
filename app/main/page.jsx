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

const page = () => {
    const [activePage, setActivePage] = useState('');
    const assignActivePage = (getValue) => {
        setActivePage(getValue);
    }

    const logout = () => {
      window.location.href= "/"; 
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
        }
    }
  return (
    <div className='flex bg-[#F9FAFD]  '>
         <div className='flex flex-col bg-white h-[100vh] w-[30vw] items-center gap-[2rem]  '>
      <div className=' mt-[2rem] flex items-center gap-2'>
        <div className='bg-[dodgerblue] w-[fit-content] rounded-[10px]  p-2'>
          <h1 className='text-white font-bold'>H</h1>
        </div>
        <h1 className='font-bold'>HOSPITAL</h1>
      </div>
      <div className='flex flex-col gap-[1.5rem] mt-10'>
        <div onClick={() => assignActivePage('dashboard')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section  hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px]'>Dashboard</p>
        </div>

        {/* <div  onClick={() => assignActivePage('appointments')} className=' p-2 bg-[#FAFDF9] w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px]'>Appointments</p>
        </div> */}

        <div  onClick={() => assignActivePage('doctors')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px]'>Doctors</p>
        </div>

        <div  onClick={() => assignActivePage('departments')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px]'>Departments</p>
        </div>
        <div  onClick={() => assignActivePage('patients')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px]'>Patients</p>
        </div>
        <div  onClick={() => assignActivePage('settings')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px]'>Settings</p>
        </div>
        <div  onClick={() => assignActivePage('help')} className=' p-2 bg-white w-[15vw] rounded-[7px] cursor-pointer hover:bg-blue-200 section hover:ml-[25px] '>
          <p className='text-[13px] ml-[45px]'>Help</p>
        </div>
        <div onClick={() => logout()}>
          <button className='bg-[dodgerblue] p-2 text-[12px] text-white w-[15vw] rounded-[7px]'>logout</button>
        </div>

      </div>
    </div>

    <div className='flex flex-col'>
        <Nav />
        <div className='p-8'>
            {renderPages()}
        </div>
    </div>
    </div>
  )
}

export default page