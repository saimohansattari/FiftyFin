import React from 'react'
import './style.css'
import { useState,useEffect } from 'react'
import FiftyFin_mp from '../../../assets/FiftyFin_mp.mp4'
import { googleplay, appstore } from '../../../assets/icons'

function VedioContainer() {
    const Text = ["No Documentation", "No CIBIL Check", "2 hour Disbursal"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState(Text[currentIndex]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % Text.length);
      }, 1100);
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      setCurrentText(Text[currentIndex]);
    }, [currentIndex, Text]);
  
  
  return (
    <div>
        <div className="container-1">
            <div className="framer">
                <div className="main-cards">
                    <div className="card-sub">
                    <h2>
                        Loans Against &nbsp; <span>Mutual Funds</span>
                    </h2>
                    </div>
                    <div className="card-sub">
                    <p className="p1">
                        <span>at just 1% per month</span>
                    </p>
                    </div>
                    <div className="card-sub">
                        <p className="p2">
                            Use Referral code&nbsp;<span>LAUNCH</span>&nbsp; get &nbsp;<span>1%</span> &nbsp;
                            
                            OFF on your interest
                        </p>
                    </div>
                    <br />
                    <div className="card">
                    <div className="scroll-text">
                        <p><span>{currentText}</span></p>
                    </div>             
                    </div>
                    <br />
                    <div className="card">
                    <div className="card-btn">
                        <button >
                            <a href='https://play.google.com/store/apps/details?id=com.fiftyfin.app' target="_blank">
                            <img src={googleplay} alt="googleplay" />
                            </a>
                        </button>
                        <button >
                            <a href='https://apps.apple.com/in/app/50fin/id1669039122' target="_blank">
                            <img src={appstore} alt="Playtore" />
                            </a>
                        </button>
                    </div>
                    </div>
                </div>

                <div className="card ">
                    <div className="card-vedio">
                    <video  controls muted>
                        <source src={FiftyFin_mp} type="video/mp4"  />
                    </video>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default VedioContainer

