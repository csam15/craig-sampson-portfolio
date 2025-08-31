import PrimaryButton from "./Buttons/PrimaryButton.jsx";
import github from "../assets/icons8-github.svg";
import linkedin from "../assets/icons8-linkedin.svg";
import email from "../assets/email.png";
import PageBreak from "./PageBreak.jsx";
import SecondaryButton from "./Buttons/SecondaryButton.jsx";

export default function Hero() {
  return (
    <div
      id="home"
      className="scroll-mt-20 flex flex-col justify-between font-space pt-10 lg:pt-0 h-auto lg:h-[calc(100vh-85px)] bg-background"
    >
      <div className="flex-1 flex flex-col justify-center items-center">
        <h3 className="font-outfit uppercase text-primary text-xl lg:text-2xl tracking-wider text-left lg:pr-160">
          full stack developer
        </h3>
        <div className="text-6xl lg:text-9xl my-10 lg:my-5 text-center font-bold text-white">
          <h1>CRAIG SAMPSON</h1>
        </div>
        <h3 className="uppercase font-outfit text-primary px-5 lg:px-0 text-sm lg:text-3xl text-center">
          Crafting Modern Web Experiences with Clean Code and Design
        </h3>
        <div className="flex justify-center mt-10 gap-2 lg:gap-8">
          <PrimaryButton
            img={github}
            link="https://github.com/csam15"
            label="GITHUB"
          />
          <PrimaryButton img={email} link="#contact" label="CONTACT" />
          <PrimaryButton
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
