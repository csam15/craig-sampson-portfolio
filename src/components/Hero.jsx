import { TypeAnimation } from "react-type-animation";

import Button from "./Buttons/Button.jsx";
import github from "../assets/icons8-github.svg";
import linkedin from "../assets/icons8-linkedin.svg";
import gears from "../assets/gears.svg";
import PageBreak from "./PageBreak.jsx";

export default function Hero() {
  return (
    <div
      id="home"
      className="scroll-mt-20 flex flex-col justify-between font-space pt-10 lg:pt-0 h-[90vh] lg:h-[calc(100vh-85px)] bg-background"
    >
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="font-outfit uppercase text-primary text-lg md:text-xl lg:text-2xl tracking-wider text-left lg:pr-160">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              3000,
              "calligraphy artist",
              2000,
              "electronics repair specialist",
              2000,
            ]}
            wrapper="span"
            speed={50}
            omitDeletionAnimation={true}
            repeat={Infinity}
          />
        </div>
        <div className="text-6xl md:text-7xl lg:text-9xl text-center font-bold text-white my-4 lg:my-3 px-4 md:px-0">
          <h1>CRAIG SAMPSON</h1>
        </div>
        <h3 className="uppercase font-outfit text-primary text-lg md:text-2xl lg:text-3xl text-center px-10 md:px-0">
          Crafting solutions through code, creativity and repair
        </h3>
        <div className="flex justify-center mt-10 gap-2 lg:gap-8">
          <Button
            img={github}
            link="https://github.com/csam15"
            label="GITHUB"
          />
          <Button img={gears} link="#services" label="SERVICES" button="primary" />
          <Button
            img={linkedin}
            link="https://www.linkedin.com/in/craig-sampson15/"
            label="LINKEDIN"
          />
        </div>
      </div>
      <PageBreak text="• nyc • Available for Freelance & Full-Time Roles" />
    </div>
  );
}
