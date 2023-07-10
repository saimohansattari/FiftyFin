import React from "react";
import "./style.css";
import { partners, investors, portfolio } from "./constant";
import { googleplay, appstore } from "../../assets/icons";
import { Fetch_1, lion_2, Getmoney_3 } from "../../assets/portfolioimges";
import FiftyFin_mp  from '../../assets/FiftyFin_mp.mp4'




function Home() {
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
                <p><span>NO Documentation</span></p>
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
              <video  controls>
                <source src={FiftyFin_mp} type="video/mp4" />
              </video>

            </div>
          </div>
        </div>
      </div>

      <div className="container-2">
        <div className="scrol-card">
          <div className="text">
            <h2>
              Our <span>Partners</span>
            </h2>
          </div>
          <div className="scroll-items">
            <div className="images">
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

      <div className="container-2">
        <div className="scrol-card">
          <div className="text">
            <h2>
              Our <span>Investors</span>
            </h2>
          </div>
          <div className="scroll-items">
            <div className="persons">
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

      <div className="mobile-container">
          <div className="portfolios">
            <div className="card">
                <p>Get <span>₹</span>  approved in <span>7</span>  Minutes!</p>
            </div>
            <div className="card">
              <div className="img-card">
                {/* {portfolio.map((Image)=>{
                  <div key={Image.id}>
                    <img src={Image.image} alt="" />
                  </div>
                })} */}
                <img src={lion_2} alt="" />

              </div>
  
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
