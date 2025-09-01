import { Link } from "react-router-dom";

export function PrimaryButton({ link, img, label, button }) {
  return (
    <a
      href={link}
      className={`font-outfit ${button === "primary" ? "bg-secondary text-white hover:bg-secondary-blur" : "bg-transparent border border-white hover:border-primary text-white hover:text-primary hover:bg-background-secondary"} px-3 py-2 lg:px-4 lg:py-3 rounded-xl active:scale-95 active:transition-none focus:ring-1 focus:ring-accent tracking-wide cursor-pointer text-lg sm:text-xl md:text-2xl`}
    >
      {img ? (
        <img src={img} alt={label} className="inline-block h-5 sm:h-8 lg:h-8 mr-1.5" />
      ) : null}
      {label}
    </a>
  );
}

export function CardButton({ label, link }) {
  return (
    <Link to={link} className="whitespace-nowrap border rounded-xl text-md md:text-lg lg:text-xl text-center p-1 md:px-2 text-accent max-w-40 hover:bg-gradient-to-b hover:from-background hover:to-background-secondary">
      <span>{label}</span>
    </Link>
  );
}
