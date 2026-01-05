import React from 'react'
import { NavLink } from '@/constant';

function Footer() {

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
        <div className='w-screen lg:h-120 bg-black flex flex-col  items-center'>
            <div className='w-full lg:h-100 px-20 py-20 flex flex-col lg:flex-row justify-between'>
                <div className='w-full lg:w-1/3 flex flex-col justify-center'>
                    <img className='w-80 lg:w-50 h-20' src="https://photowebdesigns.com/wp-content/uploads/2025/03/logo-footer.svg" alt="" />
                    <p className='text-white font-semibold ml-2'>PhotoWebDesigns Agence de creation de <br /> site web</p>
                </div>
                <div className='w-full lg:w-2/3 flex flex-col lg:flex-row '>
                    <div className='w-1/3 flex flex-col gap-5  py-10 lg:py-0 border-b-2 lg:border-b-0 border-gray-400'>
                        <h3 className='text-white font-bold mb-4'>Quick Links</h3>
                        <ul className='text-gray-300 flex flex-col gap-2'>
                            {NavLink.map((link, i) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleScroll(i + 1)}
                                    className=" hover:text-gray-500 w-12 "
                                >
                                    {link.name}
                                </button>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full lg:w-1/3 flex flex-col gap-5  py-10 lg:py-0 border-b-2 lg:border-b-0 border-gray-400'>
                        <h3 className='text-white font-bold mb-4'>Contact Us</h3>
                        <ul className='text-gray-300'>
                            <li className='mb-2'>Email: info@photowebdesigns.com</li>
                            <li className='mb-2'>Phone: +1 (555) 123-4567</li>
                            <li className='mb-2'>Address: 123 Design Street, Creative City, CC 12345</li>
                        </ul>
                    </div>
                    <div className='w-1/3 flex flex-col gap-5 lg:px-10 py-10 lg:py-0 + border-b-2 lg:border-b-0 border-gray-400'>
                        <h3 className='text-white font-bold mb-4'>Follow Us</h3>
                        <div className='flex gap-4 text-gray-300 flex-col'>
                            <a href="#" className='hover:text-white'>Facebook</a>
                            <a href="#" className='hover:text-white'>Twitter</a>
                            <a href="#" className='hover:text-white'>Instagram</a>
                            <a href="#" className='hover:text-white'>LinkedIn</a>
                        </div>

                    </div>
                </div>

            </div>
            <div className='w-full px-10'>
                <p className='text-white  pt-10'>© 2025 <b className='underline'>PhotoWebDesigns.</b> All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer