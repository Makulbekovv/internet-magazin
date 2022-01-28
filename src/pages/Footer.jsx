import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container"></div>
      <div>
        <div className="ft-main">
          <div className="ft-main-item">
            <h2>
              {" "}
              <Link to="/newscard">Products</Link>
            </h2>
          </div>
          <div className="ft-main-item">
            <h2>
              <Link to="/cart">Cart</Link>
            </h2>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li>
                <a href="tel:+1234567890"> +1234567890 </a>
              </li>
              <li>
                <Link to="#">goldentime@gmail.com</Link>
              </li>
              <li>
                <Link to="#"></Link>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Society</h2>
            <div
              className="icons"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginLeft: "-8%",
              }}
            >
              <a href="https://www.instagram.com/">
                <Instagram />
              </a>
              <a href="https://www.twitter.com/">
                <Twitter />
              </a>
              <a href="https://www.Facebook.com/">
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/">
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>

        <div className="ft-legal">
          <ul className="ft-legal-list">
            <li>
              <Link to="#">GOLDENTIME</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>&copy; 2022 GOLDENTIME, LLC</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
