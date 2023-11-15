import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoTwitter,
} from "react-icons/bi";

function Footer() {
  return (
    <footer>
      <div className="content-footer">
        <h2 className="subtitle">Join Club Lacoste</h2>
        <div className="content-register">
          <input type="text" />
          <button>Register</button>
        </div>
        <div className="content-socials">
          <ul className="list">
            <li>
              <i>
                <BiLogoInstagram />
              </i>
            </li>
            <li>
              <i>
                <BiLogoTiktok />
              </i>
            </li>
            <li>
              <i>
                <BiLogoFacebook />
              </i>
            </li>
            <li>
              <i>
                <BiLogoTwitter />
              </i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
