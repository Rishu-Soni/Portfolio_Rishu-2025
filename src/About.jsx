import React from "react";
import myIMG from "./Assets/Images/me.png";
import "./CSS/About.css"

function About() {
  return (
    <section className="aboutSection">
      <div className="PhotoDiv">
        <img src={myIMG} alt="My_Photo" />
      </div>
      <div className="textDiv"></div>
    </section>
  );
}

export default About;
S;
