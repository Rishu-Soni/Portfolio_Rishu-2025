import React from "react";
import "./CSS/background.css";
import white_Grid from "./Assets/Images/grid_white.svg";
import black_Grid from "./Assets/Images/grid_Black.svg";

function Background() {
  return (
    <>
        <img src={white_Grid} className="gridImg" />
         <div className="intro_text">
        <h1 className="MyName">Rishu</h1>
        <h2>
          Currently a <p className="front_endText" > Front-end Developer </p> but, soon <p className="FullStack_endText" > Full stack web
          developer</p>
        </h2>
      </div>
    </>
  );
}

export default Background;
