import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Agence from './pages/Agence.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Stairs from './components/common/Stairs.jsx'
import { useState,useEffect } from 'react'
import PageWrapper from './components/common/PageWrapper.jsx'

const App = () => {
  // const [ready,setReady] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setReady(true), 1200); // delay 2 seconds
  //   return () => clearTimeout(timer);
  // }, []);

  // if (!ready) return null;
  
  return (
    <div>
      <Stairs/>
      <PageWrapper>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/agence" element={<Agence/>}/>
      </Routes>
      </PageWrapper>
    </div>
  )
}

export default App
