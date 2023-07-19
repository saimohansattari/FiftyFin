
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Loan_amount_image from '../../../assets/Loan_amount_image.png';

function Interest() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const interestRate = 1; 
  const tenure = 12;
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [yearlyInterest, setYearlyInterest] = useState(0);


  const handleRangeChange = (event) => {
    setLoanAmount(parseInt(event.target.value));
  };

  useEffect(() => {
    // calculate monthly payment
    const interest = (loanAmount * interestRate) / 100;
    const monthlyPayment = (loanAmount / 100) * interestRate;
    setMonthlyPayment(monthlyPayment.toFixed(2));

    // calculate yearly interest
    const yearlyInterest = interest * 12;
    setYearlyInterest(yearlyInterest.toFixed(2));
  }, [loanAmount]);

  
  const chartData = {
    labels: ['Loan Amount', 'Yearly Interest'],
    datasets: [
      {
        data: [loanAmount, yearlyInterest],
        backgroundColor: ['#24feee', '#828dff'],
        hoverBackgroundColor: ['#30feee', '#36A2EB'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    cutout: '55%',
    rotation: 0,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: true, 
      },
    },
  };

  

  

  return (
    <div>
      <div className="interest-container">
        <div className="interest-text">
          <span>Interest Calculator  </span>
          
        </div>
        <div className="interest-sub-cards">
          <div className="interest-cards">
            <div className="loan-amount">
              <label>Loan Amount</label>
              <span>₹ {loanAmount}</span>
            </div>
            <div className="slider">
              <input
                type="range"
                min={2500}
                max={500000}
                value={loanAmount}
                onChange={handleRangeChange}
              />
            </div>
            <div className="interest-rate">
              <p>Interest Rate</p>
              <p>1% p.m (12% p.a)</p>
            </div>
            <div className="tenure">
              <p>Tenure</p>
              <p>{tenure} Months</p>
            </div>
            <div className="monthly-payment">
              <div className="card">
                <div className="text">Monthly Payment Due</div>
                <div className="amount">₹ {monthlyPayment}</div>
              </div>
            </div>
          </div>

          <div className="interest-cards">
            <div className="Loan-image">
              <div className="pie-chart">
                <Doughnut data={chartData} options={chartOptions} />
              </div>         
             {/* <Pie data={chartData} options={chartOptions} />      */}
            </div>

            <div className="img-text-cards">
              <div className="img-text">
                <p>Loan Amount</p>
                <p>₹ {loanAmount}</p>
              </div>
              <div className="img-text">
                <p>Yearly Interest</p>
                <p>₹ {yearlyInterest}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interest;
