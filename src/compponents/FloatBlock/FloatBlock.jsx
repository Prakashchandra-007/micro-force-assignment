import React, { useState } from "react";
import "./float.css";
import { useSelector, useDispatch } from "react-redux";
function FloatBlock() {
  const dispatch = useDispatch();
  const [posi, setPosi] = useState({});
  let styles = {
    border: "3px solid #457ccd",
    display: "flex",
    // transformOrigin: 'top left',
    // transform: `translate(${posi.x}px, ${posi.y}px)`,
    top:`${posi.y}px`,
    left:`${posi.x}px`
  };
  const restart = useSelector((state) => state.restart);
  const show = useSelector((state) => state.show); //decide the bloack with none of block

  if (!show) {
    styles.display = "none";
  } else {
    styles.display = "block";
  }
  if (!restart) {
    styles.border = "none";
  } else {
    styles.border = "3px solid #457ccd";
  }

  function handleDrag(e) {
    e.preventDefault();
    setPosi({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <div
      style={styles}
      onDrag={handleDrag}
      className="floating-block"
      draggable="true"
    >
      FloatBlock
    </div>
  );
}

export default FloatBlock;
//
