import Hero from "../components/Hero.jsx";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Services from "../components/Services/Services.jsx";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-secondary to-indigo-300 px-[3vh] lg:px-[15vh]">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
