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

const stack = [
  { HTML5: html },
  { CSS3: css },
  { Javascript: js },
  { Typescript: ts },
  { React: react },
  { Tailwind: tw },
  { "Node.js": node },
  { "Express.js": express },
  { "Next.js": next },
];
const otherTech = [{ Python: py }, { CAD: cad }, { SEO: seo }];

export default function TechStack() {
  return (
    <div className="flex flex-col justify-center items-center max-w-xl">
      <h1 className="text-secondary text-3xl lg:text-5xl font-bold underline">
        Tech Stack
      </h1>
      <h3 className="text-secondary text-xl lg:text-3xl py-4 lg:py-10 ">
        Web Development
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {stack.map((item, index) => {
          const title = Object.keys(item)[0];
          const image = item[title];
          return <TechStackCards key={index} title={title} image={image} />;
        })}
      </div>
      <h3 className="text-secondary text-xl lg:text-3xl py-4 lg:py-10">
        Other Technologies
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {otherTech.map((item, index) => {
          const title = Object.keys(item)[0];
          const image = item[title];
          return <TechStackCards key={index} title={title} image={image} />;
        })}
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
