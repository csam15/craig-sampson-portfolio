import Logo from "../../assets/react.svg";
import NavBar from "./NavBar";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background flex items-center justify-between px-12 md:px-14 py-3 md:py-5 border-b border-gray-900 shadow-md">
      <a href="#home" className="text-3xl font-bold text-gray-800">
        <img src={Logo} alt="Craig Sampson Logo" />
      </a>
      <NavBar />
      <Menu />
    </header>
  );
}
