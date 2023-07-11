import React from "react";
import "./style.css";
import FiftyFin_mp  from '../../assets/FiftyFin_mp.mp4'
import { partners, investors, portfolio , process} from "./constant";
import { googleplay, appstore } from "../../assets/icons";
import { Fetch_1, lion_2, Getmoney_3 } from "../../assets/portfolioimges";
import { instant_1, cibil_2, flexible_3, getall_4 } from "../../assets/process-flow-imgaes";
import { LAMF, LAS, EMBEDED } from "../../assets/Our-Products";
import { blog_1, blog_2, blog_3 } from "../../assets/Our-blog";


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

      <div className="process-container">
         <div className="process-flow">
          {/* {process.map((Image) => {
            <div key={image.id}>
              <img src={Image.image} alt="" />
            </div>
          })} */}
            <img src={getall_4} alt="" />
         </div>
      </div>



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

      {/* interest calculator section */}


      <div className="blog-container">
        <div className="blog-text">
          <h2>Our <span>Blog</span></h2>
        </div>

        <div className="blog-cards">
          <div className="sub-card">
            <a href="https://blog.50fin.in/50fin-launch/">
              <div className="card">               
                <div className="blog-img">
                  <img src={blog_1} alt="Lunch" />
                </div>

                <div className="blog-disc">
                  <div className="blog-text"><span>50Fin – Loan Against Mutual  Funds: Launch</span></div>
                  <div className="blog-para">
                    Get Loan against your mutual funds Now! Use Code: LAUNCH to avail the offer on interest rate...
                  </div>
                  <div className="blog-link"><span>Read More »</span></div>
                </div>                
              </div>
            </a>
          </div>

          <div className="sub-card">
            <a href="https://blog.50fin.in/easy-way-to-meet-your-financial-leads/">
              <div className="card">               
                <div className="blog-img">
                  <img src={blog_2} alt="Lunch" />
                </div>

                <div className="blog-disc">
                  <div className="blog-text"><span>An Easy Way to Meet Your Financial Needs</span></div>
                  <div className="blog-para">
                   Loans against mutual funds have become a popular option for people who need ...                  </div>
                  <div className="blog-link"><span>Read More »</span></div>
                </div>                
              </div>
            </a>
          </div>

          <div className="sub-card">
            <a href="https://blog.50fin.in/eligibility-criteria-for-loan-against-mutual-funds/">
              <div className="card">               
                <div className="blog-img">
                  <img src={blog_3} alt="Lunch" />
                </div>

                <div className="blog-disc">
                  <div className="blog-text"><span>Eligibility Criteria for Loan Against Mutual Funds</span></div>
                  <div className="blog-para">
                   When financial needs arise, and you have invested in mutual funds, one option to consider is ...                  </div>
                  <div className="blog-link"><span>Read More »</span></div>
                </div>                
              </div>
            </a>
          </div>
          
        </div>
        <div className="blog-btn">
          <button>View more</button>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
