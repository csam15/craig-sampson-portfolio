import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-between font-space mt-10 lg:mt-0 mb-10 h-auto lg:h-[calc(100vh-85px)]">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h3 className="text-primary text-xl lg:text-4xl tracking-wider text-center">
          FULL STACK WEB DEVELOPER
        </h3>
        <div className="text-6xl lg:text-9xl mt-10 text-center font-bold text-white">
          <h1>CRAIG</h1>
          <h1>SAMPSON</h1>
        </div>
      </div>
      <div
        id="hero-info"
        className="flex items-center justify-between text-center px-10 lg:px-20 pt-10 lg:text-xl  tracking-wider text-primary"
      >
        <h3>
          <span className="block lg:hidden">BASED IN NYC</span>
          <span className="hidden lg:block">BASED IN NEW YORK CITY</span>
        </h3>
        <h3 className="ml-5">AVAILABLE FOR HIRE</h3>
      </div>
    </div>
  );
}
