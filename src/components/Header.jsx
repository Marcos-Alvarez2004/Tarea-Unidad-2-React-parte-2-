import React from "react";
import Logo from "../images/logo.png";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="content-header">
        <div className="content-logo">
          <Link to="/">
            <img className="logo" src={Logo} alt="" />
          </Link>
        </div>
        <div className="content-support">
          <BiSupport />
          <p className="text-support">Support: +123456789</p>
        </div>
      </div>

      <nav className="menu">
        <ul className="list">
          <li className="items">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="items">
            <Link to="/shop" className="link">
              Shop
            </Link>
          </li>
          <li className="items">
            <Link to="/aboutUs" className="link">
              About Us
            </Link>
          </li>
          <li className="items">
            <Link to="/news" className="link">
              News
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
