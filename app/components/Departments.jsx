import React from 'react'

const Departments = () => {
  return (
    <div className='flex  gap-10' >
      <div className='flex flex-col gap-10'>
      <div className='gap-4 flex'>
          <div className='h-[30vh] flex flex-col items-center justify-center w-[20vw] bg-[dodgerblue] rounded-[20px] emergency'>
            <p className='text-white'>Emergency Department</p>
          </div>
          <div className='h-[30vh] flex flex-col items-center justify-center w-[20vw] bg-[dodgerblue] rounded-[20px] surgical'>
            <p className='text-white'>Medical/Surgical Units</p>
          </div>
         
       </div>
       <div className='gap-4 flex'>
          <div className='h-[30vh] flex flex-col items-center justify-center w-[20vw] bg-[dodgerblue] rounded-[20px] care'>
            <p className='text-white'>Intensive Care Unit</p>
          </div>
          <div className='h-[30vh] flex flex-col items-center justify-center w-[20vw] bg-[dodgerblue] rounded-[20px] labor'>
            <p className='text-white'>Labor and Delivery</p>
          </div>
         
       </div>
      </div>
      <div>
              <button className='bg-[dodgerblue] p-2 text-[12px] hover:shadow-lg text-white rounded-[15px] hover:bg-blue-600'>Add new Department</button>
      </div>
      
      
    </div>
  )
}

export default Departments