// import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function SectionLayout({ images, title, desc, robot }) {
  const bgColor =
    title === "BKC"
      ? "from-[#f4793a] to-[#ffbc9a]"
      : title === "NEXSA"
        ? "from-[#c9a326] to-[#e4d2a0]"
        : "from-[#376fd1] to-[#afcdfe]";
  return (
    <div
      className={`h-screen w-full grid grid-cols-1 lg:grid-cols-2 p-4 md:p-10 ${bgColor} bg-linear-to-br lg:bg-linear-to-r gap-5`}
    >
      {/* <NavLink
          to="/bkc-section"
          className={`px-4 py-2 bg-white rounded-md mx-2 mt-4 font-semibold uppercase hover:scale-130 transition-transform duration-300 ${title === "BKC" ? "text-[#f4793a]" : title === "NEXSA" ? "text-[#c9a326]" : "text-[#376fd1]"}`}
        >
          Explore
        </NavLink> */}
      {/* <div className="w-full flex flex-col justify-center items-start">
        <h3 className="text-[5rem] md:text-[12rem] px-5 lg:px-10 font-bold text-white" >
          {title}
        </h3>
        <p className="w-full lg:px-12 lg:w-3/4 text-white tracking-tighter px-3">
          {desc}
        </p>
      </div> */}
      <div className="w-full flex flex-col justify-center items-start overflow-hidden relative">
        <div className="absolute right-0">
          <img src={robot} alt="Robot" className="opacity-30 w-50 lg:w-100" />
        </div>
        <motion.h3
          className="text-[5rem] md:text-[12rem] px-5 lg:px-10 font-bold text-white"
          initial={{
            opacity: 0,
            y: 120,
            rotateX: 25,
            rotateZ: -6,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateZ: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="w-full lg:px-12 lg:w-3/4 text-white tracking-tighter px-3"
          initial={{
            opacity: 0,
            y: 10,
            rotateZ: -3,
            filter: "blur(6px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateZ: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.25,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {desc}
        </motion.p>
      </div>
      <div className="mx-auto grid grid-cols-2 place-content-center gap-4">
        {images.map((img) => (
          <div className="sm:w-60 sm:h-60">
            <motion.div
              className="perspective-distant"
              initial={{
                opacity: 0,
                rotateX: -90,
                rotateY: 60,
              }}
              whileInView={{
                opacity: 1,
                rotateX: 0,
                rotateY: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div
                className="relative inline-block rounded-lg overflow-hidden"
                // animate={{ y: [0, -10, 0] }}
                // transition={{
                //   duration: 3,
                //   repeat: Infinity,
                //   ease: "easeInOut",
                // }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="object-contain drop-shadow-2xl rounded-lg block"
                />

                <div
                  className="
                    absolute bottom-0 left-0 w-full
                    h-[30%]
                    flex items-center justify-center
                    bg-linear-to-t
                    from-black/60
                    to-black/0
                    pointer-events-none
                "
                >
                  <h5 className="text-lg font-semibold text-gray-100 tracking-wide">
                    {img.title}
                  </h5>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BkcSection() {
  const images = [
    { src: "/images/bkc-battery.jpeg", title: "BKC Battery" },
    { src: "/images/bkc-displays.jpeg", title: "BKC Display" },
    { src: "/images/bkc-displays.jpeg", title: "BKC Middle Frame" },
    { src: "/images/bkc-spare-parts.jpeg", title: "BKC Spare Parts" },
  ];
  const title = "BKC";
  const desc =
    "At BKC, we believe in the power of smartphones. That's why we're proud to bring you the best-in-industry smartphone LCDs, displays, batteries, and spare parts. We know it can be hard to find the right smartphone LCD screen at the right price-and that's why we've made it our mission to offer a wide range of options for every budget.";
  return (
    <SectionLayout
      images={images}
      title={title}
      desc={desc}
      robot="/images/bkc-robot.png"
    />
  );
}

function NexsaSection() {
  const images = [
    { src: "/images/nexsa-battery.jpeg", title: "NEXSA Battery" },
    { src: "/images/nexsa-displays.jpeg", title: "NEXSA Display" },
    { src: "/images/nexsa-displays.jpeg", title: "NEXSA Middle Frame" },
    { src: "/images/nexsa-spare-parts.jpeg", title: "NEXSA Spare Parts" },
  ];
  const title = "NEXSA";
  const desc =
    "At NEXSA, we believe in the power of smartphones. That's why we're proud to bring you the best-in-industry smartphone LCDS, displays, batteries, and spare parts. We know it can be hard to find the right smartphone LCD screen at the right price-and that's why we've made it our mission to offer a wide range of options for every budget.";
  return (
    <SectionLayout
      images={images}
      title={title}
      desc={desc}
      robot="/images/nexsa-robot.png"
    />
  );
}

function SancySection() {
  const images = [
    { src: "/images/sancy-battery.jpeg", title: "SANCY Battery" },
    { src: "/images/sancy-displays.jpeg", title: "SANCY Display" },
    { src: "/images/sancy-displays.jpeg", title: "SANCY Middle Frame" },
    { src: "/images/sancy-spare-parts.jpeg", title: "SANCY Spare Parts" },
  ];
  const title = "SANCY";
  const desc =
    "At SANCY, we believe in the power of smartphones. That's why we're proud to bring you the best-in-industry smartphone LCDS, displays and batteries. We know it can be hard to find the right smartphone LCD screen at the right price-and that's why we've made it our mission to offer a wide range of options for every budget.";
  return (
    <SectionLayout
      images={images}
      title={title}
      desc={desc}
      robot="/images/sancy-robot.png"
    />
  );
}

export { BkcSection, NexsaSection, SancySection };
