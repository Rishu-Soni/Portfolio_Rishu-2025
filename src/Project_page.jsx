import React, { useState, useEffect, useRef } from "react";
import "./CSS/Project_page.css";

// --- Image Imports ---
import chess from "./Assets/Images/projects/chess.png";
import calculator from "./Assets/Images/projects/calculator.png";
import password_generator from "./Assets/Images/projects/password_generator.png";
import pre_portfolio from "./Assets/Images/projects/pre_portfolio.png";
import toDo_list from "./Assets/Images/projects/toDo_list.png";

import project_backIMG from "./Assets/Images/grid_white.svg"


// --- Project ARRAY ---
const projects = [
  { id: 1, image: toDo_list, projectName: "ToDo list" },
  { id: 2, image: pre_portfolio, projectName: "Portfolio", skillsRequired: ["HTML", "CSS", "React"] },
  { id: 3, image: calculator, projectName: "Calculator" },
  { id: 4, image: password_generator, projectName: "New password", skillsRequired: ["HTML", "CSS", "React"] },
  { id: 5, image: chess, projectName: "Chess" }
];

function ProjectCard({ cardIndex, image, count, projectName = "Untitled", skillsRequired = ["HTML", "CSS", "JS"] }) {

  const rotateY = cardIndex * (360 / count);

  const radius = 400;
  //  const [radius, setradius] = useState(400);

  const cardsRef = useRef();

  // useEffect(() =>{
  //   const project_animation
  // }, [])


  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!divRef.current) return;

  //     const scrollY = window.scrollY;
  //     const windowHeight = window.innerHeight;

  //     // Calculate start and end points in pixels
  //     const startTrigger = windowHeight * 0.3; // 50vh
  //     const endTrigger = windowHeight * 0.6;   // 80vh
  //     const distance = endTrigger - startTrigger;

  //     let scale = 1;

  //     if (scrollY < startTrigger) {
  //       // Before 50vh: Keep original size
  //       scale = 1;
  //     } else if (scrollY > endTrigger) {
  //       // After 80vh: Stick to 20% size
  //       scale = 0.2;
  //     } else {
  //       // Between 50vh and 80vh: Calculate percentage
  //       const progress = (scrollY - startTrigger) / distance;

  //       // Interpolate: We want to go FROM 1 TO 0.2
  //       // Formula: startValue - (progress * (startValue - endValue))
  //       scale = 1 - (progress * 0.8);
  //     }

  //     // Apply the transformation directly to the DOM node
  //     divRef.current.style.transform = `scale(${scale})`;
  //   };
  //   window.addEventListener('scroll', handleScroll);

  //   // Initial call to set state on load
  //   handleScroll();

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div
      className="Project_card"
      // We only change the transform here. The size is handled by CSS.
      style={{
        top: `${cardIndex / 20 * 50}%`,
        left: `${cardIndex / 20 * 50}%`,

        width: '255px',
        height: '340px',
      }}
      // style={{
      //   transform: `rotateY(${rotateY}deg) translateZ(${radius}px)`,
      //   inset: "0",
      //   width: "auto",
      //   height: "auto"
      // }}


      ref={cardsRef}
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
      <ul className="project_link_container" >
        <li className="project_link" >Github</li>
        <li className="project_link" >Live preview</li>
      </ul>
    </div>
  );
}

function ProjectPage() {

  return (
    <section className="project_section">



      {/* <aside className="project_back_div" >
        <img src={project_backIMG} className="project_back_img" />
      </aside> */}

      <h2 className="project_title">
        Featured <span className="title" style={{ marginLeft: '8px' }}>PROJECTS</span>
      </h2>

      {/* The rotating container */}
      <div className="project_space" style={{
        // animation: "autoRun 23s linear infinite",
      }} >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            cardIndex={index}
            count={projects.length} // Pass total count for math
            image={project.image}
            projectName={project.projectName}
            skillsRequired={project.skillsRequired}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;