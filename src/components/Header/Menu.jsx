import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import hamburger from "../../assets/hamburger-menu.svg";
import x from "../../assets/cross-menu-w.png";

const sections = [
  { name: "home" },
  { name: "services" },
  { name: "about" },
  { name: "contact" },
  { name: "resume" }
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section.name);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section.name;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section) => {
    if (location.pathname === '/') {
      // Already on home page - scroll to section
      document.getElementById(section.name)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On different page - navigate to home page with hash
      navigate(`/#${section.name}`);
    }
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="cursor-pointer">
        {isOpen ? (
          <img src={x} alt="Close Menu" className="h-10 md:h-12" />
        ) : (
          <img src={hamburger} alt="Open Menu" className="h-10 md:h-12" />
        )}
      </button>
      {isOpen && (
        <nav className="absolute top-16 md:top-20 right-3 bg-background-secondary shadow-lg font-outfit text-center text-lg md:text-xl rounded-lg p-5 md:p-8">
          <ul className="flex flex-col space-y-4">
            {location.pathname === '/' ? (
              // On home page - show all sections
              sections.map((section) => (
                <li key={section.name}>
                  <button
                    onClick={() => handleNavClick(section)}
                    className={`block text-primary hover:text-accent p-1 transition-colors duration-600 ease-in-out ${
                      section.name === active ? "font-bold" : ""
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
                  className="block text-primary hover:text-accent p-1 transition-colors duration-600 ease-in-out font-bold"
                >
                  Home
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
}
