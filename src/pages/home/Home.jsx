import React, { useEffect, useRef, useState } from 'react'
import profile from '../../assets/profile-2.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faReact, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './Home.css'
import Navbar from '../../components/Navbar'
const Home = () => {

  let imgRef=useRef()
  let reactLogo=useRef()
  let hireRef=useRef()
  let ptitleRef=useRef()
  let pimgRef=useRef()
  let animRef=useRef(null)

  useEffect(()=>{
     ptitleRef.current.style.transform='translatex(0)'
     pimgRef.current.style.transform='translatey(0)'
  },[])

  return (
    <div>
      <Navbar imgref={imgRef} reactlogo={reactLogo} hireRef={hireRef} ptitleRef={ptitleRef} pimgRef={pimgRef} animRef={animRef}/>
      <div className="container home-main " >
        <div className="row h-100 align-items-center justify-content-evenly profile-cont">
          <div className=" col-lg-5 col-md-6 col-sm-12 col-12 profile-title " ref={ptitleRef}>
            <div className=" name-div ms-5 ps-5 text-white">
       <span className='display-3 react-icon'>
        <FontAwesomeIcon icon={faReact} ref={reactLogo} className='react-logo '/></span>
             
              <h1 className=' fw-bold  ms-3 helo'> Hello <span>i'm</span></h1> 
                <h5 className='tpurple display-4 fw-bold profile-name'> Bisworanjan</h5>
                {/* <p className=' frontend text-white '>Front-end-web-developer </p>   */}
             <marquee behavior="" direction="right">
             <p className=' frontend text-white '>React-web-developer </p>              
             </marquee>
              <div className="div d-flex gap-4 social-icon ">
               <Link to={'https://www.facebook.com/profile.php?id=100089866887504'}><p><FontAwesomeIcon icon={faFacebook}/></p></Link> 
                <p><FontAwesomeIcon icon={faWhatsapp}/></p>
                <p><FontAwesomeIcon icon={faInstagram}/></p>
               <Link to={'https://www.linkedin.com/in/bisworanjan-sahoo-10075031a/'}> <p><FontAwesomeIcon icon={faLinkedin}/></p></Link>
               <Link to={'https://github.com/Bisworanjan34'}><p><FontAwesomeIcon icon={faGithub}/></p></Link>

              </div>
            <Link to='/contact'> <button className='btn1 mt-2 ' ref={hireRef}>Hire me</button></Link>
             <Link to={'/about'}> <button className='btn2 mt-2' >About me</button></Link>
            </div>
          </div>
          <div className="col-auto col-md-5 col-sm-12 text-center  h-75    profile-img" ref={pimgRef}>
            <div className='profile-img-div  overflow-hidden  mx-auto' ref={imgRef}>
            <img src={profile} alt=""  className=''  />
            <div className="img-anim " ref={animRef}>

            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
