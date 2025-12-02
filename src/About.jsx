import React, { useEffect, useRef } from "react";
import myIMG from "./Assets/Images/me.png";
import "./CSS/About.css";

import HTML_logo from "./Assets/Images/skills/html_logo.png";
import CSS_logo from "./Assets/Images/skills/css_logo.png";
import JavaScript_logo from "./Assets/Images/skills/javascript_logo.png";
import React_logo from "./Assets/Images/skills/react_logo.png";

import C_logo from "./Assets/Images/skills/c_logo.png";
import CPP_logo from "./Assets/Images/skills/c++_logo.png";
import Java_logo from "./Assets/Images/skills/java_logo.png";
import Python_logo from "./Assets/Images/skills/python_logo.png";

function About() {
  // 1. Create refs to access DOM elements safely
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  // 2. Use useEffect to run code ONLY after the component mounts
  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;

    // Safety check: if elements aren't found, stop here
    if (!track || !container) return;

    // --- VARIABLES (Moved inside useEffect) ---
    const speed = 2;
    let currentPosition = 0;
    let isDragging = false;
    let startX = 0;
    let lastX = 0;
    let isHovered = false;
    let animationId; // To store the requestAnimationFrame ID for cleanup
    let singleSetWidth = 0;

    // --- CLONING LOGIC ---
    // We check a data attribute to ensure we don't clone twice (React StrictMode fix)
    if (!track.getAttribute("data-cloned")) {
      const originalItems = Array.from(track.children);
      originalItems.forEach((item) => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });
      track.setAttribute("data-cloned", "true");
    }

    // --- CALCULATE DIMENSIONS ---
    function calculateDimensions() {
      // We assume half the children are originals, half are clones
      const originalItemCount = track.children.length / 2;
      const firstClone = track.children[originalItemCount];
      if (firstClone) {
        singleSetWidth = firstClone.offsetLeft;
      }
    }

    // Run initially
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);

    // --- ANIMATION LOOP ---
    function animate() {
      if (!singleSetWidth) calculateDimensions();

      if (!isDragging && !isHovered) {
        currentPosition -= speed;
      }

      // Infinite scroll logic
      if (currentPosition <= -singleSetWidth) {
        currentPosition += singleSetWidth;
      }
      if (currentPosition > 0) {
        currentPosition -= singleSetWidth;
      }

      track.style.transform = `translate3d(${currentPosition}px, -50%, 0)`;

      // Save ID so we can cancel it later
      animationId = requestAnimationFrame(animate);
    }

    // Start animation
    animationId = requestAnimationFrame(animate);

    // --- MOUSE EVENTS ---
    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX;
      lastX = currentPosition;
      track.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 1;
      currentPosition = lastX + walk;
    };

    const handleMouseUp = () => {
      isDragging = false;
      track.style.cursor = "grab";
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      isDragging = false;
      track.style.cursor = "grab";
    };

    // --- TOUCH EVENTS ---
    const handleTouchStart = (e) => {
      isDragging = true;
      startX = e.touches[0].pageX;
      lastX = currentPosition;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 1;
      currentPosition = lastX + walk;
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    // Attach Listeners
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    container.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    // --- CLEANUP ---
    // This runs when the component is unmounted (removed from screen)
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", calculateDimensions);

      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);

      container.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []); // Empty dependency array [] means this runs once on load

  return (
    <section className="aboutSection">
      <div className="PhotoDiv">
        <img src={myIMG} alt="My_Photo" className="My_Photo" />
      </div>
      <div className="textDiv">
        <h2 className="About_title">About ME</h2>
        <div className="aboutPara">
          The name is <span className="highlight"> RISHU SONI</span> hoping to clear Btech
          undergraduate program till 2029.
        </div>
        <div className="aboutPara">
          A <span className="highlight">gen-Z with old school mindset</span>, and
          personality same as Millennials.
        </div>

        <h3 className="About_subtitle">The "Dedicated Craftsman" </h3>

        <div className="aboutPara">
          My dedication knows no clock{" "}
          <span className="highlight"> whether it's 4 PM or 4 AM</span>
        </div>
        <div className="aboutPara">
          I pour everything into my work, often losing track of time.{" "}
        </div>
        <div className="aboutPara">
          I ensure <span className="highlight">pixel perfect </span> and every
          commitment is honored.
        </div>

        <h3 className="About_subtitle">The "Growth-Driven MENACE"</h3>

        <div className="aboutPara">
          I am on my way to{" "}
          <span className="highlight">
            mastering the art of Front-End development
          </span>
          , for my journey toward becoming a Full Stack engineer.
        </div>
        <div className="aboutPara">
          For me getting it right matters{" "}
          <span className="highlight">more than </span> getting it done
          quickly.
        </div>

        <h3 className="About_subtitle skill_heading">SKILLS <p className="skillForYou_text" >(I got for YOU !!!)</p> </h3>

        {/* 3. Attach refs to the DOM elements */}
        <div className="about_Skills_container " ref={containerRef}>
          <div className="skills_track" ref={trackRef}>
            <span className=" skill">
              <img src={HTML_logo} alt="" className="skill_logo" />
              <p> HTML </p>
            </span>
            <span className=" skill">
              <img src={CSS_logo} alt="" className="skill_logo" />
              <p> CSS </p>
            </span>
            <span className=" skill">
              <img src={JavaScript_logo} alt="" className="skill_logo" />
              <p> JavaScript </p>
            </span>
            <span className=" skill">
              <img src={React_logo} alt="" className="skill_logo" />
              <p> React </p>
            </span>
            <span className=" skill">
              <img src={C_logo} alt="" className="skill_logo" />
              <p> C </p>
            </span>
            <span className=" skill">
              <img src={CPP_logo} alt="" className="skill_logo" />
              <p> C++ </p>
            </span>
            <span className=" skill">
              <img src={Java_logo} alt="" className="skill_logo" />
              <p> Java </p>
            </span>
            <span className=" skill">
              <img src={Python_logo} alt="" className="skill_logo" />
              <p> Python </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;