import { useState, useEffect } from "react";
import hamburger from "../../assets/hamburger-menu.svg";
import x from "../../assets/cross-menu-w.png";

const sections = ["home", "about", "projects", "services", "contact", "resume"];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} disabled className="cursor-pointer">
        {isOpen ? (
          <img src={x} alt="Close Menu" className="h-10 md:h-12" />
        ) : (
          <img src={hamburger} alt="Open Menu" className="h-10 md:h-12" />
        )}
      </button>
      {isOpen && (
        <nav className="absolute top-16 md:top-20 right-3 bg-background-secondary shadow-lg font-outfit text-center text-lg md:text-xl rounded-lg p-5 md:p-8">
          <ul className="flex flex-col space-y-4">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`block text-primary hover:text-accent p-1 transition-colors duration-600 ease-in-out ${
                    section === active ? "font-bold" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
