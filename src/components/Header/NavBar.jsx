import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const sections = [
  { name: "home" },
  { name: "services" },
  { name: "about" },
  { name: "contact" },
  { name: "resume" }
];

export default function NavBar() {
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      const scrollPosition = window.scrollY + 150;
      
      // Check sections in reverse order to handle overlapping sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section.name);
        if (el && scrollPosition >= el.offsetTop) {
          current = section.name;
          break;
        }
      }
      
      setActive(current);
    };
    
    handleScroll(); // Set initial active section
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    if (location.pathname === '/') {
      // Already on home page - scroll to section
      document.getElementById(section.name)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On different page - navigate to home page with hash
      navigate(`/#${section.name}`);
    }
  };

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex space-x-4 lg:space-x-8 font-space md:text-lg lg:text-xl text-primary">
          {location.pathname === '/' ? (
            // On home page - show all sections
            sections.map((section) => (
              <li key={section.name}>
                <button
                  onClick={() => handleNavClick(section)}
                  className={`hover:text-accent cursor-pointer transition-colors duration-600 ease-in-out ${
                    section.name !== "resume" && active === section.name
                      ? "border-b border-primary"
                      : ""
                  }`}
                >
                  {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                </button>
              </li>
            ))
          ) : (
            // On other pages - only show Home link
            <li>
              <button
                onClick={() => handleNavClick({ name: 'home' })}
                className="hover:text-accent cursor-pointer transition-colors duration-600 ease-in-out border-b border-primary"
              >
                Home
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
