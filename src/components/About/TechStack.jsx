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
import express from "../../assets/tech-stack/express.svg";
import seo from "../../assets/tech-stack/seo.png";

const stack = [
  { img: html, title: "HTML" },
  { img: css, title: "CSS" },
  { img: js, title: "JavaScript" },
  { img: ts, title: "TypeScript" },
  { img: react, title: "React" },
  { img: next, title: "Next.js" },
  { img: tw, title: "Tailwind" },
  { img: node, title: "Node.js" },
  { img: express, title: "Express" },
  { img: py, title: "Python" },
  { img: seo, title: "SEO" },
];

export default function TechStack() {
  return (
    <div className="flex flex-col justify-center font-outfit text-primary items-center w-full max-w-2xl">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold underline decoration-2 underline-offset-4 text-center">
        Skills & Technologies
      </h1>
      <h3 className="text-lg sm:text-xl lg:text-2xl py-4 lg:py-6 text-gray-300">
        Web Development
      </h3>
      <div className="border-2 border-secondary rounded-xl p-6 md:p-10 lg:p-14 mb-6">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-12 lg:gap-16 place-items-center">
          {stack.map((tech, index) => (
            <TechStackCards key={index} img={tech.img} title={tech.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
