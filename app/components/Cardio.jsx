import { Image } from '@nextui-org/react'
import React from 'react'

const Cardio = () => {
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
            src='/fdoc.jpg'
            />
        </div>
        <div className='h-[30vh] w-[18vw]'>
            <Image
            height={250}
            width={200}
            alt='a young doctor'
            src='/Mdoc.jpg'
            />
        </div>
      
    </div>
  )
}

export default Cardio