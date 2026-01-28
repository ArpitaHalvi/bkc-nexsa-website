import { MdVerified } from "react-icons/md";
import { FaShippingFast, FaShieldAlt, FaUserCog } from "react-icons/fa";

export default function Services() {
  const features = [
    {
      icon: <MdVerified style={{ filter: "drop-shadow(6px 0px black)" }} />,
      title: "Original & High-Quality Spare Parts",
    },
    {
      icon: <FaShippingFast style={{ filter: "drop-shadow(6px 0px black)" }} />,
      title: "Fast & reliable shipping",
    },
    {
      icon: <FaShieldAlt style={{ filter: "drop-shadow(6px 0px black)" }} />,
      title: "Warranty on all parts",
    },
    {
      icon: <FaUserCog style={{ filter: "drop-shadow(6px 0px black)" }} />,
      title: "Dedicated support for technicians",
    },
  ];
  return (
    <section className="w-full p-5 flex flex-col justify-center items-center mt-20">
      <h2 className="text-bold text-2xl font-bold tracking-tighter">
        Features we offer
      </h2>
      <div className="my-1 sm:my-3 w-30 h-1 bg-amber-600 mx-auto"></div>
      <div className="w-full md:w-3/4 p-4 pt-10 sm:pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded w-full h-40 flex flex-col justify-start items-center gap-3 relative transition-transform duration-400 hover:-translate-y-6.25"
          >
            {/* <div className="absolute left-60 md:left-40 top-5 lg:left-30 w-15 h-15 bg-amber-600 z-1 rounded-b-4xl rounded-tl-4xl opacity-30 hidden md:block"></div> */}
            <p className="text-white text-4xl sm:text-6xl z-4 shadow-2xl p-6 sm:p-7 rounded-full border-2 bg-amber-600 flex justify-center items-center">
              {feature.icon}
            </p>
            <h4 className="font-semibold tracking-tighter w-full md:w-3/4 text-center leading-tight z-4 sm:pt-5 text-black">
              {feature.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
