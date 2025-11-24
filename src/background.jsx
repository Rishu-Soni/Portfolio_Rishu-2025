import React from "react";
import "./CSS/background.css";
import grid from "./Assets/Images/grid.svg";

function Background() {
  return (
    <>
        <img src={grid} className="gridImg" />
         <div className="intro_text">
        <h1 className="MyName">Rishu Soni</h1>
        <h2>
          Currently a <p className="front_endText" > Front-end Developer </p> but, soon <p className="FullStack_endText" > Full stack web
          developer</p>
        </h2>
      </div>
    </>
  );
}

export default Background;
