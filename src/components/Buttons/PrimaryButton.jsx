import React from "react";

export default function PrimaryButton(props) {
  return (
    <a
      href={props.link}
      className="font-space bg-secondary text-sm lg:text-2xl text-white px-3 py-2 lg:px-4 lg:py-3 rounded-xl hover:text-accent active:scale-95 active:transition-none focus:ring-offset-1 tracking-wide cursor-pointer"
    >
      {props.img ? <img src={props.img} alt={props.label} className="inline-block h-5 lg:h-8 mr-1.5" /> : null}
      {props.label}
    </a>
  );
}
