import { Link } from "react-router-dom";
import { CardButton } from "../Buttons/Button";

export default function ServiceCard({ icon, title, description, link }) {
  return (
    <div className="border rounded-xl p-4 w-[30vh] bg-background">
      <div className="flex flex-col gap-2">
        <img src={icon} alt={title} className="h-12 w-12" />
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
        <CardButton label="Learn More" link={link} />
      </div>
    </div>
  );
}
