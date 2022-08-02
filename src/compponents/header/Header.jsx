import React from "react";
import "./header.css";
import Clock from "../clock/Clock";
import context from "../../context/index";
const Header = () => {
  return (
    <div className="header">
      <div className="pos-container">
        <h4>Position: </h4>

        <label>
          <input type="radio" name="pos" id="pos" value="center" />
          Center
        </label>

        <label>
          <input type="radio" name="pos" id="Lower-right" value="Lower-right" />
          Lower-right
        </label>
      </div>
      <div className="pos-container2">
        <h4 id="help-text">
          Press ESC key to hide the window, ENTER to show it again
        </h4>
        <Clock />
      </div>
    </div>
  );
};

export default Header;
