import React, { useEffect, useRef } from "react";
import "./CSS/background.css";
import white_Grid from "./Assets/Images/grid_white.svg";
import black_Grid from "./Assets/Images/grid_Black.svg";

function Background() {

  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!divRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const startTrigger = windowHeight * 0.3; 
      const endTrigger = windowHeight * 0.6;   
      const distance = endTrigger - startTrigger;

      let scale = 1;

      if (scrollY < startTrigger) {
        scale = 1;
      } else if (scrollY > endTrigger) {
        scale = 0;
      } else {
        const progress = (scrollY - startTrigger) / distance;

        scale = 1 - (progress * 1);
      }

      divRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <img src={white_Grid} className="gridImg" />
      <div className="intro_text" ref={divRef}>
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
