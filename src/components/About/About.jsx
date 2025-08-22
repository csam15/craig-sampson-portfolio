import React from "react";
import Headshot from "../../assets/headshot.png";
import TechStack from "./TechStack.jsx";

export default function About() {
  return (
    <div
      id="about"
      className="scroll-mt-18 font-space text-primary min-h-screen bg-background py-12 px-4 sm:px-10 lg:px-14"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-center mb-16">
          ABOUT
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Personal Info Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-8">
              <img
                src={Headshot}
                alt="Headshot alternate"
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-white object-cover shadow-lg mx-auto lg:mx-0"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Hi, I'm Sampson
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                <p>
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating innovative solutions that bridge the gap between design and functionality.
                </p>
                
                <p>
                  With experience in both frontend and backend development, I enjoy building 
                  scalable applications that provide exceptional user experiences. When I'm not coding, 
                  you can find me exploring new technologies and contributing to open-source projects.
                </p>
                
                <p>
                  I believe in clean code, continuous learning, and the power of collaboration 
                  to create meaningful digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="flex justify-center lg:justify-end">
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
}
