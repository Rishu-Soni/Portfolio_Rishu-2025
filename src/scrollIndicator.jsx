import React, { useRef, useEffect } from "react";
import "./CSS/ScrollIndicator.css"; // Make sure to import the CSS file!

function ScrollIndicator() {
  const scrollIndicator = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollIndicator.current) return;

      const scrollY = window.scrollY;
      
      // FIXED AMOUNT CONFIGURATION
      const fadeStart = 0;   // Start fading immediately
      const fadeEnd = 250;   // Completely invisible after 250px of scrolling

      let opacity = 1;

      if (scrollY <= fadeStart) {
        opacity = 1;
      } else if (scrollY >= fadeEnd) {
        opacity = 0;
      } else {
        // Calculate opacity between 1 and 0 based on scroll distance
        opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
      }

      scrollIndicator.current.style.opacity = `${opacity}`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-indicator" ref={scrollIndicator}>
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div className="arrow"></div>
    </div>
  );
}

export default ScrollIndicator;