import React, { useState, useMemo } from "react";
import "./CSS/Project_page.css";

// --- Image Imports ---
// Ensure these paths match your folder structure exactly
import chess from "./Assets/Images/projects/chess.png";
import calculator from "./Assets/Images/projects/calculator.png";
import password_generator from "./Assets/Images/projects/password_generator.png";
import pre_portfolio from "./Assets/Images/projects/pre_portfolio.png";
import toDo_list from "./Assets/Images/projects/toDo_list.png";

// Unused imports kept as per your original file
import HTML_logo from "./Assets/Images/skills/html_logo.png";
import CSS_logo from "./Assets/Images/skills/css_logo.png";
import JavaScript_logo from "./Assets/Images/skills/javascript_logo.png";
import React_logo from "./Assets/Images/skills/react_logo.png";

// --- 1. RANDOM DOTS COMPONENT (The Animation Layer) ---
const RandomDots = ({ isRevealed, origin, onClose }) => {
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
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 100,
        overflow: "hidden",
        backgroundColor: "black",
        background:
          "radial-gradient(circle at 70% 70%, hsl(0, 0%, 12%), hsl(0, 0%, 8%), hsl(0, 0%, 4%), hsl(0, 0%, 0%))",
        clipPath: isRevealed
          ? `circle(150% at ${origin.x}px ${origin.y}px)`
          : `circle(0px at ${origin.x}px ${origin.y}px)`,
        transition: "clip-path 1.2s ease-in-out",
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
            boxShadow: "0 0 2px white",
          }}
        />
      ))}

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
            borderRadius: "5px",
            zIndex: 101, // Ensure button is clickable above the dots
          }}
        >
          Close X
        </button>
      )}
    </div>
  );
};

// --- 2. PROJECT CARD COMPONENT ---
// Updated to accept 'isRevealed' prop
function ProjectCard({ cardIndex, image, projectName = "Untitled", skillsRequired = ["HTML", "CSS", "JavaScript"], isRevealed }) {
  return (
    <div
      className="Project_card"
      style={{
        // 1. Position logic
        top: `${cardIndex * 8}px`,
        left: `${cardIndex/2 + 50}%`,
        
        // 2. Modern React Logic:
        // Instead of using refs to change zIndex, we calculate it here.
        // If revealed, add 150 to the index. If not, use standard index.
        zIndex: isRevealed ? cardIndex + 150 : cardIndex,
        
        // Optional: Add transition for smooth changes if you change other properties
        transition: "all 0.5s ease" 
      }}
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

// --- 3. MAIN PAGE COMPONENT ---
function ProjectPage() {
  const [isRevealed, setIsRevealed] = useState(trueq);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  const handleReveal = (e) => {
    // 1. Get the mouse coordinates
    const x = e.clientX;
    const y = e.clientY;

    // 2. Simply update state. React handles the rest.
    setClickPos({ x, y });
    setIsRevealed(true);
  };

  const handleClose = () => {

    setIsRevealed(false);
  };

  return (
    <section className="project_section">
      <h2 className=" project_title">
        Featured <span className="title">PROJECTS</span>
      </h2>

      <div className="project_space">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            cardIndex={index}
            image={project.image}
            projectName={project.projectName}
            skillsRequired={project.skillsRequired}
            // Pass the state down to the card
            isRevealed={isRevealed}
          />
        ))}
      </div>

      <button className="project_button" onClick={handleReveal}>
        See ALL <span className="arrow_icon">→</span>
      </button>

      <RandomDots
        isRevealed={isRevealed}
        origin={clickPos}
        onClose={handleClose}
      />
    </section>
  );
}

export default ProjectPage;