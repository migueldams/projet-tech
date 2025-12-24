import React from 'react'

function Button(content:string) {
    return (
        <button className='bg-black rounded-full font-semibold text-white px-8 py-4 cursor-pointer'>{content}</button>

    )
}

export default Button