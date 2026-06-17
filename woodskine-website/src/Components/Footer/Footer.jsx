import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";



export default function Footer() {
  return (
    
    <footer className="footer">



      <div className="footer-container">

        {/* Shop */}

        <div className="footer-column">
          <h3>SHOP</h3>

          <a href="#">All products</a>
          <a href="#">Ella</a>
          <a href="#">Iris</a>
          <a href="#">Marthe</a>
        </div>

        {/* Information */}

        <div className="footer-column">
          <h3>INFORMATION</h3>

          <a href="#">Mission</a>
          <a href="#">Know-how</a>
          <a href="#">Designer</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        {/* Legals */}

        <div className="footer-column">
          <h3>LEGALS</h3>

          <a href="#">Terms and conditions</a>
          <a href="#">Privacy policy</a>
          <a href="#">Delivery and returns</a>
        </div>

        {/* Follow */}

        <div className="footer-column">
          <h3>FOLLOW US</h3>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FiInstagram />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>
        </div>

        {/* Subscribe */}

        <div className="footer-column subscribe">

          <h3>SUBSCRIBE</h3>

          <p>
            Subscribe now to receive special offers reserved to our subscribers.
          </p>

          <div className="subscribe-box">

            <input
            className="inp-box"
              type="email"
              placeholder="Your e-mail"
            />

            <button>
              <HiOutlineArrowRight />
            </button>

          </div>

        </div>

      </div>
<p className="last-para">COPYRIGHT © 2026 . WOODSKINE SWITZERLAND</p>
    </footer>
  );
}