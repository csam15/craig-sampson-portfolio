import React from "react";

export default function TechStackCards(props) {
  return (
    <div className="bg-background rounded-xl border border-accent p-4 sm:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:border-gray-600 hover:shadow-lg hover:scale-105 min-h-[175px] sm:min-h-[220px]">
      <h2 className="text-primary text-lg sm:text-xl font-bold mb-4 text-center">
        {props.title}
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
        {props.imageArray.map((src, idx) => (
          <div key={idx} className="flex items-center justify-center p-2">
            <img
              src={src}
              alt={`${props.title} technology ${idx + 1}`}
              className="h-12 sm:h-16 lg:h-18 w-auto object-contain filter brightness-90 hover:brightness-110 transition-all duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
