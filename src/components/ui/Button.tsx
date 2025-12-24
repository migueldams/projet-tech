import React from 'react'

function Button({content}:{content: string}) {
    return (
        <button className='bg-black rounded-full font-semibold text-white px-8 py-3 cursor-pointer'>{content}</button>

    )
}

export default Button