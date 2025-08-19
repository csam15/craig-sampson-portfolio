import React from "react";

export default function TechStackCards(props) {
    return (
        <div className="bg-background rounded-xl w-30 min-h-30 flex flex-col items-center justify-center overflow-hidden hover:bg-gray-800">
            <h2 className="text-white text-lg font-bold text-center">{props.title}</h2>
            <img src={props.image} alt={props.title} className="h-12 w-12 max-w-full mx-auto mt-2 object-contain" />
        </div>
    );
}