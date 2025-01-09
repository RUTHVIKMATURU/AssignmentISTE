import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="logo-img" src={logo} alt="Logo" width={40} height={40} />
          <p>A C M E</p>
        </div>
        <ul className="header-buttons">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
          <li>SignUp</li>
        </ul>
        <button className="Shop-Button">
          <FaShoppingCart size={30} />
        </button>
      </div>
    </>
  );
}

export default Header;
