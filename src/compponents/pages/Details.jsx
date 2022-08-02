import React from "react";
import { Link } from "react-router-dom";
import news from "../../helper/news";
import "./page2.css";
import { useDispatch, useSelector } from "react-redux";
function Details() {
  const dispatch = useDispatch();
  const paragraph = news.newsData.split(".");
  const d = useSelector((state) => state.restart);
  function handleClick() {
    console.log(d);
    dispatch({ type: "restarter" });
  }
  return (
    <div style={{padding:'20px',height:'100vh'}}>
      <h2>Page 2</h2>
      <div className="page2-container">
        <div>
          <h1>{news.newsHeading}</h1>
          <p style={{ textAlign: "left" }}>
            {paragraph.map((item) => {
              return <p>{item}.</p>;
            })}
          </p>
        </div>
      </div>
      
      <Link onClick={handleClick} to="/">
      <button id="back-btn">&lt;Back</button>
      </Link>
     
    </div>
  );
}

export default Details;
