import React from "react";
import TechStackCards from "./TechStackCards.jsx";
import html from "../../assets/tech-stack/html.svg";
import css from "../../assets/tech-stack/css.svg";
import js from "../../assets/tech-stack/js.svg";
import ts from "../../assets/tech-stack/ts.svg";
import react from "../../assets/tech-stack/react.svg";
import next from "../../assets/tech-stack/next.svg";
import tw from "../../assets/tech-stack/twcss.svg";
import node from "../../assets/tech-stack/node.svg";
import py from "../../assets/tech-stack/py.svg";
import cad from "../../assets/tech-stack/cad.svg";
import express from "../../assets/tech-stack/express.svg";
import seo from "../../assets/tech-stack/seo.png";
import devices from "../../assets/tech-stack/devices.png";

const frontend = [html, css, react, tw];
const languages = [js, ts, py];
const backend = [node, express, next];
const otherTech = [cad, seo, devices];

export default function TechStack() {
  return (
    <div className="flex flex-col justify-center font-outfit text-primary items-center w-full max-w-2xl">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold underline decoration-2 underline-offset-4">
        Skills & Technologies
      </h1>
      <h3 className="text-lg sm:text-xl lg:text-2xl py-4 lg:py-6 text-gray-300">
        Web Development
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-75 sm:w-full">
        <TechStackCards imageArray={frontend} title="Frontend" />
        <TechStackCards imageArray={backend} title="Backend" />
        <TechStackCards imageArray={languages} title="Languages" />
        <TechStackCards imageArray={otherTech} title="Other Tech" />
      </div>
    </div>
  );
}
