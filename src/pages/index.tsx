
import Home from '@/pages/Home'
import Service from '@/pages/Services'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Blog from '@/pages/blog'

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