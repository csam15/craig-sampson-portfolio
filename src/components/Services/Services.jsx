import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import dev from "../../assets/services/dev.png";
import electronics from "../../assets/services/electronics.png";
import calligraphy from "../../assets/services/calligraphy.png";

const services = {
  webdev: {
    icon: dev,
    title: "Web Development",
    description: "Building responsive and functional websites.",
    link: "/webdev",
  },
  electronics: {
    icon: electronics,
    title: "Electronics Repair",
    description: "Fixing and troubleshooting electronic devices.",
    link: "/electronics",
  },
  calligraphy: {
    icon: calligraphy,
    title: "Calligraphy",
    description: "Creating beautiful handwritten designs.",
    link: "/calligraphy",
  },
};

export default function Services() {
  return (
    <div id="services" className="scroll-mt-23 font-space text-primary h-auto">
      <div className="section-effect flex flex-col justify-center items-center gap-6 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="uppercase text-4xl font-bold text-center">services & solutions</h1>
        <ServiceCard
          icon={services.webdev.icon}
          title={services.webdev.title}
          description={services.webdev.description}
          link={services.webdev.link}
        />
        <ServiceCard
          icon={services.electronics.icon}
          title={services.electronics.title}
          description={services.electronics.description}
          link={services.electronics.link}
        />
        <ServiceCard
          icon={services.calligraphy.icon}
          title={services.calligraphy.title}
          description={services.calligraphy.description}
          link={services.calligraphy.link}
        />
      </div>
    </div>
  );
}
