'use client'
import React, { useState } from 'react'
import Cardio from './Cardio';
import Otolaryngologist from './Otolaryngologist';
import Optometrist from './Optometrist';
import Dentist from './Dentist';
import { Button } from '@nextui-org/button';
import { Add } from '@mui/icons-material';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';

const Doctors = () => {
  const [activePage, setActivePage] = useState('');
  const assignActivePage = (getValue) => {
    setActivePage(getValue);
  }

  const renderPages = () => {
    switch(activePage) {
      case 'cardio' :
        return <Cardio/>
      case 'otolaryngologist' :
        return <Otolaryngologist />
      case 'optomerist' :
        return <Optometrist />
      case 'dentist' :
        return <Dentist />
        default:
          return <Cardio/>
    }
  }

  const {isOpen, onOpen, onOpenChange} = useDisclosure(); 
  const [add, setAdd] = useState(false);
  const added = () =>{
    setAdd(true);
    toast.success('Category Added Successfully!')
    setTimeout(()=>{
     
    },1000)
  }


  return (
    <div>
       <div className='flex flex-col gap-[10px]'>
        <div className='flex items-center gap-4 '>
          <h1 className='font-bold text-[30px]'>Our Medical Specialists</h1>
          <div>
            <Button onPress={onOpen}  size='sm' className='p-none text-[12px] text-white bg-[dodgerblue]'> <Add style={{fontSize:18, color:'white'}}/> Add Category</Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose)=> (
                      <>
                        <ModalHeader className='font-bold'> Add a Category</ModalHeader>
                        <ModalBody>
                          <div className='flex flex-col'>
                            <label className='text-[13px]' htmlFor="">Enter Category name</label>
                            <input type="text" className='outline-none w-[20vw] border-[1px]' />
                          </div>
                          <div className='flex flex-col'>
                            <label className='text-[13px]' htmlFor="">what department?</label>
                            <input type="text" className='outline-none w-[20vw] border-[1px]' />
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <div>
                            <Button onClick={() => added() } onPress={onClose} className='text-white bg-[dodgerblue] mb-4 outline-none'>Add</Button>
                          </div>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
              </Modal>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='shadow w-[10vw] flex items-center justify-center bg-white hover:bg-[dodgerblue] rounded-[15px] cursor-pointer hover:text-white p-2 ' onClick={() => assignActivePage('cardio')}>
            <p className='text-[12px] cursor-pointer font-bold'>Cardiologist</p>
          </div>
          <div className='shadow w-[10vw] flex items-center justify-center bg-white hover:bg-[dodgerblue] rounded-[15px] cursor-pointer hover:text-white p-2 ' onClick={() => assignActivePage('otolaryngologist')}>
            <p className='text-[12px] cursor-pointer font-bold'>Otolaryngologist</p>
          </div>
          <div className='shadow w-[10vw] flex items-center justify-center bg-white hover:bg-[dodgerblue] rounded-[15px] cursor-pointer hover:text-white p-2 ' onClick={() => assignActivePage('optomerist')}>
            <p className='text-[12px] cursor-pointer font-bold'>Optomerist</p>
          </div>
          <div className='shadow w-[10vw] flex items-center justify-center bg-white hover:bg-[dodgerblue] rounded-[15px] cursor-pointer hover:text-white p-2 ' onClick={() => assignActivePage('dentist')}>
            <p className='text-[12px] cursor-pointer font-bold'>Dentist</p>
          </div>
        </div>
       </div>
       <div className='p-10'>
            {renderPages()}
       </div>
       <Toaster/>
    </div>
  )
}

export default Doctors