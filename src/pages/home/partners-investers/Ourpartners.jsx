import React from 'react'
import './style.css'
import { partners } from '../constant'

function Ourpartners({speed = 12000,}) {
  return (
    <div>
        <div className="container-2">
            <div className="scrol-card">
            <div className="text">
                <h2>
                Our <span>Partners</span>
                </h2>
            </div>
            <div className="scroll-items">
                <div className="images " style={{ "--speed": `${speed}ms`}}>
                {partners.map((partner) => (
                    <div key={partner.id} className="image">
                    <a href={partner.url} target="_blank">
                        <img src={partner.image} alt="Bajaj" />
                    </a>
                    </div>
                ))}
                </div>

              
            
            </div>
            </div>
        </div>
    </div>
  )
}

export default Ourpartners