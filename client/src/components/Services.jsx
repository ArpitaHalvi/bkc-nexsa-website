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
    <section className="w-full p-5 flex flex-col justify-center items-center bg-black h-screen">
      <h2 className="text-bold text-2xl font-bold tracking-tighter uppercase">
        Features we offer
      </h2>
      {/* <div className="my-1 sm:my-3 w-30 h-1 bg-color mx-auto"></div> */}
      <div className="w-3/4 pt-10 sm:pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 ">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="w-full flex flex-col justify-start items-center gap-3 transition-transform duration-400 bg-white shadow-2xl rounded overflow-hidden relative h-70"
          >
            <h4 className="tracking-tighter w-full md:w-3/4 text-start font-bold leading-6 z-4 sm:pt-5 text-black text-2xl">
              {feature.title}
            </h4>
            <p
              className="text-black text-4xl sm:text-8xl z-4  p-6 h-50 sm:p-10 flex justify-center items-center absolute -bottom-10 left-0 right-0 rounded-t-full"
              style={{ backgroundColor: "#C5939D" }}
            >
              {feature.icon}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
