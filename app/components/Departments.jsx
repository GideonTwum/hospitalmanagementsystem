import { Add } from '@mui/icons-material'
import { Button } from '@nextui-org/button'
import React from 'react'

const Departments = () => {
  return (
    <div className='flex  gap-10' >
      <div className='flex flex-col gap-6'>
      <div>
              <Button size='sm' className='bg-[dodgerblue] p-2 text-[12px] hover:shadow-lg text-white rounded-[15px] hover:bg-blue-600'> <Add style={{fontSize:18, color:'white'}}/> Add new Department</Button>
      </div>
      <div className='gap-4 flex'>
          <div className='h-[20vh] flex flex-col items-center justify-center w-[20vw] bg-[dodgerblue] rounded-[20px] emergency'>
            <p className='text-white'>Emergency Department</p>
          </div>
          <div className='h-[20vh] flex flex-col items-center justify-center w-[20vw] bg-[dodgerblue] rounded-[20px] surgical'>
            <p className='text-white'>Medical/Surgical Units</p>
          </div>
         
       </div>
       <div className='gap-4 flex'>
          <div className='h-[20vh] flex flex-col items-center justify-center w-[20vw] bg-[dodgerblue] rounded-[20px] care'>
            <p className='text-white'>Intensive Care Unit</p>
          </div>
          <div className='h-[20vh] flex flex-col items-center justify-center w-[20vw] bg-[dodgerblue] rounded-[20px] labor'>
            <p className='text-white'>Labor and Delivery</p>
          </div>
         
       </div>
      </div>
     
      
      
    </div>
  )
}

export default Departments