import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.svg";
import {
  faBars,
  faTimes,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="navbar">
        <div className="nav-icon">
          <a href={"/"}>
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="list">
          <div className="nav-buttons">
            <a id="a" onClick={() => navigate("/")}>
              HOME
            </a>
            <a id="a" onClick={() => navigate("/careers")}>
              CAREERS
            </a>
            <a id="a" onClick={() => navigate("/partner")}>
              PARTNER
            </a>
            <a id="a" onClick={() => navigate("/partner")}>
              PARTNER
            </a>
            <a id="a" onClick={() => navigate("/about")}>
              ABOUT US
            </a>
            <a id="a" onClick={() => navigate("/blog")}>
              BLOG
            </a>
            <a id="a" onClick={() => navigate("/contact")}>
              CONTACT US
            </a>
            <a
              className="get-loan"
              href="https://play.google.com/store/apps/details?id=com.fiftyfin.app"
              target="_blank"
            >
              Get Loan &nbsp; <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
            </a>
          </div>
        </div>

        {/* <div>
            <label id='icon'> <FontAwesomeIcon icon={faBars} /> </label>

          </div> */}
      </div>
    </div>
  );
}

export default Navbar;
