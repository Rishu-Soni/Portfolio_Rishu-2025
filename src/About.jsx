import React from "react";
import myIMG from "./Assets/Images/me.png";
import "./CSS/About.css";

function About() {
  return (
    <section className="aboutSection">
      <div className="aboutDiv">
        <div className="PhotoDiv">
          <img src={myIMG} alt="My_Photo" className="My_Photo" />
        </div>
        <div className="textDiv">
          <h2 className="About_title">About ME</h2>
          <p className="aboutPara">
            The name is <p className="highlight"> RISHU SONI</p> hoping to clear Btech undergraduate program till 2029.
          </p>
          <p className="aboutPara">
            A <p className="highlight">gen-Z with old school mindset</p>, and
            personality same as Millennials.
          </p>


          <h3 className="About_subtitle">The "Dedicated Craftsman" </h3>

          <p className="aboutPara">
            My dedication knows no clock <p className="highlight"> whether it's 4 PM or 4 AM</p>
          </p>
          <p className="aboutPara">
            I pour everything into my work, often losing track of time. </p>
          <p className="aboutPara">I ensure  <p className="highlight">pixel perfect  </p> and every commitment is honored.
          </p>

          <h3 className="About_subtitle">The "Growth-Driven MENACE"</h3>


          <p className="aboutPara">
            I am on my way to <p className="highlight">
              mastering the art of Front-End development
            </p>
            , for my journey toward becoming a Full
            Stack engineer.
          </p>
          <p className="aboutPara">
            For me  getting it right matters <p className="highlight">more than </p> getting it done quickly.
          </p>
        </div>
      </div>
      <div className="about_Skills ">

      </div>
    </section>
  );
}

export default About;
