import React from 'react'
import Home from './Home'
import Service from './Services'
import About from './About'
import Contact from './Contact'
import Blog from './blog'

function Pages() {
  return (
    <div className='w-full '>
      <Home />
      <Service/>
      <About/>
      <Contact/>
      <Blog/>
    </div>
  )
}

export default Pages