import { NavLink } from "react-router-dom";

export default function Header() {
  const links = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/" },
    { name: "BKC Series", to: "/" },
    { name: "NEXSA Series", to: "/" },
    { name: "Services", to: "/" },
  ];

  return (
    <header className="w-full h-15 flex justify-around align-middle text-black border-b border-zinc-200 fixed top-0">
      <div className="text-neutral-800 text-2xl font-extrabold p-4 w-1/4">
        BKC/NEXSA
      </div>
      {/* <div className="flex justify-around align-end w-1/4 p-5"></div> */}
      <div className="flex justify-end align-middle w-1/2 p-5">
        {links.map((link) => (
          <NavLink to={link.to} className="text-black px-5">
            {link.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
