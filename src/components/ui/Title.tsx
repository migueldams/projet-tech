import React from 'react'

function Title({ h1, h2 }: { h1: string; h2: string }) {
    return (
        <div className='flex w-full px-10 sm:px-0 sm:w-3/4  lg:w-1/2 flex-col items-center gap-10'>
            <p className='font-bold text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl text-center'>{h1}</p>
            <p className='lg:text-xl text-gray-500 text-center'>{h2}</p>
        </div>
    )
}

export default Title