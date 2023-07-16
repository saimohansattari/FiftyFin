import React from 'react'
import { useState } from 'react'
import './style.css'
import Loan_amount_image from '../../../assets/Loan_amount_image.png'

function Interest() {

  const [value, setValue] = useState(100000);


  const handleRangeChange = (event) => {
    setValue(parseInt(event.target.value));

    
  };

 


  




  return (
    <div>
    
      <div className="interest-container">
        <div className="interest-text"><span>Interest Calculator</span></div>
        <div className="interest-sub-cards">
          <div className="interest-cards">
            <div className="loan-amount">
              <label>Loan Amount</label>
              <span>₹ {value}</span>
            </div>
            <div className="slider">
              <input
                type="range"
                min={2500}
                max={500000}
                value={value}
                onChange={handleRangeChange}
              />            
            </div>
            <div className="interest-rate">
              <p>Interest Rate</p>
              <p>1% p.m (12% p.a)</p>
            </div>
            <div className="tenure">
              <p>Tenure</p>
              <p>12 Months</p>
            </div>
            <div className="monthly-payment">
              <div className="card">
                <div className="text">Monthly Payment Due</div>
                <div className="amount"> ₹ 1000</div>
              </div>
            </div>
          </div>

          <div className="interest-cards">
            <div className="Loan-image">
              <img src={Loan_amount_image} alt="interest" />
            </div>
            <div className="img-text-cards">
              <div className="img-text">
                <p>Loan Amount</p>
                <p> ₹ {value}</p>
              </div>
              <div className="img-text">
                <p>Yearly Interest</p>
                <p> ₹ 12000</p>
              </div>
            </div>
            
              
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Interest