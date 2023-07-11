
import Navbar from './Sections/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Sections/Footer'
import Cursor from './components/Cursor'
import PageUnderDevelopment from './components/PageUnderDevelopment'
import TallyForms from './Pages/Tallyforms'
import Error from './Pages/Error'
function App() {


  return (
    <>
      <Router>
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/development" element={<PageUnderDevelopment />} />
          <Route path="/forms" element={<TallyForms />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
