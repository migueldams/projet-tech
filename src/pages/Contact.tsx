import FormContact from '@/components/common/FormContact'
import ScrollAnimation from '@/components/common/ScrollAnimation'
import { Mail } from 'lucide-react'

function Contact() {
    return (
        <ScrollAnimation>
            <div id='contact' className='flex w-full h-screen justify-center py-20  bg-gray-100  '>
                <div className='w-4/5 h-full flex justify-center gap-10'>
                    <div className='w-1/2 flex flex-col items-center gap-20'>
                        <div className='flex  w-full flex-col items-center gap-5'>
                            <p className='text-3xl font-bold text-center '>We will be there for you from start to finish.</p>
                            <p className='text-gray-500 text-center '>Have a question or ready to get started? We're here to help bring your vision to life with a website that is as unique and stunning as your work</p>
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
                            <div className='bg-gray-200 p-1 rounded-2xl'>
                                <img className='w-15 h-15 rounded-full ' src="https://photowebdesigns.com/wp-content/uploads/2025/02/get-in-touch.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <FormContact />
                </div>

            </div>
        </ScrollAnimation>

    )
}

export default Contact