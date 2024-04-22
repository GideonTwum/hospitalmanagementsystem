import React from 'react'

const Dashboard = () => {
  return (
    <div>
       <div className='flex gap-[20px]'>
       <div className='bg-white flex flex-col items-center h-[20vh] justify-center rounded-[10px] w-[10vw]'>
          <p className='text-[13px] font-bold'>Appointments</p>
          <p className='text-[35px]'>12</p>
        </div>
        <div className='bg-white flex flex-col items-center h-[20vh] rounded-[10px] w-[10vw]'>
          <p className='text-[13px] font-bold'>Doctors</p>
        </div>
        <div className='bg-white flex flex-col items-center h-[20vh] rounded-[10px] w-[10vw]'>
          <p className='text-[13px] font-bold'>Appointments</p>
        </div>
        <div className='bg-white flex flex-col items-center h-[20vh] rounded-[10px] w-[10vw]'>
          <p className='text-[13px] font-bold'>Appointments</p>
        </div>
       </div>
    </div>
  )
}

export default Dashboard