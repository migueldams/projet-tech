import ScrollAnimation from '@/components/common/ScrollAnimation';
import Title from '@/components/ui/Title'
import { about } from '@/constant'
import React, { useRef, useState } from 'react'

function About() {

    const [isActive, setIsActive] = useState<number | null>(null);



    return (
        <ScrollAnimation>
            <div id="about" className='flex flex-col justify-center items-center gap-15 my-20 w-full'>
                <Title h1="About Us" h2="We are a team of passionate designers and developers dedicated to creating beautiful and functional websites." />
                <div className='grid grid-cols-2 gap-15 w-4/5'>
                    <div>
                        {about.map((item) => (
                            <div key={item.id} className='flex flex-col gap-4 mb-6 border-b-2 pb-4 border-gray-300 transition-all duration-100'>
                                <div className='flex justify-between'><p className='text-2xl font-semibold'>{item.id}.{item.title}</p> <button className='font-bold text-4xl transition-all duration-100' onClick={() => setIsActive(isActive === item.id ? null : item.id)}>{isActive === item.id ? '-' : '+'}</button></div>
                                <p className={`text-gray-500 transition-all duration-200 ${isActive === item.id ? 'block' : 'hidden'}`}>{item.description}</p>
                            </div>
                        ))}

                    </div>
                    <div className='flex justify-center items-center w-full h-150 '>
                        <img className='w-full h-full rounded-2xl' src="https://photowebdesigns.com/wp-content/uploads/2025/06/process2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </ScrollAnimation>

    )
}

export default About