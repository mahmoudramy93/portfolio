import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Image src={'/images/logo.svg'} alt='Loading...' height={400} width={400}/>
    </div>
  )
}

export default Loading