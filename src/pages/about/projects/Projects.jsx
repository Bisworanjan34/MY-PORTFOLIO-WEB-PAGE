import React, { useState } from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faJava, faReact, faRProject } from '@fortawesome/free-brands-svg-icons'
import Projectitem from './projectitem/Projectitem'
import projectData from './projectitem/projectData'
const Projects = () => {
  let [pdata,setPdata]=useState(projectData)
  return (
    <div className='projects-div'>
      <h5 className='text-light text-center'>My-projects</h5>
        <div className="container d-flex justify-content-evenly flex-wrap">
          {
            pdata.map((p,i)=>{
              return(
                <div className="" key={i}>
             
                  <Projectitem p={p}/>
                </div>
            
              )
            })
          }
        </div>

      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-auto col-lg-4 ">
            <h5 className='h3'><FontAwesomeIcon icon={faReact}/>React.js</h5>
            <b className="twht" >10+</b>
          </div>
          <div className="col-auto col-lg-4">
          <h5 className='h3'><FontAwesomeIcon icon={faJava}/>javascript</h5>
          <b className="twht" >20+</b>
          </div>
          <div className="col-auto col-lg-4">
          <h5 className='h3'><FontAwesomeIcon icon={faCss3}/>css</h5>
          <b className="twht" >25+</b>
          </div>
        </div>
        <div className="row">
          <div className="col all-projects">
            <ul>
            <li>Am working with lot of projects like this </li>
              <li>Flipkart Ecommerce webpage</li>
              <li>Fashion webpage</li>
              <li>Food delivery webpage</li>
              <li>profile webpage</li>
              <li>Whatsapp webpage</li>
              <li>Youtube webpage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
