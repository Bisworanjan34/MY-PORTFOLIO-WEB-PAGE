import React, { useCallback, useRef } from 'react'
import { Link,NavLink } from 'react-router-dom'
import profile from '../assets/profile-2.jpg'
import toggleaudio from '../audio/waterdrop.mp3'
import './Navbar.css'
const Navbar = ({imgref,reactlogo,hireRef,animRef}) => {

  let toggleRef=useRef()
  let navRef=useRef()
  let toggleaudioRef=useRef()
  const togglefun = useCallback(() => {
    navRef.current.classList.toggle('active-nav');
    toggleRef.current.classList.toggle('active');
    imgref.current.classList.toggle('active-img');
    reactlogo.current.classList.toggle('active-react');
    hireRef.current.classList.toggle('active-hire');
    animRef.current.classList.toggle('anim');
    toggleaudioRef.current.play();
  }, [imgref, reactlogo, hireRef, animRef]);
  
  
  return (
    <div>
    <div className="container-fluid py-2 nav-main"  ref={navRef}>
             <div className='row align-items-center'>
              <div className="col-3 col-md-3 col-sm-2  text-end">
                <div className="nav-logo-t fst-italic p-0">
                 <h5 className='mt-1 text-white'><span className='twht'>P</span>rofile</h5>
                </div>
              </div>
            <div className="col-5 col-md-4 col-sm-4 mt-2 d-flex gap-lg-4 gap-md-2 gap-2 links ">
                <NavLink to={'/'} className={({isActive})=>(isActive? 'navLactive f-bold':'')}><h5>Home</h5></NavLink>
                <NavLink to={'/about'}className={({isActive})=>(isActive? 'navLactive':'')}><p>About</p></NavLink>
                <NavLink to={'/contact'}className={({isActive})=>(isActive? 'navLactive':'')}><p>Contact</p></NavLink>
                <NavLink to={'/service'}className={({isActive})=>(isActive? 'navLactive':'')}><p>Service</p></NavLink>
            </div>

            <div className="col-4 col-md-2 col-sm-1   toggle-main">
              <div className="toogle-div" ref={toggleRef} onClick={togglefun}>
                <div className="toggle "></div>
              </div>
            </div>
            <audio src={toggleaudio} ref={toggleaudioRef}></audio>
             </div>
             
    </div>
    </div>
  )
}

export default Navbar
