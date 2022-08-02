import React from "react";
import FloatBlock from "../FloatBlock/FloatBlock";
import { useSelector, useDispatch } from "react-redux";
import "./display.css";

const DisplayArea = () => {
  let styleState = {
    display: "block",
  };
  const dispatch = useDispatch();
  const switchPos = useSelector((state) => state.switchPos);
  const manual = useSelector((state) => state.manual);
  if (manual) {
    styleState = {
      display: "block",
    };
  }
  if (switchPos === "center") {
    styleState = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  } else if (switchPos === "lowerRight") {
    styleState = {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    };
  }

  return (
    <div style={styleState} className="display-area">
      <FloatBlock />
    </div>
  );
};

export default DisplayArea;
