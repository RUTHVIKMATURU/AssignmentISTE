import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <>
      <nav className="header">
        <div className="logo">
          <p>A C M E</p>
        </div>
          <ul className="header-buttons">
            <button>Home</button>
            <button>About</button>
            <button>SignUp</button>
            <button>Help</button>
            <button className="Shop-Button">
              <FaShoppingCart/>
            </button>
          </ul>
      </nav>
    </>
  );
}

export default Header;
