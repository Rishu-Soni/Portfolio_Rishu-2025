import React from "react";
import myIMG from "./Assets/Images/me.png";
import "./CSS/About.css";

function About() {
  return (
    <section className="aboutSection">
      <div className="PhotoDiv">
        <img src={myIMG} alt="My_Photo" className="My_Photo" />
      </div>
      <div className="textDiv">
        <h2 className="About_title">About ME</h2>
        <p className="aboutPara">
          The name is <p className="highlight"> RISHU SONI</p> from Utter
          pradesh, India. hoping to clear Btech undergraduate program till 2029.
        </p>
        <p>
          A <p className="highlight">gen-Z with old school mindset</p>, and
          personality same as Millennials.
        </p>


        <h3 className="About_subtitle">The "Dedicated Craftsman" </h3>

        <p className="aboutPara">
          My dedication knows no clock <p className="highlight"> whether it's 4 PM or 4 AM</p>, I don't stop
          until the code is clean and the problem is solved.
        </p>
        <p className="aboutPara">
          I pour everything into my work, often losing track of time. </p>
        <p>I ensure  <p className="highlight">pixel perfect  </p> and every commitment is honored.
        </p>

        <h3 className="About_subtitle">The "Growth-Driven MENACE"</h3>


        <p className="aboutPara">
          Currently, I am <p className="highlight">
            mastering the art of Front-End development
          </p>
          , laying a solid foundation for my journey toward becoming a Full
          Stack engineer.
        </p>
        <p className="aboutPara">
         For me  getting it right matters <p className="highlight">more than </p> getting it done quickly.
        </p>
        <p className="Appeal_para"> I
          am looking to align with teams that appreciate that kind of relentless
          focus.<p className="highlight_appeal">  If you need a developer like me let's discuss what we can achieve.</p></p>
      </div>
    </section>
  );
}

export default About;
