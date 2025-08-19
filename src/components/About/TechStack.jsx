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
    <div className="flex flex-col justify-center font-outfit text-primary items-center max-w-xl">
      <h1 className=" text-3xl lg:text-5xl underline">Skill set</h1>
      <h3 className=" text-xl lg:text-3xl py-4 lg:py-10 ">Web Development</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        <TechStackCards imageArray={frontend} title="Frontend" />
        <TechStackCards imageArray={backend} title="Backend" />
        <TechStackCards imageArray={otherTech} title="Other Tech" />
        <TechStackCards imageArray={languages} title="Languages" />
      </div>
    </div>
  );
}
