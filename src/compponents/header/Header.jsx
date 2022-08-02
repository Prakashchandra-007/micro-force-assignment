import React from "react";
import "./header.css";
import Clock from "../clock/Clock";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Header = () => {
  const dispatch = useDispatch();
  const restart = useSelector((state) => state.restart);
  const manual = useSelector((state) => state.manual);
  function handleChange(e) {

    console.log(e.target.value);
    if (e.target.value === "center") {
      dispatch({ type: "switch", pos: "center" });
    } else if (e.target.value === "lowerRight") {
      dispatch({ type: "switch", pos: "lowerRight" });
    }
  }
  if (restart) {
    console.log("clike from header");
  }
  return (
    <div className="header">
      <div className="pos-container">
        <h4>Position: </h4>

        <label>
          <input
            onChange={handleChange}
            type="radio"
            name="pos"
            id="pos"
            value="center"
          />
          Center
        </label>

        <label>
          <input
            onChange={handleChange}
            type="radio"
            name="pos"
            id="Lower-right"
            value="lowerRight"
          />
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
