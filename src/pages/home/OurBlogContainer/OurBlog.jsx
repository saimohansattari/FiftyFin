import React from 'react'
import './style.css'
import { blog_1,blog_2,blog_3 } from '../../../assets/Our-blog'

function OurBlog() {
  return (
    <div>
        
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
  )
}

export default OurBlog