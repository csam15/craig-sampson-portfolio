import React from "react";
import Headshot from "../../assets/headshot_placeholder.jpg";
import TechStack from "./TechStack.jsx";

export default function About() {
  return (
    <div
      id="about"
      className="scroll-mt-18 font-space text-secondary h-auto bg-white pt-8 pb-8 lg:px-40 "
    >
      <h1 className=" text-6xl lg:text-8xl text-center xl:text-left mb-8">
        ABOUT
      </h1>
      <div className="flex flex-col xl:flex-row text-center xl:text-left items-center justify-around">
        <div className="flex flex-col justify-center items-center">
          <img
            src={Headshot}
            alt="Headshot alternate"
            className="h-35 lg:h-60 mb-5 rounded-full"
          />
          <h3 className="text-xl px-5 lg:text-3xl max-w-200 pb-5 lg:pr-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            finibus, leo a mattis facilisis, risus nunc laoreet mi, sit amet
            condimentum tortor nisl sit amet eros. Aenean metus diam, tincidunt
            id tincidunt ut, pulvinar sit amet tellus. Ut molestie ipsum ac
            mauris ornare, eu malesuada odio eleifend. Maecenas id dui lectus.
            Aenean eleifend enim quis felis tempus tristique. Fusce at nisl nec
            mauris euismod tristique. Curabitur eu tellus mauris. Sed fringilla
            diam nec quam pretium consequat. Aenean pellentesque lorem id sapien
            tempus, eget dignissim dolor euismod. Pellentesque tellus augue,
          </h3>
        </div>
       <div>
        <TechStack />
       </div>
        
      </div>
    </div>
  );
}
