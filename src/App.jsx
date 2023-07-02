
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Sections/Footer'
function App() {


  return (
    <>
      <Router>
        <div className='w-[100vw]'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </>
  )
}

export default App
