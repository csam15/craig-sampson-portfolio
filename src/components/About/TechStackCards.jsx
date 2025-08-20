import React from "react";

export default function TechStackCards(props) {
  return (
  <div className="bg-background rounded-xl mx-1 border-1 border-accent w-45 min-h-50 sm:w-50 sm:min-h-55 md:w-55 md:min-h-60 lg:w-60 lg:min-h-65 flex flex-col items-center justify-center overflow-hidden hover:bg-gray-800">
      <h2 className="text-primary text-lg mb-3 font-bold">{props.title}</h2>
      <div className="grid grid-cols-2 gap-2">
        {props.imageArray.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Tech stack ${idx}`}
            className="h-20 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
