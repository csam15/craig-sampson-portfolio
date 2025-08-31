export default function SecondaryButton(props) {
  return (
    <a
      href={props.link}
      className="font-space bg-transparent text-sm lg:text-2xl text-white px-3 py-2 lg:px-4 lg:py-3 rounded-xl border hover:text-primary hover:bg-black active:scale-95 active:transition-none focus:ring-1 focus:ring-accent tracking-wide cursor-pointer"
    >
      {props.label}
    </a>
  );
}
