import React from "react";
import Headshot from '../../assets/headshot_placeholder.jpg'

export default function About() {
  return (
    <div id="about" className="font-space">
      <h1 className="text-primary text-6xl lg:text-8xl text-center lg:text-left lg:pl-20">ABOUT</h1>
      <div className="flex justify-center items-center">
        <h3 className="text-primary text-2xl lg:text-4xl">about me</h3>
        <img src={Headshot} alt="Headshot" className="h-35 lg:h-60 m-5 rounded-full" />
      </div>
    </div>
  );
}
