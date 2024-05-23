'use client'
import { AccountCircleSharp } from '@mui/icons-material';
import Search from '@mui/icons-material/Search';
import React, { useState } from 'react';
import patientsData from '../data/patients.json';

const Patients = () => {
  const [searchItem, setSearchItem] = useState('');
  const filteredPatients = patientsData.filter(patient => patient.name.toLowerCase().includes(searchItem.toLowerCase()));

  return (
    <div className='flex flex-col items-center'>
      <div className='bg-white border-[1px] p-2 rounded-[30px]'>
        <div className='flex items-center'>
          <input 
            type="text" 
            value={searchItem} 
            onChange={e => setSearchItem(e.target.value)} 
            className='w-[30vw] outline-none text-[12px]' 
            placeholder='Search for patients...' 
          />
          <Search style={{fontSize:18, color:'gray'}} />
        </div>
      </div>
      <ul className='mt-4'>
        {filteredPatients.map(patient => (
          <li key={patient.id} className='mt-4'>
            <div className='flex items-center hover:bg-[white] border-[1px] w-[30vw] rounded-[30px] p-4'>
              <div>
                <AccountCircleSharp style={{fontSize:80, color:'gray'}} />
              </div>
              <div className='ml-4'>
                <p className='font-bold'>{patient.name}</p>
                <div className='flex gap-4 text-[12px]'>
                  <p>{patient.gender}</p>
                  <p>age: {patient.age}</p>
                </div>
                <div className='text-[10px] flex gap-4'>
                  <p>{patient.phone}</p>
                  <p className='text-[dodgerblue]'>{patient.status}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
