import React from "react";
import Logo from "../../assets/react.svg";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background flex flex-col md:flex-row items-center md:justify-between py-3 md:py-5 md:px-40 border-b border-gray-900 shadow-md">
      <a href="#home" className="text-3xl font-bold text-gray-800">
        <img src={Logo} alt="Craig Sampson Logo" />
      </a>
      <NavBar />
    </header>
  );
}
