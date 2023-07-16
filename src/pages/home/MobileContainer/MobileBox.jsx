import React from 'react'
import './style.css'
import { useState, useEffect } from 'react';
import { portfolio } from '../constant';

function MobileBox() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect (() => {
        const Interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolio.length)
        },1000);
    
        return ()=> clearInterval(Interval);
    },[])

    const currentImage = portfolio[currentImageIndex];

    

  return (
    <div>
        <div className="mobile-container">
          <div className="portfolios">
            <div className="card">
                <p>Get <span>₹</span>  approved in <span>7</span>  Minutes!</p>
            </div>
            <div className="card">
              <div className="img-card" id="images-Port">
            
                <img src={currentImage.image} alt={currentImage.title} />

              </div>
  
            </div>
          </div>
      `</div>
    </div>
  )
}

export default MobileBox