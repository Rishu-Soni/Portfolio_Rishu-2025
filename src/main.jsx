import { createRoot } from "react-dom/client";
import "./CSS/Main.css";
import Nav from "./Nav.jsx";
import Background from "./background.jsx";
import HandPng from "./hand.jsx";
import About from "./About.jsx";
import ProjectPage from "./Project_page.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Background />
    <Nav />
    {/* <HandPng /> */}
    <About />
    <ProjectPage/>
    <footer className="footer">
      <p className="footer_text">© 2024 Rishu Soni. All rights reserved.</p>
    </footer>
  </>
);
