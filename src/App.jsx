import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./Components/Navbar/Nav"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Navbar/Home"
import About from "./Components/Navbar/About"
import Contact from "./Components/Navbar/Contact"

function App() {
 
  return (
    <>
    
        <BrowserRouter>
        <Nav/>
        
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
