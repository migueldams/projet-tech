import React, { useState } from 'react'
import { NavLink } from '@/constant';
import { Menu, X } from 'lucide-react'
import logo from '@/assets/logotech.png'

function Headers() {

    const [IsActive, setIsActive] = useState(false)
    const handleScroll = (id: number) => {
        switch (id) {
            case 1:
                document.getElementById("home")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                break;

            case 2:
                document.getElementById("service")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                break;

            case 3:
                document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                break;

            case 4:
                document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                break;

            default:
                break;
        }
    };

    return (
        <div className='h-30 w-screen flex justify-center items-end  '>
            {/* nav desktop */}
            <div className={`${IsActive && 'h-40 rounded-xl top-5'} h-15 md:h-20 w-4/5 xl:w-3/5  backdrop-blur-3xl border-2 border-gray-300 rounded-full bg-[rgba(255,255,255,0.6)] flex flex-col items-center justify-center px-4 md:px-0 pb-2 fixed z-80 transition-all duration-200 `}>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex w-1/4 justify-center items-center'>
                        <img className='w-30' src={logo} alt="" />
                    </div>
                    <div className='w-1/2 hidden md:flex justify-center gap-4 font-semibold items-center'>
                        {NavLink.map((link, i) => (
                            <button
                                key={link.name}
                                onClick={() => handleScroll(i + 1)}
                                className="text-gray-800 hover:text-gray-500 mx-4"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                    <div className=' flex justify-end items-center w-1/2 md:hidden'>
                        <button className='hover:text-gray-200' onClick={() => setIsActive(!IsActive)}>{IsActive ? <X className='w-10' />: <Menu  className='w-10' />}</button>
                    </div>
                    <div className='flex lg:w-1/4 justify-center items-center'>
                        <button className='flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1 hover:bg-gray-500 transition-colors'>
                            <div className='relative  '>
                                <img className='w-10 h-10 rounded-full ' src="https://photowebdesigns.com/wp-content/uploads/2025/02/get-in-touch.png" alt="" />
                                <div className='bg-green-500 h-3 w-3 absolute rounded-full z-index-10 top-0 right-0'></div>
                            </div>
                            <p className='font-semibold hidden lg:flex'>Entrer en contact</p>
                        </button>
                    </div>

                </div>
                {IsActive &&
                    <div className={`w-full flex flex-col justify-center gap-1 font-semibold text-sm items-center  `}>
                        {NavLink.map((link, i) => (
                            <button
                                key={link.name}
                                onClick={() => handleScroll(i + 1)}
                                className="text-gray-800 hover:text-gray-500 mx-4 text-center border-b-2 border-gray-400 w-full"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>}

            </div>



        </div>)

}

export default Headers