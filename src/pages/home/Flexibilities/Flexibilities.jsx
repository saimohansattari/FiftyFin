import React from "react";
import { process } from "../constant";
import { useState, useEffect } from "react";
import "./style.css";

import {
  instant_1,
  cibil_2,
  flexible_3,
  getall_4,
} from "../../../assets/process-flow-imgaes";
import { flexibilities } from "./contants";

function Flexibilities() {
  const [currentCard, setCurrentCard] = useState(1);

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
              <img src={instant_1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flexibilities;
