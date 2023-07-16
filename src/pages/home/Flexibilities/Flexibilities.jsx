import React from 'react'
import { process } from '../constant';
import { useState, useEffect } from 'react';
import './style.css'

import { instant_1 } from '../../../assets/process-flow-imgaes';



function Flexibilities() {

    // const [currentimageIndex, setCurrentimageIndex] = useState(0);


    
    // useEffect (() => {
    //     const interval = setInterval(() => {
    //     setCurrentimageIndex((prevIndex) => (prevIndex +1) % process.length)
    //     },1200);

    //     return ()=> clearInterval(interval);
    // },[])

    // const currentimage = process[currentimageIndex];


  return (
    <div>
        <div className="process-container">
         <div className="process-flow">
            {/* <img src={currentimage.image} alt={currentimage.title} /> */}

            <div className="text-cards">
              <div className="card" id='active'>
                <h1>Instant Loan Approval</h1>
                <p>7 mins Approval, Disbursal in 2 working hours.</p>
              </div>

              <div className="card" id='active'>
                <h1>No Cibil Check</h1>
                <p>Worried about Cibil? Relax! Take a loan.</p>
              </div>

              <div className="card" id='active'>
                <h1>Flexible Tenure</h1>
                <p>Close loan at your will, with no pre-closure fee.</p>
              </div>

              <div className="card" id='active'>
                <h1>Get All In One</h1>
                <p>A truly Secured, Easy, Digital and Transparent.</p>
              </div>
             
            </div>
            
            <div className="images">
              <div className="image-card">
                <img src={instant_1} alt="" />
              </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Flexibilities