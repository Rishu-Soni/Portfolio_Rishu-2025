import React, { useState, useEffect, useRef } from "react";
import "./CSS/Project_page.css";

// --- Image Imports ---
import chess from "./Assets/Images/projects/chess.png";
import calculator from "./Assets/Images/projects/calculator.png";
import password_generator from "./Assets/Images/projects/password_generator.png";
import pre_portfolio from "./Assets/Images/projects/pre_portfolio.png";
import toDo_list from "./Assets/Images/projects/toDo_list.png";

// --- Data ---
const projects = [
  {
    id: 1,
    image: toDo_list,
    projectName: "ToDo list",
    skillsRequired: ["HTML", "CSS", "JS"],
    github_link: "https://github.com/Rishu-Soni/SideProject_ToDo_List-Rishu.git",
    live_link: "https://todo-rishu.rishusoni6393.workers.dev/",
  },
  {
    id: 2,
    image: pre_portfolio,
    projectName: "Portfolio",
    skillsRequired: ["HTML", "CSS", "React"],
    github_link: "https://github.com/Rishu-Soni/Portfolio-website-Rishu.git",
    live_link: "https://pre-portfolio-rishu.rishusoni6393.workers.dev/",
  },
  {
    id: 3,
    image: calculator,
    projectName: "Calculator",
    skillsRequired: ["HTML", "CSS", "JS"],
    github_link: "https://github.com/Rishu-Soni/SideProject_Calculator-Rishu.git",
    live_link: "https://calculator-rishu.rishusoni6393.workers.dev/",
  },
  {
    id: 4,
    image: password_generator,
    projectName: "New password",
    skillsRequired: ["HTML", "CSS", "React"],
    github_link: "https://github.com/Rishu-Soni/Learning_React.git",
    live_link: "https://passwordgenerator-rishu.rishusoni6393.workers.dev/",
  },
  {
    id: 5,
    image: chess,
    projectName: "Chess",
    skillsRequired: ["HTML", "CSS", "JS"],
    github_link: "https://github.com/Rishu-Soni/SideProject_Chess-Rishu.git",
    live_link: "https://chess-rishu.rishusoni6393.workers.dev/",
  },
];

// --- Card Component ---
function ProjectCard({ project, index, totalCount, phase }) {

  const rotateY = index * (360 / totalCount);
  const radius = 400;

  const stackX = (index - 2) * 4;
  const stackY = (index - 2) * 4;

  const getTransform = () => {
    switch (phase) {
      case 'files':
        return `translate(${stackX}px, ${stackY}px)`;

      case 'overlap':
        return `translate(0px, 0px)`;

      case 'carousel':
      case 'spinning':
        return `rotateY(${rotateY}deg) translateZ(${radius}px)`;

      default:
        return `translate(0px, 0px)`;
    }
  };

  return (
    <div
      className="Project_card"
      style={{
        transform: getTransform(),
        zIndex: phase === 'files' ? index : 'auto'
      }}
    >
      <h2 className="projectName">{project.projectName}</h2>
      <img src={project.image} alt={project.projectName} className="project_img" />

      <ul className="skillTag_container">
        {(project.skillsRequired || ["HTML", "CSS", "JS"]).map((skill, i) => (
          <li className="skillTag" key={i}>{skill}</li>
        ))}
      </ul>

      <ul className="project_link_container">
        <a href={(project.github_link || "https://github.com/Rishu-Soni")} target="-blank" className="project_link githubLink"> <li >Github</li></a>
        <a href={project.live_link} target="-blank" className="project_link liveLink" ><li >Live preview</li></a>
      </ul>
    </div>
  );
}

// --- Main Component ---
function ProjectPage() {
  const [phase, setPhase] = useState('files');

  const ProjectSpaceRef = useRef(null);
  const containerRef = useRef(null);

  const handleSeeAll = () => {
    if (phase === 'files') {
      setPhase('overlap');
    }
  };


  useEffect(() => {
    if (phase === 'files') {
      // containerRef.current.innerHTML = `See All`;
    }
    if (phase !== 'files') {
      containerRef.current.innerHTML = `
      

      `;
    }
  }, [phase]);


  useEffect(() => {
    let timer;
    if (phase === 'overlap') {
      timer = setTimeout(() => setPhase('carousel'), 1700);
    }
    else if (phase === 'carousel') {
      timer = setTimeout(() => setPhase('spinning'), 1500);
    }
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setPhase('files');
        }
      },
      {
        threshold: 0.55
      }
    );

    if (ProjectSpaceRef.current) {
      observer.observe(ProjectSpaceRef.current);
    }

    return () => {
      if (ProjectSpaceRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section className="project_section" >
      <h2 className="project_title">
        Featured <span className="title" style={{ marginLeft: '8px' }}>PROJECTS</span>
      </h2>

      <div className={`project_space ${phase === 'spinning' ? 'animate-spin' : ''}`} ref={ProjectSpaceRef} >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            index={index}
            totalCount={projects.length}
            phase={phase}
          />
        ))}
      </div>


      <a
        className={`project_button ${phase !== 'files' ? 'hidden' : ''}`}
        onClick={handleSeeAll}
        ref={containerRef}
      >
        <button>{"<"}</button>
        auto
        <button>{">"}</button>
      </a>


    </section>
  );
}

export default ProjectPage;
