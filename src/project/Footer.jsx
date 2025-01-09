import React from 'react';
import './Footer.css';
import image from '../assets/image.png';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__head">
        <img src={image} alt="Logo" className="footer__logo" />
        <ul className="footer__social-icons">
          <li>
            <a href="https://twitter.com" aria-label="Twitter">
              <AiFillTwitterSquare size={20} />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" aria-label="Facebook">
              <MdFacebook size={20} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-body">
        <div className="about">
          <p><b>Get to Know Us</b></p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Blog</p>
        </div>
        <div className="social">
          <p><b>Connect with Us</b></p>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="Money">
          <p><b>Make Money with Us</b></p>
          <p>Sell on Our Platform</p>
          <p>Become on Affiliate</p>
          <p>Advertise Your products</p>
        </div>
        <div className="help">
          <p><b>Let Us Help You</b></p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Help</p>
        </div>
      </div>
      <div className="foot">&#9400; 2024 ACME Company. All rights reserved</div>
    </div>
  );
}

export default Footer;
