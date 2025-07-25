import { Features } from '@/components/shared/Features'
import { JoinCommunity } from '@/components/shared/JoinCommunity'
import VideoDemo from '@/components/shared/VideoDemo'
import { currentUser } from '@clerk/nextjs/server'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = async() => {
  
    const user = await currentUser();
    if(user && user.id) {
      redirect("/find")
    }
  
  return (
    <section className='w-full flex flex-col justify-center items-center text-black'>

      <div className='w-full font-serif font-semibold text-neutral-900 text-4xl sm:text-5xl flex flex-col justify-center tracking-wide items-center text-center mt-20'>
        <h1>Welcome to PeerSearch</h1>
        <h1 className='sm:mt-3'>Discover real builders on Peerlist!</h1>
      </div>

      <div className='text-lg text-center text-neutral-600 mt-5 font-sans sm:px-5'>
        <p>Find <span className='cursor-pointer hover:text-green-500 transition-all duration-300'>developers</span>, <span className='cursor-pointer hover:text-green-500 transition-all duration-300'>designers</span>, and <span className='cursor-pointer hover:text-green-500 transition-all duration-300'>founders</span> based on what they're building, their stack, location, and goals — powered by 
        <span className='cursor-pointer hover:text-green-500 transition-all duration-300'> Peerlist</span> data.</p>
      </div>

        <div className="mt-10 flex items-center space-x-4">
          <Link
            href="/sign-in"
            className="px-4 py-1.5 border border-gray-300 text-black font-sans font-bold rounded-lg shadow-md text-sm hover:bg-gray-100 transition"
          >
            Start Searching
          </Link>
          <Link
            href="/sign-in"
            className="flex gap-1 justify-center items-center px-4 py-1.5 bg-green-600 border border-green-700 text-white font-sans font-bold rounded-lg shadow-md text-sm font-medium hover:bg-green-700 transition"
          >
            Create Profile <ArrowRight className='w-5' />
          </Link>
        </div>
      
      <VideoDemo/>
      <Features/>
      <JoinCommunity/>

      

    </section>
  )
}

export default Home