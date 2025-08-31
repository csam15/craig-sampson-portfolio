import React from "react";

export default function TechStackCards({ title, img }) {
  return (
    <div className="rounded-xl w-16 bg-background-secondary hover:scale-110 hover:shadow-lg transition-all duration-300 relative group">
      <img
        src={img}
        alt={`${title} logo`}
        className="w-auto h-16 p-1 hover:bg-gray-600 rounded-xl"
      />
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {title}
      </div>
    </div>
  );
}
