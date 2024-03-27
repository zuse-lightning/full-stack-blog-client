import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
        <img src={Logo} alt="" />
        <span>Made with UNBRIDLED RAGE and <b>React.js</b>.</span>
    </footer>
  );
};

export default Footer;