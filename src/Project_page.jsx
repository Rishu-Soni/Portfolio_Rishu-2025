import React, { useState, useMemo, useRef } from "react";
import "./CSS/Project_page.css";

// --- Image Imports ---
import chess from "./Assets/Images/projects/chess.png";
import calculator from "./Assets/Images/projects/calculator.png";
import password_generator from "./Assets/Images/projects/password_generator.png";
import pre_portfolio from "./Assets/Images/projects/pre_portfolio.png";
import toDo_list from "./Assets/Images/projects/toDo_list.png";

// (Note: Unused skill logos are preserved here in case you need them later)
import HTML_logo from "./Assets/Images/skills/html_logo.png";
import CSS_logo from "./Assets/Images/skills/css_logo.png";
import JavaScript_logo from "./Assets/Images/skills/javascript_logo.png";
import React_logo from "./Assets/Images/skills/react_logo.png";

// --- 1. RANDOM DOTS COMPONENT (The Animation Layer) ---
const RandomDots = ({ isRevealed, origin, onClose }) => {
  // Optimization: Generate dots only once, not on every render
  const dots = useMemo(() => {
    return Array.from({ length: 600 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
  }, []);

  return (
    <div
      className="projectBackgroung_img"
      style={{
        // Positioning: 'fixed' takes it out of the flow to cover the screen
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 100, // Sits on top of everything
        overflow: "hidden",
        backgroundColor: "black", // Fallback color
        background:
          "radial-gradient(circle at 70% 70%, hsl(0, 0%, 12%), hsl(0, 0%, 8%), hsl(0, 0%, 4%), hsl(0, 0%, 0%))",

        // THE ANIMATION MAGIC:
        // We create a viewing circle. 
        // If hidden: Radius is 0px (invisible).
        // If revealed: Radius is 150% (covers the whole screen).
        // The center of the circle is set to the button click coordinates (origin.x, origin.y).
        clipPath: isRevealed
          ? `circle(150% at ${origin.x}px ${origin.y}px)`
          : `circle(0px at ${origin.x}px ${origin.y}px)`,

        transition: "clip-path 1.2s ease-in-out",

        // Ensure clicks pass through when hidden, but are captured when revealed
        pointerEvents: isRevealed ? "auto" : "none",
      }}
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          style={{
            position: "absolute",
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0 0 2px white", // Adds a tiny glow
          }}
        />
      ))}

      {/* Optional: A way to close the overlay */}
      {isRevealed && (
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "transparent",
            border: "1px solid white",
            color: "white",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          Close X
        </button>
      )}
    </div>
  );
};

// --- 2. PROJECT CARD COMPONENT ---
// Renamed to PascalCase (ProjectCard) for React standards
function ProjectCard({cardref, cardIndex, image, projectName = "Untitled", skillsRequired = ["HTML", "CSS", "JavaScript"] }) {
  return (
    <div
      className="Project_card"
      style={{
        // Using cardIndex (formerly Nth_card) for stacking logic
        top: `${cardIndex * 8}px`,
        // NOTE: Ensure your CSS .Project_card has "transform: translateX(-50%)" 
        // for this left positioning to center correctly.
        left: `${cardIndex + 50}%`,
        zIndex: cardIndex,
      }}
      ref={cardref}
    >
      <h2 className="projectName">{projectName}</h2>
      <img src={image} alt={projectName} className="project_img" />
      <ul className="skillTag_container">
        {skillsRequired.map((skill, index) => (
          <li className="skillTag" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- DATA ARRAY ---
const projects = [
  { id: 1, image: toDo_list, projectName: "ToDo list" },
  { id: 2, image: pre_portfolio, projectName: "Portfolio", skillsRequired: ["HTML", "CSS", "React"] },
  { id: 3, image: calculator, projectName: "Calculator" },
  { id: 4, image: password_generator, projectName: "New password", skillsRequired: ["HTML", "CSS", "React"] },
  { id: 5, image: chess, projectName: "Chess" },
];

function handleClick(cardref) {
  if (cardref.current) {
    // Get current z-index (default to 0 if not set)
    const currentZ = parseInt(
      window.getComputedStyle(cardref.current).zIndex || "0",
      10
    );

    // Increment by 150
    cardref.current.style.zIndex = currentZ + 150;
  }
}

// --- 3. MAIN PAGE COMPONENT ---
function ProjectPage() {
  // State to track if the background is expanded
  const [isRevealed, setIsRevealed] = useState(false);
  // State to track where the mouse clicked (X and Y coordinates)
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  // Function called when "See ALL" is clicked
  const handleReveal = (e) => {
    // 1. Get the mouse coordinates relative to the viewport
    const x = e.clientX;
    const y = e.clientY;
    const cardref = useRef(null);

    handleClick(cardref);

    // 2. Save coordinates and trigger animation
    setClickPos({ x, y });
    setIsRevealed(true);
  };

  const handleClose = () => {
    setIsRevealed(false);
  };

  return (
    <section className="project_section">
      {/* Fixed HTML: Changed <p> to <span> inside <h2> */}
      <h2 className="project_title">
        Featured <span className="project_text">PROJECTS</span>
      </h2>

      <div className="project_space">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            cardIndex={index} // Renamed prop for clarity
            image={project.image}
            projectName={project.projectName}
            skillsRequired={project.skillsRequired}
          />
        ))}
      </div>

      <button className="project_button" onClick={handleReveal}>
        See ALL <span className="arrow_icon">→</span>
      </button>

      {/* Render the dots component here. It is always in the DOM, just hidden/clipped. */}
      <RandomDots
        isRevealed={isRevealed}
        origin={clickPos}
        onClose={handleClose}
      />
    </section>
  );
}

export default ProjectPage;