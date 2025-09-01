import { TypeAnimation } from "react-type-animation";

import { PrimaryButton } from "./Buttons/Button.jsx";
import github from "../assets/icons8-github.svg";
import linkedin from "../assets/icons8-linkedin.svg";
import gears from "../assets/gears.svg";
import PageBreak from "./PageBreak.jsx";


export default function Hero() {
  return (
    <div
      id="home"
      className={`scroll-mt-25 flex flex-col justify-between font-space h-[80vh] lg:h-[85vh] `}
    >
      <div className="flex-1 flex flex-col justify-center items-center section-effect mb-0">
        <div className="font-outfit uppercase text-primary text-center text-lg md:text-xl lg:text-2xl tracking-wider lg:pr-115 xl:pr-155">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              3000,
              "calligraphy artist",
              2000,
              "electronics technician",
              2000,
            ]}
            wrapper="span"
            speed={50}
            omitDeletionAnimation={true}
            repeat={Infinity}
          />
        </div>
        <div className="text-6xl md:text-8xl xl:text-9xl text-center font-bold text-white my-4 lg:my-3 px-4">
          <h1>CRAIG SAMPSON</h1>
        </div>
        <h3 className="uppercase font-outfit text-primary text-lg md:text-2xl lg:text-3xl text-center px-10 md:px-5">
          Crafting solutions through code, creativity and repair
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-6 lg:gap-8">
          <PrimaryButton
            img={github}
            link="https://github.com/csam15"
            label="GITHUB"
          />
          <PrimaryButton img={gears} link="#services" label="SERVICES" button="primary" />
          <PrimaryButton
            img={linkedin}
            link="https://www.linkedin.com/in/craig-sampson15/"
            label="LINKEDIN"
          />
        </div>
      </div>
      {/* <PageBreak text="• nyc • Available for Freelance & Full-Time Roles" /> */}
    </div>
  );
}
