import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div
      id="services"
      className="scroll-mt-23 font-space text-primary h-auto"
    >
      <div className="section-effect">
        <h1>My Services</h1>
        <ul>
          <li>
            <Link to="/webdev">Web Development</Link>
          </li>
          <li>
            <Link to="/electronics">Electronics Repair</Link>
          </li>
          <li>
            <Link to="/calligraphy">Calligraphy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
