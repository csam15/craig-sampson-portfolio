import React from "react";
import Headshot from "../../assets/headshot.png";
import TechStack from "./TechStack.jsx";

export default function About() {
  return (
    <div
      id="about"
      className="scroll-mt-18 font-space text-primary h-auto bg-background pb-8 lg:px-40 "
    >
      <h1 className=" text-6xl lg:text-8xl text-center xl:text-left mb-8">
        ABOUT
      </h1>
      <div className="flex flex-col xl:flex-row text-center xl:text-left items-center justify-around">
        <div className="flex flex-col justify-center items-center">
          <img
            src={Headshot}
            alt="Headshot alternate"
            className="h-50 mb-5 rounded-full bg-white"
          />
          <h3 className="text-xl px-5 lg:text-3xl max-w-150 pb-5 lg:pr-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            finibus, leo a mattis facilisis, risus nunc laoreet mi, sit amet
            condimentum tortor nisl sit amet eros. Aenean metus diam, tincidunt
            id tincidunt ut, pulvinar sit amet tellus. Ut molestie ipsum ac
            mauris ornare, eu malesuada odio eleifend. Maecenas id dui lectus.
            Aenean eleifend enim quis felis tempus tristique. Fusce at nisl nec
            mauris euismod tristique. Curabitur eu tellus mauris.
          </h3>
        </div>
       <div>
        <TechStack />
       </div>
        
      </div>
    </div>
  );
}
