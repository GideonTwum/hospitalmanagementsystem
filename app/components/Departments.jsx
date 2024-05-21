import { Add } from '@mui/icons-material'
import { Button } from '@nextui-org/button'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Departments = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [adding, setAdding] = useState(false);
  const Added = () => {
    setAdding(true);
    toast.success('Department Added Successfully!!')
  }
  return (
    <div className='flex  gap-10' >
      <div className='flex flex-col gap-6'>
      <div>
              <Button onPress={onOpen} size='sm' className='bg-[dodgerblue] p-2 text-[12px] hover:shadow-lg text-white rounded-[15px] hover:bg-blue-600'> <Add style={{fontSize:18, color:'white'}}/> Add new Department</Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onclose) => (
                    <>
                      <ModalHeader>Add Department</ModalHeader>
                      <ModalBody>
                        <div className='flex flex-col'>
                          <label className='text-[13px]' htmlFor="">Enter Department name</label>
                          <input type="text"  className='w-[20vw] border-[1px] outline-none'/>
                        </div>
                        <div className='flex flex-col'>
                          <label className='text-[13px]' htmlFor="">select image</label>
                          <input type="file"  className='w-[20vw] text-[10px] border-[1px] outline-none'/>
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={() => Added()} className='bg-[dodgerblue] text-white' onPress={onclose}>Add</Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>

              </Modal>
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
     
      <Toaster/>
      
    </div>
  )
}

export default Departments