import React, { useState } from 'react'
import resume from '../../assets/my-resume.pdf'
import './Service.css'
import Navbar from '../../components/Navbar'
import pdata from '../../pages/about/projects/projectitem/projectData'
import Projectitem from '../about/projects/projectitem/Projectitem'
const Service = () => {
  let [data,setData]=useState(pdata)
  return (
    <div>
      <Navbar/>
      <h2 className='text-center tpurple'>Service</h2>
      <div className="container d-flex justify-content-evenly flex-wrap">
          {
            data.map((s,i)=>{
              return(
                <div className="" key={i}>
             
                  <Projectitem p={s}/>
                </div>
            
              )
            })
          }
        </div>

      <div className="container">
        <h5>My-resume</h5>
        <div className="row">
          <div className="col-auto mx-auto py-5">
            <div className="resume">
            <iframe src={resume} width="100%" height="600px" title="My Resume"></iframe>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
