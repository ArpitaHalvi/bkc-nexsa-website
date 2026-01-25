import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section className="w-full flex justify-center align-middle flex-col">
      <div className="w-full mt-15 p-10 flex justify-center align-middle flex-col">
        <h1 className="text-4xl font-bold text-center py-3">
          Trusted by 4000+ wholesellers shops
        </h1>
        <NavLink
          to="/about"
          className="text-black px-7 mx-auto py-2 bg-amber-400 rounded-md text-lg font-semibold"
        >
          Learn More
        </NavLink>
      </div>
    </section>
  );
}
