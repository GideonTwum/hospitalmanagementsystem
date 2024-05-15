import React from 'react'

const Dashboard = () => {
  return (
    <div>
       <div className='flex  gap-[10px]'>
       {/* <div className='bg-white flex flex-col items-center h-[20vh] hover:shadow-lg justify-center cursor-pointer rounded-[10px] w-[10vw]'>
          <p className='text-[13px] font-bold'>Appointments</p>
          <p className='text-[35px]'>12</p>
        </div> */}
        <div className='bg-white flex flex-col items-center justify-center h-[15vh] hover:shadow-lg cursor-pointer rounded-[10px] w-[10vw]'>
          <p className='text-[13px] font-bold'>Doctors</p>
          <p className='text-[35px]'>6</p>
        </div>
        <div className='bg-white flex flex-col items-center justify-center h-[15vh] hover:shadow-lg cursor-pointer rounded-[10px] w-[10vw]'>
          <p className='text-[13px] font-bold'>Departments</p>
          <p className='text-[35px]'>4</p>
        </div>
        <div className='bg-white flex flex-col items-center justify-center h-[15vh] hover:shadow-lg cursor-pointer rounded-[10px] w-[10vw]'>
          <p className='text-[13px] font-bold'>Patients</p>
          <p className='text-[35px]'>50</p>
        </div>
       </div>

       <div>
        <div className='h-[30vh] bg-white flex items-center justify-center mt-20'>
          <p>Chart</p>
        </div>
       </div>
       
    </div>
  )
}

export default Dashboard