import { AccountCircleSharp } from '@mui/icons-material'
import Search from '@mui/icons-material/Search'
import React from 'react'

const Patients = () => {
  return (
    <div className='flex flex-col items-center  '>
        <div className='bg-white border-[1px] p-2 rounded-[30px]'>
          <input type="text" className='w-[30vw] outline-none text-[12px] ' placeholder='Search for patients...' />
          <Search style={{fontSize:18, color:'gray'}}/>
        </div>
        <div className='flex'>
           <div className='flex items-center'>
              <div className='flex flex-col gap-8 mt-10 items-center'>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center hover:bg-[white] border-[1px] w-[30vw] rounded-[30px]' >
                    <div>
                      <AccountCircleSharp style={{fontSize:80, color:'gray'}}/>
                    </div>
                    <div>
                      <p className='font-bold '>Salifu Alhassan</p>
                      <div className='flex gap-4 text-[12px]'>
                        <p>Male</p>
                        <p>age: 30</p>
                      </div>
                      <div className='text-[10px] flex gap-4'>
                        <p>0534544354</p>
                        <p className='text-[dodgerblue]'>DISCHARGED</p>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center hover:bg-[white] border-[1px] w-[30vw] rounded-[30px]' >
                    <div>
                      <AccountCircleSharp style={{fontSize:80, color:'gray'}}/>
                    </div>
                    <div>
                      <p className='font-bold '>Ampadu Sarfo jnr</p>
                      <div className='flex gap-4 text-[12px]'>
                        <p>Male</p>
                        <p>age: 42</p>
                      </div>
                      <div className='text-[10px] flex gap-4'>
                        <p>0544544354</p>
                        <p className='text-[dodgerblue]'>DISCHARGED</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
       
        </div>
    </div>
  )
}

export default Patients