import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './About.css'
import Navbar from '../../components/Navbar'
const About = () => {
  return (
    <div>
      <Navbar/>
      <h5 className='about-title py-4 ms-5 text-light'>About me</h5>
      <div className="container about-cont">
        <div className="row ">
            <div className="col-5 d-flex ms-3 gap-3 about-list">
               <NavLink to={'details'} className={({isActive})=>(isActive?'aboutlink':'')}> <h5 className='nested-p'>Details</h5></NavLink>
               <NavLink to={'experience'} className={({isActive})=>(isActive?'aboutlink':'')}><h5 className='nested-p'>Experience</h5></NavLink> 
               <NavLink to={'projects'} className={({isActive})=>(isActive?'aboutlink':'')}> <h5 className='nested-p'>Projects</h5></NavLink>
               <NavLink to={'education'} className={({isActive})=>(isActive?'aboutlink':'')}> <h5 className='nested-p'>Education</h5></NavLink>
            </div>
        </div>
        <div className="row outlet-about">
            <div className="col-12 p-3 mx-auto">
                   
                    <Outlet/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
