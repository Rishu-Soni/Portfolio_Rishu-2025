import React, { useEffect, useRef } from "react";
import "./CSS/Nav.css";

function Nav() {

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.6;

      if (scrollY < triggerPoint) {
        navRef.current.classList.remove("navbarAfterScroll");
      } else if (scrollY > triggerPoint) {
        navRef.current.classList.add("navbarAfterScroll");
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navRef} >
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
