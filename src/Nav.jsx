import React from "react";
import "./CSS/Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <h2 className="Portfolio_navText">Portfolio</h2>
      <ul className="list_container">
        <li className="list">Projects</li>
        <li className="list">Contact</li>
        <li className="list">About</li>
      </ul>
    </nav>
  );
}
export default Nav;
