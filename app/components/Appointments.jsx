// 'use client'
// import React, { useState } from 'react'
// import Cardio from './Cardio';
// import Otolaryngologist from './Otolaryngologist';
// import Optometrist from './Optometrist';
// import Dentist from './Dentist';

// const Appointments = () => {
//   const [activePage, setActivePage] = useState('');
//   const assignActivePage = (getValue) => {
//     setActivePage(getValue);
//   }

//   const renderPages = () => {
//     switch(activePage) {
//       case 'cardio' :
//         return <Cardio/>
//       case 'otolaryngologist' :
//         return <Otolaryngologist />
//       case 'optomerist' :
//         return <Optometrist />
//       case 'dentist' :
//         return <Dentist />
//     }
//   }
//   return (
//     <div>
//        <div className='flex flex-col gap-[10px]'>
//         <div>
//           <h1 className='font-bold text-[30px]'>Our Medical Specialists</h1>
//         </div>
//         <div className='flex items-center gap-4'>
//           <div className='shadow w-[10vw] flex items-center justify-center bg-white hover:bg-[dodgerblue] rounded-[15px] cursor-pointer hover:text-white p-2 ' onClick={() => assignActivePage('cardio')}>
//             <p className='text-[12px] cursor-pointer font-bold'>Cardiologist</p>
//           </div>
//           <div className='shadow w-[10vw] flex items-center justify-center bg-white hover:bg-[dodgerblue] rounded-[15px] cursor-pointer hover:text-white p-2 ' onClick={() => assignActivePage('otolaryngologist')}>
//             <p className='text-[12px] cursor-pointer font-bold'>Otolaryngologist</p>
//           </div>
//           <div className='shadow w-[10vw] flex items-center justify-center bg-white hover:bg-[dodgerblue] rounded-[15px] cursor-pointer hover:text-white p-2 ' onClick={() => assignActivePage('optomerist')}>
//             <p className='text-[12px] cursor-pointer font-bold'>Optomerist</p>
//           </div>
//           <div className='shadow w-[10vw] flex items-center justify-center bg-white hover:bg-[dodgerblue] rounded-[15px] cursor-pointer hover:text-white p-2 ' onClick={() => assignActivePage('dentist')}>
//             <p className='text-[12px] cursor-pointer font-bold'>Dentist</p>
//           </div>
//         </div>
//        </div>
//        <div className='p-10'>
//             {renderPages()}
//        </div>
//     </div>
//   )
// }

// export default Appointments