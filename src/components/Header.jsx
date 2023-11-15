import React from "react";
import Logo from "../images/logo.png";
import { BiSupport } from "react-icons/bi";

function Header() {
  return (
    <header>
      <div className="content-header">
        <div className="content-logo">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="content-support">
          <BiSupport />
          <p className="text-support">Support: +123456789</p>
        </div>
      </div>

      <nav className="menu">
        <ul className="list">
          <li className="items">
            <p className="link">Home</p>
          </li>
          <li className="items">
            <p className="link">Shop</p>
          </li>
          <li className="items">
            <p className="link">About Us</p>
          </li>
          <li className="items">
            <p className="link">News</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
