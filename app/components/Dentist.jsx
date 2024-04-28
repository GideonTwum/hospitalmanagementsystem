import React from 'react'
import { Image } from '@nextui-org/react'

const Dentist = () => {
  return (
    <div className='flex gap-2'>
       <div className='h-[30vh] w-[18vw]'>
            <Image
            height={250}
            width={200}
            alt='a young doctor'
            src='/doc.jpg'
            />
        </div>
        <div className='h-[30vh] w-[18vw]'>
            <Image
            height={250}
            width={200}
            alt='a young doctor'
            src='/doc.jpg'
            />
        </div>
        <div className='h-[30vh] w-[18vw]'>
            <Image
            height={250}
            width={200}
            alt='a young doctor'
            src='/doc.jpg'
            />
        </div>
    </div>
  )
}

export default Dentist