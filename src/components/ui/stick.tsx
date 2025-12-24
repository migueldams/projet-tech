import React from 'react'

function stick({icon ,content}: {icon: React.ReactNode, content: string}) {
  return (
            <div className='w-70 flex justify-center rounded-md px-4 py-2 cursor-pointer bg-gray-300 text-gray-700 gap-5'>{icon}<p>{content}</p></div>
  )
}

export default stick