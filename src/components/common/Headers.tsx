import React from 'react'
import { NavLink } from '@/constant';
import {Menu} from 'lucide-react'

function Headers() {


    return (
        <div className='h-30 w-screen flex justify-center items-end  '>
            {/* nav desktop */}
            <div className=' h-20 w-full md:w-4/5 xl:w-3/5  backdrop-blur-3xl border-2 border-gray-300 rounded-full bg-[rgba(255,255,255,0.6)] flex justify-between items-center px-4 md:px-0 pb-2 fixed z-80 '>
                <div className='flex w-1/4 justify-center items-center'>
                    <img src="https://photowebdesigns.com/wp-content/uploads/2025/03/logo.svg" alt="" />
                </div>
                <div className='w-1/2 hidden md:flex justify-center gap-4 font-semibold items-center'>
                    {NavLink.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-800 hover:text-gray-500 mx-4"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className=' flex justify-end items-center w-1/2 md:hidden'>
                    <button><Menu  className='w-20'/></button>
                </div>
                <div className='flex lg:w-1/4 justify-center items-center'>
                    <button className='flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1 hover:bg-gray-500 transition-colors'>
                        <div className='relative  '>
                            <img className='w-10 h-10 rounded-full ' src="https://photowebdesigns.com/wp-content/uploads/2025/02/get-in-touch.png" alt="" />
                            <div className='bg-green-500 h-3 w-3 absolute rounded-full z-index-10 top-0 right-0'></div>
                        </div>
                        <p className='font-semibold hidden lg:flex'>Get In Touch</p>
                    </button>
                </div>
            </div>
           

        </div>)

}

export default Headers