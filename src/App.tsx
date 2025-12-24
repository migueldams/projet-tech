import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/common/Headers'
import Footer from './components/common/Footer'
import Headers from './components/common/Headers'
import Pages from './pages'


function App() {
  const [count, setCount] = useState(0)
  const [scrollY, setScrollY] = useState(false)




  return (
    <Router>
      <div className='w-screen'>
        <Headers />
        <Routes>
          <Route path="/" element={<Pages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
