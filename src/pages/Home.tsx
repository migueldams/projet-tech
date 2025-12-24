import React from 'react'
import { Hand, Laptop, SearchCheck, Star, Trophy } from 'lucide-react'
import { listhozontale } from '@/constant';
import Stick from '@/components/ui/Stick';
import ScrollAnimation from '@/components/common/ScrollAnimation';

function Home() {


  return (
    <ScrollAnimation>
      <div id='home' className=' flex flex-col w-full justify-center items-center mx-auto my-20'>
        <div className='w-3/5 pb-20 flex flex-col justify-center items-center gap-10 text-center mb-10'>
          <Stick icon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24"><mask id="a" width="25" height="24" x="0" y="0" maskUnits="userSpaceOnUse" ><path fill="#D9D9D9" d="M.5 0h24v24H.5z"></path></mask><g mask="url(#a)"><path fill="#5C5C5C" d="m11.471 11.616 6.71-6.72a.727.727 0 0 1 .527-.233c.196 0 .372.078.527.233a.727.727 0 0 1 .232.527.727.727 0 0 1-.232.527l-6.695 6.71-1.069-1.044Zm2.398 2.388 5.995-6.01a.735.735 0 0 1 .534-.233c.201 0 .38.078.535.233a.735.735 0 0 1 .232.535c0 .201-.077.38-.232.534l-6.004 5.995-1.06-1.054Zm-7.882 4.49c-1.427-1.427-2.14-3.14-2.136-5.138.003-1.999.722-3.715 2.155-5.148l2.933-2.933 1.234 1.244c.149.149.268.308.358.478.09.17.163.35.221.541l3.662-3.677a.735.735 0 0 1 .534-.232c.201 0 .38.077.535.232a.736.736 0 0 1 .232.535c0 .201-.077.38-.232.535l-4.335 4.334-1.846 1.84.485.486c.702.702 1.043 1.545 1.023 2.528-.02.984-.388 1.832-1.1 2.544l-.096.096-1.06-1.053.087-.096a2.17 2.17 0 0 0 .661-1.483 1.896 1.896 0 0 0-.585-1.483l-.905-.89a.88.88 0 0 1-.271-.645c0-.25.09-.465.27-.646l1.272-1.246a1.14 1.14 0 0 0 .348-.837c0-.326-.116-.606-.348-.838l-.144-.144-1.88 1.87c-1.14 1.14-1.714 2.501-1.723 4.086-.01 1.584.555 2.947 1.695 4.087 1.14 1.14 2.51 1.709 4.109 1.709 1.599 0 2.968-.57 4.108-1.71l5.648-5.663a.735.735 0 0 1 .535-.233c.201 0 .38.078.534.233a.735.735 0 0 1 .233.535c0 .2-.078.38-.233.534l-5.673 5.648c-1.433 1.434-3.15 2.15-5.152 2.15-2.002 0-3.72-.716-5.153-2.15ZM17.135 22.4l-.01-1.515c1.177 0 2.181-.416 3.013-1.248.83-.831 1.247-1.835 1.247-3.012l1.515.01c0 1.596-.562 2.956-1.685 4.08-1.124 1.123-2.484 1.685-4.08 1.685ZM2.1 7.365c0-1.596.562-2.956 1.686-4.08C4.909 2.162 6.269 1.6 7.866 1.6l.01 1.515c-1.178 0-2.182.416-3.013 1.247-.832.832-1.247 1.836-1.247 3.013L2.1 7.365Z"></path></g></svg>} content="We Create For The Pros" />
          <p className='font-bold text-5xl'>Website Design & SEO For <br /> <b className='underline font-italic'>Creative Professionals.</b></p>
          <p className='text-xl text-gray-500'>Beautiful, SEO-friendly websites for <b>photographers, artists,</b> and <b>galleries.</b>Showcase your talent and let your work bring in more clients!</p>
          <div className='flex gap-5 '>
            <button className='bg-black rounded-full font-semibold text-white px-8 py-4 cursor-pointer'>Get Started</button>
            <button className='bg-gray-200 rounded-full font-semibold px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 cursor-pointer'>Limited time Autumn Sale</button>
          </div>
        </div>
        <img className='w-full h-150 object-cover' src="https://photowebdesigns.com/wp-content/uploads/2025/06/service-3b.jpg" alt="" />
        <div className='py-10 overflow-hidden w-full'>
          <div className='flex  justify-center w-max  gap-10 shadow-inner py-5 shadow-white Carousel-container'>
            {[...listhozontale, ...listhozontale].map((item, i) => (
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
    </ScrollAnimation>

  )
}

export default Home