import React from 'react'
import './Details.css'
const Details = () => {
  return (
    <div className='details-div'>
      <h5 className='text-center tpurple d-title'>Profile Summery</h5>
      <p className='tpurple'>Skilled Frontend React Web Developer specializing in building
        responsive interfaces to enhance user experience. Collaborative
        team player with a strong foundation in JavaScript and modern
        web technologies. Delivers high-quality projects on time with keen
        attention to detail and commitment to staying updated with
        industry trends.</p>

      <h5 className='twht'>Key Skills</h5>

      <ul>
        <li>HTML Web Designer
        </li><span></span>
        <li>CSS Designing</li><span></span>
        <li>Javascript</li><span></span>
        <li>Bootstrap CSS Framework</li><span></span>
        <li>React.Js</li><span></span>
        <li>Redux</li><span></span>
        <li>Routing</li><span></span>
        <li>Axios</li><span></span>
        <li>Context API</li><span></span>
      </ul>
    </div>
  )
}

export default Details
