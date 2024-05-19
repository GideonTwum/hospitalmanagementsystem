import Search from '@mui/icons-material/Search'
import React from 'react'

const Patients = () => {
  return (
    <div className='flex flex-col items-center  '>
        <div className='bg-white border-[1px] p-2 rounded-[30px]'>
          <input type="text" className='w-[30vw] text-[12px] ' placeholder='Search for patients...' />
          <Search style={{fontSize:18, color:'gray'}}/>
        </div>
    </div>
  )
}

export default Patients