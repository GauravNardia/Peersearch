import Find from '@/components/shared/Find'
import React from 'react'

const page = async() => {

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full font-serif font-semibold text-neutral-900 text-4xl sm:text-5xl flex flex-col justify-center tracking-wide items-center text-center mt-20'>
        <h1>Find Builders Who Actually Build</h1>
      </div>
        <div className='text-lg text-center text-neutral-600 mt-3 mb-10 font-sans sm:px-5'>
        <p>Search by <span className='cursor-pointer hover:text-green-500 transition-all duration-300'>stack</span>, <span className='cursor-pointer hover:text-green-500 transition-all duration-300'>intent</span> or  <span className='cursor-pointer hover:text-green-500 transition-all duration-300'>role</span> backed by
        <span className='cursor-pointer hover:text-green-500 transition-all duration-300'> Peerlist</span> activity.</p>
      </div>
      <Find/>
    </div>
  )
}

export default page