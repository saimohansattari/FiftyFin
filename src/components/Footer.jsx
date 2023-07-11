import React from 'react'
import logo from '../assets/logo.svg'
import { googleplay, appstore, Insta, Facebook, Linkedin, Twitter, Youtube } from "../assets/icons";




function Footer() {


  return (
    <div>

        <div className="footer">
            <div className="footer-sub">
                <div className="footer-cards">
                    <div className="card">
                        <div className="logo-img">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                    <div className="card">
                        <button >
                            <a href='https://play.google.com/store/apps/details?id=com.fiftyfin.app' target="_blank">
                                <img src={googleplay} alt="googleplay" />
                            </a>
                        </button>
                  
                    </div>
                    <div className="card">
                        <button >
                            <a href='https://apps.apple.com/in/app/50fin/id1669039122' target="_blank">
                            <img src={appstore} alt="Playtore" />
                            </a>
                        </button>
                    </div>
                    <div className="card">
                        <div className="social-accounts">
                            <a href="https://www.facebook.com/50fin" target='_blank'>
                                <img src={Facebook} alt="" />
                            </a>
                            <a href="https://www.instagram.com/50fin/" target='_blank'>
                                <img src={Insta} alt="" />
                            </a>
                            <a href="https://twitter.com/50fintech" target='_blank'>
                                <img src={Twitter} alt="" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCCL9zn840EJ5qCC4m-jIkjA" target='_blank'>
                                <img src={Youtube} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/50fin/" target='_blank'>
                                <img src={Linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                

                <div className="footer-cards">
                    <div className="card"><span>Company</span></div><br />
                    <div className="card"><p>Careers</p></div>
                    <div className="card"><p>About us</p></div>
                    <div className="card"><p>Blog</p></div>
                    <div className="card"><p>Patner with us</p></div>
                </div>
                <div className="footer-cards">
                    <div className="card"><span>Resources</span></div><br />
                    <div className="card"><p>Privacy Policy</p></div>
                    <div className="card"><p>Terms of Services</p></div>
                   
                </div>
                <div className="footer-cards">
                    <div className="card"><span>Help & Support</span></div><br />
                    <div className="card"><p>FAQs</p></div>
                    <div className="card"><p>Contact Us</p></div>

                </div>
                <div className="footer-cards">
                    <div className="card"><span>Contact us</span></div><br />
                    <div className="card"><p>hello@50fin.in</p></div>
                    <div className="card"><p>+91 96064 56105</p></div>
                    <div className="card"><p>4th Floor, <br /> MSR Garuda Building, <br /> Inside MS Ramaiah Campus, <br /> Mathikere, Bengaluru, <br /> Karnataka - 560054</p></div>

                </div>

            </div>
            <br />
            <hr  />
            <div className="footer-copy">
                <div className="copy-rights">
                    <p>©2023 50Fin.All Rights Reserved | <span>Terms and Conditions</span>  | <span>Privacy Policy</span> </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer