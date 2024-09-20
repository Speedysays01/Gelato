import React from 'react'
import MovingDivs from "./MovingDivs.jsx"
import "./GelatoConnect.css"

const GelatoConnect = () => {
  return (
    <div className="connectContainer">
         <MovingDivs className="movingDivs"/>

         <div className="info">
           <h5>For print Producers</h5>
           <h3>GelatoConnect</h3>
           <p>Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</p>
           <button className='connectBtn'>Learn More</button>
         </div>



    </div>
  )
}

export default GelatoConnect