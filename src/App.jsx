
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Sections/Footer'
import Cursor from './components/Cursor'
function App() {


  return (
    <>
      <Router>

        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        {/* <Footer /> */}

      </Router>

    </>
  )
}

export default App
