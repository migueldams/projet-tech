import ScrollAnimation from '@/components/common/ScrollAnimation';
import Title from '@/components/ui/Title'
import { ask } from '@/constant'
import React from 'react'

function Blog() {
    const [isActive, setIsActive] = React.useState<number | null>(null);
    return (
        <ScrollAnimation>
            <div id='blog' className='flex flex-col justify-center items-center gap-15 mt-20 w-full'>
                <Title h1="Frequently Asked Questions." h2="We are a team of passionate designers and developers dedicated to creating beautiful and functional websites." />
                <div className='flex justify-center gap-15 w-4/5'>
                    <div className='flex flex-col items-center w-full'>
                        {ask.map((item) => (
                            <div key={item.id} className='flex flex-col w-full md:w-4/5 gap-4 mb-6 border-b-2 pb-4 border-gray-300 transition-all duration-100'>
                                <div className='flex justify-between'><p className='md:text-md xl:text-xl 2xl:text-2xl font-semibold'>{item.id}.{item.question}</p> <button className='font-bold text-2xl md:text-4xl transition-all duration-100' onClick={() => setIsActive(isActive === item.id ? null : item.id)}>{isActive === item.id ? '-' : '+'}</button></div>
                                <p className={`text-gray-500 transition-all duration-200 ${isActive === item.id ? 'block' : 'hidden'}`}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full h-100 md:h-200 bg-gradient-to-r from-orange-500 to-gray-100 flex justify-end items-end'>
                    <img src="https://photowebdesigns.com/wp-content/uploads/2025/03/banner4.png" alt="" />
                </div>
            </div>
        </ScrollAnimation>

    )
}

export default Blog