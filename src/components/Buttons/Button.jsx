export default function PrimaryButton({ link, img, label, button }) {
  return (
    <a
      href={link}
      className={`font-space ${button === "primary" ? "bg-secondary text-white hover:bg-secondary-blur" : "bg-transparent border border-white hover:border-primary text-white hover:text-primary hover:bg-background-secondary"} px-3 py-2 lg:px-4 lg:py-3 rounded-xl  active:scale-95 active:transition-none focus:ring-1 focus:ring-accent tracking-wide cursor-pointer text-md md:text-xl lg:text-2xl`}
    >
      {img ? (
        <img src={img} alt={label} className="inline-block h-5 lg:h-8 mr-1.5" />
      ) : null}
      {label}
    </a>
  );
}
