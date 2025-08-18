import React from "react";

export default function NavBar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8 font-space">
        <li>
          <a href="#home" className="text-primary hover:text-accent">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-primary hover:text-accent">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-primary hover:text-accent">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-primary hover:text-accent">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
