import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import pdata from '../projects/projectitem/projectData'
import './Pdetailspage.css'
const Pdetailspage = () => {
    const {id}=useParams()
    let [data,setData]=useState(pdata)
    let filterData=data.filter((f)=> {return f.id == id})
    let {title,image,plink}=filterData[0]
  return (
    <div className=''>
      <div className="container p-detailspage d-flex">
            <div className="pdetails-img rounded p-3 mb-5" >
          
           <div className=" p-img " >
                  <Link to={plink}>
                  <img src={image}alt=""  className='rounded p-i'/>
                  </Link>
                  </div>
                  
          
               
                <div className="p-title ">
                    <p className='mt-2 text-center text-white'>{title}</p>
                </div>

            </div>
            <div className="p-description ">
          <h3 className='tpurple'> Description </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non iure ducimus nisi distinctio minus eos similique cum nobis voluptates ipsam.</p>
        </div>

        </div>

       
    </div>
  )
}

export default Pdetailspage
