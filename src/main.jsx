import { createRoot } from "react-dom/client";
import "./CSS/Main.css";
import Nav from "./Nav.jsx";
import Background from "./background.jsx";
import HandPng from "./hand.jsx";
import About from "./About.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Background />
    <Nav />
    <HandPng />
    <About />
  </>
);
