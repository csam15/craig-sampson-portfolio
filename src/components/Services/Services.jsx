import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div
      id="services"
      className="scroll-mt-23 font-space text-primary min-h-screen bg-background py-12 px-4 sm:px-10 lg:my-10 lg:mx-30 m-2 md:m-6 lg:m-12 rounded-3xl border-y-2 border-secondary"
    >
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
  );
}
