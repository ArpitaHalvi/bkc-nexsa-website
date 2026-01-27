import { MdVerified } from "react-icons/md";
import { FaShippingFast, FaShieldAlt, FaUserCog } from "react-icons/fa";

export default function Services() {
  const features = [
    { icon: <MdVerified />, title: "Original & High-Quality Spare Parts" },
    { icon: <FaShippingFast />, title: "Fast & reliable shipping" },
    { icon: <FaShieldAlt />, title: "Warranty on all parts" },
    { icon: <FaUserCog />, title: "Dedicated support for technicians" },
  ];
  return (
    <section className="w-full p-5 flex flex-col justify-center items-center mt-20">
      <h2 className="text-bold md:text-3xl font-bold tracking-tighter">
        Features we offer
      </h2>
      <div className="w-3/4 flex p-4 pt-20 justify-center items-center gap-5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded w-full h-40 flex flex-col justify-start items-center gap-3 relative"
          >
            <div className="absolute top-5 left-30 w-15 h-15 bg-amber-600 z-1 rounded-b-4xl rounded-tl-4xl opacity-30"></div>
            <p className="text-black text-2xl md:text-7xl z-4">
              {feature.icon}
            </p>
            <h4 className="font-semibold tracking-tighter w-3/4 text-center leading-tight z-4 pt-5">
              {feature.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
