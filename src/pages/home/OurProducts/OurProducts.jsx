import React from 'react'
import './style.css'
import { LAMF, LAS, EMBEDED } from '../../../assets/Our-Products'

function OurProducts() {
  return (

    <div>
        <div className="our-products-container">

            <div className="main-box">

                <div className="text-box">
                    <div className="card"><h2>Our <span>Products</span></h2></div>
                    <div className="card"><p>Get quick cash without liquidating your <br /> investments!</p></div>
                </div>

                <div className="card-box">
                    <div className="sub-card">
                    <div className="card">
                        <div className="card-img">
                        <img src={LAMF} alt="LAMF" />
                        </div>
                        <div className="card-text">
                        <h3>LAMF</h3>
                        <p>Loan Against Mutual Funds</p>
                        </div>
                        <div className="card-btn">
                        <a href=""><button>Get Loan</button></a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                        <img src={LAS} alt="LAS" />
                        </div>
                        <div className="card-text">
                        <h3>LAS</h3>
                        <p>Loan Against Securities</p>
                        </div>
                        <div className="card-btn">
                        <a href=""><button>Get Loan</button></a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                        <img src={EMBEDED} alt="LAS" />
                        </div>
                        <div className="card-text">
                        <h3>Embedded LAS/LAMF</h3>
                        <p>Partner with us</p>
                        </div>
                        <div className="card-btn">
                        <a href=""><button>Get Loan</button></a>
                        </div>
                    </div>

                    </div>           
                </div>
            </div>

        </div>
    </div>
  )
}

export default OurProducts