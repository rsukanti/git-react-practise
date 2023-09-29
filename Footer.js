import React from "react";
import FooterLogo from "./images/footer-logo.svg";
import FbIcon from "./images/facebook-icon.svg";
import TwIcon from "./images/twitter-icon.svg";
import InIcon from "./images/linkedin-icon.svg";



import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-logo-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {" "}
              <a href="https://www.extnoc.com">
                <img
                  alt="Footer Logo"
                  src={FooterLogo}
                  className="wow fadeInUp"
                  data-wow-duration="1.2s"
                />
              </a>
            </div>
            <div className="col-md-8">
              <ul>
                <li className="wow fadeInUp" data-wow-duration="1.2s">
                  <a href="https://www.facebook.com/Ext-Noc-186600661863851" target="_blank" rel="noopener noreferrer">
                    <img alt="Facebook" src={FbIcon} className="Ftr-icon wow fadeInUp" data-wow-duration="1.2s" />
                  </a>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1.6s">
                  <a href="https://twitter.com/ext_noc" target="_blank" rel="noopener noreferrer">
                    <img alt="Twitter" src={TwIcon} className="Ftr-icon wow fadeInUp" data-wow-duration="1.6s" />
                  </a>
                </li>
                <li className="wow fadeInUp" data-wow-duration="2s">
                  <a href="https://www.linkedin.com/company/ext-noc" target="_blank" rel="noopener noreferrer">
                    <img alt="LinkedIn" src={InIcon} className="Ftr-icon wow fadeInUp" data-wow-duration="2s" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-nav-sec">
        <div className="container">
          <div className="footer-nav-main">
            <div className="footer-nav one">
              <h6>Sales</h6>
              <p>
                North America{" "}
                <span>
                  {" "}
                  <a href="tel:(732) 624-1900">(732) 624-1900</a>
                </span>
              </p>
              <p>
                India/Asia{" "}
                <span>
                  <a href="tel:91-40-45456565">+91-40-45456565</a>
                </span>
              </p>
              <p>
                Europe/MiddleEast/Africa{" "}
                <span>
                  <a href="tel:0118-907-6177">+0118-907-6177</a>
                </span>
              </p>
            </div>
            <div className="footer-nav two">
              <h6>Services</h6>
              <ul>
                <li>
                  <a href="https://www.extnoc.com/network-monitoring/">
                    NOC Services
                  </a>
                </li>
                <li>
                  <a href="https://www.extnoc.com/cyber-threat-monitoring/">
                    SOC Services
                  </a>
                </li>
                <li>
                  <a href="https://www.extnoc.com/24x7-help-desk-services/">
                    Help Desk Services
                  </a>
                </li>
                <li>
                  <a href="https://www.extnoc.com/managed-iot-services/">
                    Managed IoT Services{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.extnoc.com/global-smart-hands/">
                    Global Dispatch Services
                  </a>
                </li>
                <li>
                  <a href="https://www.extnoc.com/warranty-services/">
                    On-Demand Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav three">
              <h6>Company</h6>
              <ul>
                <li>
                  <a href="https://www.extnoc.com/about-us/">About Us</a>
                </li>
                <li>
                  <a href="https://www.extnoc.com/blog/">E-Pulse Blog</a>
                </li>
                <li>
                  <a href="https://www.extnoc.com/resources/">Resource Library</a>
                </li>
                <li>
                  <a href="https://www.extnoc.com/contact-us/">Contact Us</a>
                </li>
                <li>
                  <a href="https://www.extnoc.com/learn/">Learn</a>
                </li>
              </ul>
            </div>
            <div className="footer-nav four">
              <h6>Subscribe to Our Newsletter</h6>
              <p>to get Important News, Blog Posts & Inside Scoops</p>
              <form className="form-subscribe">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your Buisiness Email"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark b-radius-left-none"
                >
                  Subscribe
                </button>
              </form>
              <div className="footer-btns">
                <a
                  href="https://www.extnoc.com/request-pricing/"
                  className="bttn quote"
                >
                  Request a Quote
                </a>
                <a
                  href="https://www.extnoc.com/request-demo/"
                  className="bttn demo"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>© Copyright 2022 ExterNetworks Inc. | All Rights Reserved.</p>
          <p>
            <a href="https://www.extnoc.com/privacy-policy/">Privacy Policy</a>{" "}
            | <a href="https://www.extnoc.com/cookie-policy/"> Cookie Policy</a>{" "}
            |{" "}
            <a href="https://www.extnoc.com/terms-conditions/">
              Terms <span className="num">&</span> Conditions
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;