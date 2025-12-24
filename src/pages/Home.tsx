import React from 'react'
import { Hand, Laptop, SearchCheck, Star, Trophy } from 'lucide-react'
import { listhozontale } from '@/constant';

function Home() {


  return (
    <div className=' flex flex-col w-full justify-center items-center mx-auto my-20'>
      <div className='w-3/5 pb-20 flex flex-col justify-center items-center gap-10 text-center mb-10'>
        <div className='w-70 flex justify-center rounded-md px-4 py-2 cursor-pointer bg-gray-300 text-gray-700 gap-5'><Hand /><p>We Create For The Pros</p></div>
        <p className='font-bold text-5xl'>Website Design & SEO For <br /> <b className='underline font-italic'>Creative Professionals.</b></p>
        <p className='text-xl text-gray-500'>Beautiful, SEO-friendly websites for <b>photographers, artists,</b> and <b>galleries.</b>Showcase your talent and let your work bring in more clients!</p>
        <div className='flex gap-5 '>
          <button className='bg-black rounded-full font-semibold text-white px-8 py-4 cursor-pointer'>Get Started</button>
          <button className='bg-gray-200 rounded-full font-semibold px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 cursor-pointer'>Limited time Autumn Sale</button>
        </div>
      </div>
      <img className='w-full h-150 object-cover' src="https://photowebdesigns.com/wp-content/uploads/2025/06/service-3b.jpg" alt="" />
      <div className='py-10 overflow-hidden w-full'>
        <div className='flex  justify-center w-max animate-carousel gap-10'>
          {[...listhozontale, ...listhozontale].map((item,i) => (
            <div key={i} className='flex w-80 bg-gray-100 text-gray-500 text-sm items-center gap-6  py-4 px-6 rounded-md'>
              <item.icon className='w-5 h-5' />
              <p className='font-semibold whitespace-nowrap'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='py-10 w-full flex justify-center items-center gap-4'>
          <div className='w-1/3'><hr /></div>
          <p className='text-gray-400 text-md'>Perks that come with our products:</p>
          <div className='w-1/3'><hr /></div>
      </div>
    </div>
  )
}

export default Home