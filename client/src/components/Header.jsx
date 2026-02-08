// md:flex md:justify-end md:align-middle md:w-3/4 p-5 flex flex-col absolute left-0 justify-center gap-7 top-full h-screen w-full md:min-w-1/2 items-center bg-amber-200 z-10 transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const links = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "BKC Series", to: "/bkc-series" },
    { name: "NEXSA Series", to: "/nexsa-series" },
    { name: "Contact", to: "/contact-us" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-14 flex justify-between items-center fixed z-500 transition-all duration-400 px-7 md:px-4 ${!scrolling ? `bg-white text-black ${isHome && "border-b"}` : "bg-transparent text-white border-none"}`}
    >
      <div className={`w-25 lg:mx-10 ${scrolling & isHome && "logo-scratch"}`}>
        <NavLink to="/">
          <img
            src="/images/bkc-logo-bg-removed.png"
            alt="Brand Logo"
            className="w-full h-auto object-contain"
          />
        </NavLink>
      </div>
      <nav
        className={`fixed md:static top-0 left-0 h-screen md:h-auto w-full
          flex flex-col md:flex-row justify-center md:justify-end items-center md:items-center
          bg-neutral-800 md:bg-transparent z-40 w-full:z-0 p-2 gap-7 md:gap-0
          transform transition-transform duration-500 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 md:hidden text-black"
        >
          {isOpen && (
            <IoMdClose className="text-3xl text-white rounded-full w-10 h-10 p-1.5 border-t-2 border-b border-white" />
          )}
        </button>
        {links.map((link) => (
          <NavLink
            to={link.to}
            key={link.name}
            onClick={() => setIsOpen(false)}
            className={`md:px-4 lg:px-5 transition-all duration-300 bg-linear-to-r px-2 mx-1 py-1 uppercase hover:font-bold ${scrolling ? "text-white" : "text-black"}`}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="flex justify-end w-1/4 md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <CgMenuLeft
            className={`text-3xl ${isHome && scrolling ? "text-white" : "text-black"}`}
          />
        </button>
      </div>
    </header>
  );
}
