import React from "react";
import { process } from "../constant";
import { useState, useEffect } from "react";
import "./style.css";

// import {
//   instant_1,
//   cibil_2,
//   flexible_3,
//   getall_4,
// } from "../../../assets/process-flow-imgaes";
import { flexibilities } from "./contants";

function Flexibilities() {
  const [currentCard, setCurrentCard] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCard === 4) {
        setCurrentCard(1);
      } else {
        setCurrentCard((prevIndex) => prevIndex + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentCard]);

  useEffect (() => {
    const Interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % process.length)
    },1000)

    return  ()=> clearInterval(Interval);
  },[])

  const CurrentImage = process[currentImage];



  return (
    <div>
      <div className="process-container">
        <div className="process-flow">
          <div className="text-cards">
            {flexibilities.map((flexibility) => (
              <div
                key={flexibility.id}
                className={`card ${
                  flexibility.id === currentCard ? "active" : ""
                }`}
              >
                <h1>{flexibility.title}</h1>
                <p>{flexibility.description}</p>
              </div>
            ))}
          </div>

          <div className="images">
            <div className="image-card">
            <img src={CurrentImage.image} alt={CurrentImage.title}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flexibilities;
