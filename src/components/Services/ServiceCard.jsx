import { Link } from "react-router-dom";
import { CardButton } from "../Buttons/Button";

export default function ServiceCard({ icon, title, description, link, button }) {
  return (
    <div className="border rounded-xl p-4 min-w-[20vh] max-w-[30vh] sm:min-w-[35vh] sm:max-w-[40vh] md:min-w-[40vh] md:max-w-[60vh] bg-background">
      <div className="flex flex-col gap-2">
        <img src={icon} alt={title} className="size-12 md:size-14" />
        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold">{title}</h4>
        <p className=" text-sm md:text-md lg:text-lg text-gray-400">{description}</p>
        <CardButton label={button} link={link} />
      </div>
    </div>
  );
}
