import Title from '@/components/ui/Title'
import { Mail } from 'lucide-react'
import React from 'react'

function Contact() {
    return (
        <div className='flex w-full h-screen py-10 items-center bg-gray-100 gap-10  px-20 '>
            <div className='w-1/2 flex flex-col items-center gap-10'>
                <div className='flex  w-full flex-col items-center gap-10'>
                    <p className='text-3xl font-semibold text-center text-centr'></p>
                    <p className='text-gray-500 text-center text-2xl '>{h2}</p>
                </div>
                <div className='w-full flex justify-between rounded-xl bg-white p-5'>
                    <div className='flex flex-col justify-center'>
                        <p className='text-gray-300'>Email</p>
                        <p className='font-semibold text-2xl'>info@photowebdesigns.com</p>
                    </div>
                    <div className='bg-gray-200 p-5 rounded-2xl'>
                        <Mail />
                    </div>
                </div>
                <div className='w-full flex justify-between rounded-xl border-2 border-gray-500 p-5'>
                    <div className='flex flex-col justify-center'>
                        <p className='text-gray-300'>Email</p>
                        <p className='font-semibold text-2xl'>info@photowebdesigns.com</p>
                    </div>
                    <div className='bg-gray-200 p-5 rounded-2xl'>
                        <Mail />
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center bg-white'>

            </div>
        </div>
    )
}

export default Contact