
import '@/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from '@/components/common/Footer'
import Headers from '@/components/common/Headers'
import Pages from '@/pages'
import GetStarted from './pages/getStarted'


function App() {
 




  return (
    <Router>
      <div className='w-screen'>
        <Headers />
        <Routes>
          <Route path='/' element={<Pages />} />
          <Route path='/getStarted' element={<GetStarted />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
