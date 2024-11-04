import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/home/contact/Contact'
import Service from './pages/service/Service'
import About from './pages/about/About'
import Details from './pages/about/details/Details'
import Experience from './pages/about/experince/Experience'
import Projects from './pages/about/projects/Projects'
import Education from './pages/about/education/Education'
import Pdetailspage from './pages/about/pdetailspage/Pdetailspage'

function App() {
 

  return (
    <>
    <div className="app">
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      
      <Route path='/about' element={<About/>}>
        {/* <Route index path='' element={<Details/>}/> */}
        <Route path='' element={<Navigate to={'details'}/>}/>
        <Route path='details' element={<Details/>}/>
        <Route path='experience' element={<Experience/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='/about/pdetailspage/:id' element={<Pdetailspage/>}/>
        <Route path='education' element={<Education/>}/>
      </Route>
    </Routes>
     
    </div>
    </>
  )
}

export default App
