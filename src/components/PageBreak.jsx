import React from "react";

export default function PageBreak(props) {
  return (
    <div className="whitespace-nowrap w-full my-8 h-10 border-t-1 border-b-1 border-white overflow-hidden flex items-center justify-center">
      <div className="w-full sm:w-[120vw] max-w-[120vw] flex justify-center items-center overflow-x-visible animate-slide-across">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <>
              <span
                key={`${props.text}-${props.img}-${i}`}
                className="uppercase text-primary text-sm md:text-lg lg:text-xl lg:tracking-widest w-full pr-1"
              >
                {props.text}
                {props.img}
              </span>
              {props.img}
            </>
          ))}
      </div>
    </div>
  );
}
