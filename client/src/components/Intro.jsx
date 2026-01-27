import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Intro() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 1, ease: "easeOut" }}
        className="w-full mt-15 p-10 flex justify-center align-middle flex-col h-screen"
      >
        <div className="mx-auto bg-amber-50 rounded-4xl">
          <p className="py-1 px-3 text-xs md:text-sm text-center md:py-2 md:px-5 text-amber-700 font-bold">
            Trusted by 4000+ wholesellers shops
          </p>
        </div>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl w-full md:w-3/4 lg:w-1/2 mx-auto font-bold text-center tracking-tighter">
          Discover premium mobile spare parts and accessories
        </h1>
        <p className="text-center text-xs md:text-base md:text-md md:w-3/4 lg:w-1/2 mx-auto pt-1 pb-2 md:py-3 tracking-tight">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nisi
          velit dolor numquam, alias error omnis fugiat neque quas nostrum eius
          optio esse quibusdam corrupti perferendis! Quaerat vero ratione, quam
          aliquam necessitatibus soluta quibusdam distinctio. Neque!
        </p>
        <NavLink
          to="/about"
          className="text-white py-1 px-4 text-md md:px-7 mx-auto md:py-2 bg-amber-600 rounded-md md:text-lg font-semibold border-2  hover:bg-transparent hover:border-amber-600 hover:text-amber-600 transition-all duration-300"
        >
          Learn More
        </NavLink>
      </motion.div>
    </AnimatePresence>
  );
}
