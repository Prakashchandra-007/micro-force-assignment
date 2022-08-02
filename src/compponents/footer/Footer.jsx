import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="page2">
        <h1 className="button">Page 2 &gt; </h1>
      </Link>
    </div>
  );
};

export default Footer;
