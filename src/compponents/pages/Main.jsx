import React from "react";
import "./main.css";
import DisplayArea from "../display-area/DisplayArea";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {useDispatch,useSelector} from 'react-redux';
function Main() {
  const sd = useSelector((state)=>state.show)
  const dispatch = useDispatch();
  function hideBlock(e) {
    console.log(e.key);
    if(e.key==='Enter'){
      dispatch({type:"showBlock"});
      console.log(sd);
    }
    else if(e.key==='Escape'){
      
      dispatch({type:"hideBlock"});
      console.log(sd);
    }
    
  }
  return (
    <div className="main" tabIndex="-1" onKeyDown={hideBlock}>
      <Header />
      <DisplayArea />
      <Footer />
    </div>
  );
}

export default Main;
