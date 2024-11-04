import React from 'react'
import './Projectitem.css'
import { Link } from 'react-router-dom'
const Projectitem = ({p}) => {
    let {title,image,bgimg,id}=p
   
  
  return (
    <div>
        <div className="container">
            <div className="project-d rounded p-3 mb-5 " style={{backgroundImage:bgimg}}>
           <Link to={`/about/pdetailspage/${id}`}>
           <div className=" p-img ">
                    <img src={image}alt=""  className=' rounded p-i'/>
                </div>
           </Link>
               
                <div className="p-title ">
                    <p className='mt-2 text-center text-white'>{title}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projectitem