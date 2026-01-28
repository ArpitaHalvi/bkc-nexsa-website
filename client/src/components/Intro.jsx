import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="w-full flex flex-col gap-10 justify-center items-center"
      ref={ref}
    >
      <AnimatePresence>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "tween", duration: 1.5, ease: "easeOut" }}
          className="z-10 w-full mt-25 sm:mt-35 p-5 sm:p-10 flex justify-center align-middle flex-col"
        >
          <div className="mx-auto bg-amber-50 rounded-4xl">
            <p className="py-1 px-3 text-xs md:text-sm text-center md:py-2 md:px-5 text-amber-700 font-bold">
              Trusted by 4000+ wholesellers shops
            </p>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl w-full md:w-3/4 lg:w-1/2 mx-auto font-bold text-center tracking-tighter leading-tight">
            Discover premium mobile spare parts and accessories
          </h1>
          <p className="text-center text-xs md:text-base md:text-md md:w-3/4 lg:w-1/2 mx-auto pt-1 pb-2 md:py-3 tracking-tight leading-tight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nisi
            velit dolor numquam, alias error omnis fugiat neque quas nostrum
            Neque!
          </p>
          <NavLink
            to="/about"
            className="text-white py-2 px-4 text-sm sm:text-md md:px-7 mx-auto md:py-2 bg-amber-600 rounded-md md:text-lg font-semibold border-2  hover:bg-transparent hover:border-amber-600 hover:text-amber-600 transition-all duration-300"
          >
            Learn More
          </NavLink>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "tween", duration: 1.5, ease: "easeOut" }}
          className="m-3 h-50 sm:m-0 sm:h-full sm:w-3/4 rounded-2xl overflow-hidden shadow-lg shadow-gray-400 bg-transparent"
        >
          <video
            loop
            muted
            autoPlay
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
