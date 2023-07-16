import React from 'react'
import { investors } from '../constant'

function Ourinvestors({speed = 12000,}) {
  return (
    <div>
        <div className="container-2">
            <div className="scrol-card">
            <div className="text">
                <h2>
                Our <span>Investors</span>
                </h2>
            </div>
            <div className="scroll-items">
                <div className="persons" style={{"--speed": `${speed}ms`}}>
                    {investors.map((investor) => (
                        <a key={investor.id} href={investor.url} target="_blank">
                        <div className="card">
                            <div className="card-img">
                            <img src={investor.image} alt="Aniket" />
                            </div>
                            <div className="card-name">
                            <p>{investor.name}</p>
                            </div>
                            <div className="card-desig">
                            <p>{investor.designation}</p>
                            </div>
                            <div className="card-descrp">
                            <p>{investor.company}</p>
                            </div>
                        </div>
                        </a>
                    ))}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Ourinvestors