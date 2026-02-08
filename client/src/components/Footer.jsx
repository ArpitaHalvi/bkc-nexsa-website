import { NavLink, useLocation } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const isHome = useLocation().pathname === "/";
  const year = new Date().getFullYear();
  const legalLinks = [
    { name: "Privacy Policy", to: "/" },
    { name: "Terms and Conditions", to: "/" },
  ];
  const supportLinks = [
    { name: "FAQ", to: "/" },
    { name: "Refund Policy", to: "/" },
  ];
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
  ];
  return (
    <footer
      className={`w-full bg-neutral-800 text-white py-8 lg:pt-12 ${!isHome && "mt-10"}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-6 lg:px-10 max-w-8xl mx-auto">
        <div className="flex flex-col py-5 lg:py-0">
          <div className="text-white text-2xl p-1 font-extrabold w-40 py-2">
            <img
              src="/images/bkc-logo-bg-removed.png"
              alt="Brand Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-white text-sm p-1 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            mollitia, dolorum at maxime.
          </p>
          <p className="text-white text-sm p-1 mt-2">Email: xyz@gmail.com</p>
          <p className="text-white text-sm font-bold p-1">
            Phone: +91 9876543210
          </p>
        </div>

        <div className="flex flex-col justify-start lg:items-center">
          <h4 className="font-bold text-white lg:mb-4 mb-1">Support</h4>
          {supportLinks.map((link, index) => (
            <NavLink
              to={link.to}
              key={link.name + index + 1}
              className="text-white text-sm py-1 lg:py-2 hover:text-gray-300 transition-colors "
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col justify-start lg:items-center">
          <h4 className="font-bold text-white lg:mb-4 mb-1">Company</h4>
          {quickLinks.map((link, index) => (
            <NavLink
              to={link.to}
              key={link.name + index + 1}
              className="text-white text-sm py-1 lg:py-2 hover:text-gray-300 transition-colors"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col justify-start lg:items-center">
          <h4 className="font-bold text-white lg:mb-4 mb-1">Legal</h4>
          {legalLinks.map((link, index) => (
            <NavLink
              to={link.to}
              key={link.name + index + 1}
              className="text-white text-sm py-1 lg:py-2 hover:text-gray-300 transition-colors"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      <hr className="my-6 mx-4 sm:mx-6 lg:mx-8 border-t border-zinc-700" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-10 max-w-8xl mx-auto">
        <p className="text-sm text-center md:text-left">
          &copy; {year} BKC. All rights reserved.
        </p>
        <div className="flex justify-center gap-4">
          <a href="" className="text-white text-2xl">
            <FaInstagram />
          </a>
          <a href="" className="text-white text-2xl">
            <FaFacebook />
          </a>
          <a href="" className="text-white text-2xl">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
