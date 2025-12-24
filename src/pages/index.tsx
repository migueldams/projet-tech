import React from 'react'
import Home from './Home'
import Service from './Services'
import About from './About'
import Contact from './Contact'

function Pages() {
  return (
    <div className='w-full '>
      <Home />
      <Service/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Pages