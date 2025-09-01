import Logo from "../../assets/Logo.png";
import NavBar from "./NavBar";
import Menu from "./Menu";
import { PrimaryButton } from "../Buttons/Button.jsx";

function LogoHeader() {
  return (
    <a href="/" className="text-3xl font-bold text-gray-800">
      <img src={Logo} alt="Craig Sampson Logo" className="h-10 md:h-12" />
    </a>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background flex items-center justify-between px-12 md:px-14 py-3 md:py-5 border-b border-gray-900 shadow-md">
      <div className="flex items-center justify-between w-full md:hidden">
        <LogoHeader />
        <div className="flex items-center justify-center gap-4">
          <PrimaryButton link="#contact" label="CONTACT" button="primary" />
          <Menu />
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:justify-between md:w-full relative">
        <LogoHeader />
        <NavBar />
      </div>
    </header>
  );
}
