import React from 'react'

function Title({ h1, h2 }: { h1: string; h2: string }) {
    return (
        <div className='flex  w-1/2 flex-col items-center gap-10'>
            <p className='text-5xl font-semibold text-center text-centr'>{h1}</p>
            <p className='text-gray-500 text-center text-2xl '>{h2}</p>
        </div>
    )
}

export default Title