import React, { useState, useEffect } from "react";

const sections = ["home", "about", "projects", "contact", "resume"];

export default function NavBar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8 font-space text-primary">
        {sections.map(section => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`hover:text-accent cursor-pointer transition-colors duration-600 ease-in-out ${
                section !== "resume" && active === section ? "border-b border-primary" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
