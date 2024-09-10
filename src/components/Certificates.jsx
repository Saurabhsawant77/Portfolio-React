import React from 'react'
import {certificate} from '../assets/certficates'

function Certificates() {
  return (
    <>
    <div className="main-certificateContainer bg-white p-4">
    <h1 className="text-center text-3xl mb-4">Certifications</h1>
    {/* <div className=" "> */}
    <div className="relative mx-auto flex justify-center gap-6 m-4 w-full">
        
            {certificate.map((elements) => (
                
                <div className="c1 w-full bg-slate-400 p-4 rounded-lg  hover:bg-gray-600 text-black hover:text-white ">
                <img class="h-64 w-full object-cover rounded-md" src={elements.image}/> 
                <h2 className="text-xl  ">{elements.title}</h2>
                <p className="text-sm  ">{elements.description}</p>
                </div>
                
            ))}
            
            
    </div> 
    </div>
    </>
  )
}

export default Certificates