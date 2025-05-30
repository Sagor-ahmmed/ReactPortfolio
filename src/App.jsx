import React from 'react'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { BrowserRouter,Route,Routes } from 'react-router'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
const App = () => {
  return (
    <>
      <BrowserRouter> 
        <Navbar />
        <Routes>
        
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Dashboard />} />
            
        
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App