import React from 'react'
import './Details.css'
const Details = () => {
  return (
    <div className='details-div'>
      <h5 className='text-center tpurple d-title'>Profile Summery</h5>
      <p className='tpurple'>i am a Skilled Frontend React Web Developer specializing in building
        responsive interfaces to enhance user experience. Collaborative
        team player with a strong foundation in JavaScript and modern
        web technologies. Delivers high-quality projects on time with keen
        attention to detail and commitment to staying updated with
        industry trends.</p>

      <h5 className='twht'>Key Skills</h5>

      <ul className='skill-list'>
        <li><b>Frontend</b>-: html5,css3,javascript,bootstrap,tailwind css,<b>(reactjs)</b></li>
        <li><b>Backend</b> -: basic node js,express js </li>
        <li><b>Database</b>-: basic mongodb (no sql)</li>
        <li><b>Library</b> -: react js,react-router-dom,axios,redux</li>
        <li><b>Tools</b>   -: vscode,github,vite </li>
        <li><b>Command</b> -: cmd,powershell,git,node</li>
        <li><b>Skills</b>  -: problem solving ,quick learner,team work,communication,discipline</li>

      </ul>
    </div>
  )
}

export default Details
