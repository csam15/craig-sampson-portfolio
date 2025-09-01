import { Link } from "react-router-dom";
import { CardButton } from "../Buttons/Button";

export default function ServiceCard({ icon, title, description, link }) {
  return (
    <div className="border rounded-xl p-4 w-[25vh] sm:w-[30vh] md:w-[40vh] bg-background">
      <div className="flex flex-col gap-2">
        <img src={icon} alt={title} className="size-12 md:size-14" />
        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold">{title}</h4>
        <p className=" text-sm md:text-md lg:text-lg text-gray-400">{description}</p>
        <CardButton label="Learn More" link={link} />
      </div>
    </div>
  );
}
