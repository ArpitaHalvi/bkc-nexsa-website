import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
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
    <footer className="w-full flex justify-center align-middle flex-col bg-neutral-800 text-white py-5  fixed bottom-0">
      <div className="flex justify-around w-full p-4">
        <div className="flex flex-col justify-top w-1/4 px-5 py-3">
          <p className="text-white text-sm p-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            mollitia, dolorum at maxime.
          </p>
          <p className="text-white text-sm p-1">Email: xyz@gmail.com</p>
          <p className="text-white text-sm font-bold p-1">
            Phone: +91 9876543210
          </p>
        </div>
        <div className="flex flex-col justify-top w-1/4 p-4">
          <h4 className="font-bold text-white">Support</h4>
          {supportLinks.map((link) => (
            <NavLink
              to={link.to}
              className="text-white text-sm pt-5 hover:text-gray-300"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col justify-top w-1/4 p-4">
          <h4 className="font-bold text-white">Company</h4>
          {quickLinks.map((link) => (
            <NavLink
              to={link.to}
              className="text-white text-sm pt-5 hover:text-gray-300"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col justify-top w-1/4 p-4">
          <h4 className="font-bold text-white">Legal</h4>
          {legalLinks.map((link) => (
            <NavLink
              to={link.to}
              className="text-white text-sm pt-5 hover:text-gray-300"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
      <hr className="my-6 mx-5 border-t border-zinc-700" />
      <div className="flex justify-between align-middle w-full">
        <p className="w-1/2 px-5 text-sm">
          &copy; {year} <span className="text-amber-400">BKC & NEXSA.</span> All
          rights reserved.
        </p>
        <div className="flex justify-end align-middle w-1/2 px-10">
          <a to="" className="text-white px-2 text-lg">
            <FaInstagram />
          </a>
          <a to="" className="text-white px-2 text-lg">
            <FaFacebook />
          </a>
          <a to="" className="text-white px-2 text-lg">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
