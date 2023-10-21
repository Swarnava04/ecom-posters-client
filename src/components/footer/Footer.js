import React from "react";
import "./Footer.scss";
import creditCardImage from "../../assets/creditcardicons.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiTwotoneMail,
} from "react-icons/ai";
function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="content">
          <div className="footer-left">
            <h3 className="title">Follow Us</h3>
            <ul className="follow">
              <li className="hover-link">
                <AiFillLinkedin className="icon" />
              </li>
              <li className="hover-link">
                <AiFillInstagram className="icon" />
              </li>
              <li className="hover-link">
                <AiTwotoneMail className="icon" />
              </li>
              <li className="hover-link">
                <AiFillFacebook className="icon" />
              </li>
            </ul>
          </div>
          <div className="subfooter">
            <div className="credit-card-img">
              <img src={creditCardImage} alt="credit card" />
            </div>
            <p>© Copyright {new Date().getFullYear()}</p>
          </div>
          <div className="footer-right">
            <h3 className="title">Company</h3>
            <ul className="company">
              <li className="hover-link">Contact Us</li>
              <li className="hover-link">Privacy Policy</li>
              <li className="hover-link">Returns And Exchange Policy</li>
              <li className="hover-link">Shipping Policy</li>
              <li className="hover-link">Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
