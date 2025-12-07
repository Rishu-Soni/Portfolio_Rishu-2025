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

      // Calculate start and end points in pixels
      const startTrigger = windowHeight * 0.3; // 50vh
      const endTrigger = windowHeight * 0.6;   // 80vh
      const distance = endTrigger - startTrigger;

      let scale = 1;

      if (scrollY < startTrigger) {
        // Before 50vh: Keep original size
        scale = 1;
      } else if (scrollY > endTrigger) {
        // After 80vh: Stick to 20% size
        scale = 0.2;
      } else {
        // Between 50vh and 80vh: Calculate percentage
        const progress = (scrollY - startTrigger) / distance;

        // Interpolate: We want to go FROM 1 TO 0.2
        // Formula: startValue - (progress * (startValue - endValue))
        scale = 1 - (progress * 0.8);
      }

      // Apply the transformation directly to the DOM node
      divRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll);

    // Initial call to set state on load
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
