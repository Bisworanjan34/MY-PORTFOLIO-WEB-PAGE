import React from 'react'
import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
const Education = () => {
  return (
    <div>
       <div className='education-div tpurple'>
      <h5 className='text-center '>Education<FontAwesomeIcon icon={faBook} className='ms-2'></FontAwesomeIcon></h5>
      <h5 className='twht'>Qualifications</h5>
      <div className=" container educations">
        <div className="row">
        <div className="col-auto">
      <dl>
        <dt>MERN-STACK</dt>
        <dd><h5>Webdeveloper</h5></dd>
        <dd>Hyderabd</dd>
        <dd>Quality-thought</dd>
        <dd>year of pass out : 2024</dd>
      </dl>
      </div>
          <div className="col-auto ">
      <dl>
        <dt>BTECH-DEGREE</dt>
        <dd><h5> Mechanical engineering</h5></dd>
        <dd>sophitorium engineering college,khorda</dd>
        <dd>khorda</dd>
        <dd>year of pass out : 2024</dd>
      </dl>
      </div>
      <div className="col-auto">
      <dl>
        <dt>12TH HSE</dt>
        <dd><h5>Sceience</h5></dd>
        <dd>Higher secondary education</dd>
        <dd>Ratanpur science college</dd>
        <dd>kakatpur,puri</dd>
        <dd>year of pass out : 2017</dd>
      </dl>
      </div>
      <div className="col-auto">
      <dl>
        <dt>10TH BSE </dt>
        <dd>Board of secondary education</dd>
        <dd>Birabhadra bidyapitha bangurigaon</dd>
        <dd>kakatpur,puri</dd>
        <dd>year of pass out 2015</dd>
      </dl>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Education
