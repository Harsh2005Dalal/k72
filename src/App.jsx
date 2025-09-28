import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Agence from './Pages/Agence.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState,useEffect } from 'react'

const App = () => {
  const [ready,setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1200); // delay 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return null;
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/agence" element={<Agence/>}/>
      </Routes>
    </div>
  )
}

export default App
