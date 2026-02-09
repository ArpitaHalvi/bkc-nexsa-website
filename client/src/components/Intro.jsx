// import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const images = [
  "/images/cc-board-1.png",
  "/images/bkc-display.png",
  "/images/sancy-battery-front.png",
  "/images/bkc-display.png",
  "/images/nexsa-display.png",
  "/images/sancy-battery-front.png",
  "/images/nexsa-display.png",
  "/images/cc-board-1.png",
];

const cards = [
  { name: "Sancy Display", image: "/images/sancy-displays.png" },
  { name: "BKC Display", image: "/images/bkc-displays.png" },
  { name: "Sancy Battery", image: "/images/sancy-battery.png" },
  { name: "BKC Battery", image: "/images/bkc-battery.png" },
  { name: "Nexsa Battery", image: "/images/nexsa-battery.png" },
  { name: "Sancy Battery", image: "/images/sancy-battery.png" },
  { name: "Nexsa Display", image: "/images/nexsa-displays.png" },
];

function CylinderCarousel() {
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(290);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 480) setRadius(210);
      else if (width < 640) setRadius(230);
      else if (width < 768) setRadius(250);
      else setRadius(290);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.5);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const cardAngle = 360 / cards.length;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-transparent">
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: "2500px" }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(-10deg) rotateZ(-15deg) rotateY(${rotation}deg)`,
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
          }}
          className={`relative transition-transform`}
        >
          {cards.map((card, index) => {
            const angle = index * cardAngle + (rotation % 360);
            // const rad = (angle * Math.PI) / 180;
            // const x = Math.cos(rad) * radius;
            // const z = Math.sin(rad) * radius;
            return (
              <div
                key={card.id}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  marginLeft: "-140px",
                  marginTop: "-150px",
                }}
                className="w-45 sm:w-50 h-55 sm:h-65 md:w-62.5 md:h-75"
              >
                <div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    style={{
                      transform: "rotateY(0deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    className="absolute inset-0 bg-black overflow-hidden shadow-2xl z-10"
                  >
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      <h3 className="text-xl text-gray-300 tracking-tighter leading-tight">
                        {card.name}
                      </h3>
                      <div className="w-full h-48 overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-60 h-full object-contain sm:object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    className="absolute inset-0 bg-neutral-800/60 shadow-2xl border border-gray-800"
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CurvedArc() {
  const radius = 250;
  const angleStep = 40;
  const startAngle = (-(images.length - 1) * angleStep) / 2;

  return (
    <div className="arc-scene">
      <div className="arc-rotator -rotate-15">
        {images.map((img, i) => (
          <div
            key={i}
            className="arc-face"
            style={{
              transform: `
                rotateY(${startAngle + i * angleStep}deg)
                translateZ(${radius}px)
              `,
            }}
          >
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Intro() {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      className="w-full flex flex-col gap-10 justify-center items-center relative overflow-hidden h-screen bg-[#f4793a]"
      ref={ref}
    >
      {/* <div className="absolute top-40 left-10 md:top-40 lg:top-20 md:left-30 lg:left-70">
        <h1 className="text-white text-6xl lg:text-9xl leading-tight tracking-tigher font-bold italic">
          BKC
        </h1>
        <hr className="w-1/2 text-white border-3" />
      </div> */}
      <div className="absolute top-10 sm:top-10 lg:-top-15 px-10">
        <h1 className="text-white text-[12rem] sm:text-[15rem] md:text-[25rem] lg:text-[44rem] leading-tight font-bold">
          BKC
        </h1>
      </div>
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <CylinderCarousel />
      </motion.div>
      {/* <CurvedArc /> */}
      <div className="absolute left-10 bottom-20 md:bottom-5 lg:bottom-5 text-white text-2xl">
        INDIA'S <span className="font-bold">No. 1</span> <br />
        Mobile Spare Part Brand
      </div>
      {/* <div className="absolute bottom-40 right-10 md:bottom-40 lg:bottom-20 md:right-20 lg:right-30">
        <h1 className="text-white text-6xl lg:text-9xl leading-tight tracking-tigher font-bold italic">
          NEXSA
        </h1>
        <hr className="absolute w-1/2 text-white border-3" />
      </div> */}
    </section>
  );
}

{
  /* <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div> */
}

{
  /* <div className="absolute -left-160 top-50 w-full h-full -z-10 overflow-hidden rotate-45 transition-all duration-500">
        <img
          src="/images/bkc-display.png"
          alt="BKC Display"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute -right-160 top-50 w-full h-full -z-10 overflow-hidden -rotate-45">
        <img
          src="/images/nexsa-display.png"
          alt="Nexsa Display"
          className="w-full h-full object-contain"
        />
      </div> */
}
{
  /* <div className="absolute -left-160 top-70 w-full h-full -z-10 overflow-hidden rotate-45 transition-all duration-500 animate-[slideInLeft_2s_ease-out]">
        <img
          src="/images/bkc-display.png"
          alt="BKC Display"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute  -left-140 -top-70 w-full h-full -z-10 overflow-hidden rotate-130 transition-all duration-500 animate-[slideInLeft_2s_ease-out]">
        <img
          src="/images/ringer.png"
          alt="BKC Display"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute -right-180 -top-40 w-full h-full -z-10 overflow-hidden rotate-230 animate-[slideInRight_2s_ease-out_0.2s_both]">
        <img
          src="/images/nexsa-display.png"
          alt="Nexsa Display"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute -right-160 top-80 w-full h-full -z-10 overflow-hidden rotate-23 animate-[slideInRight_2s_ease-out_0.2s_both]">
        <img
          src="/images/cc-board-1.png"
          alt="Nexsa Display"
          className="w-full h-full object-contain"
        />
      </div> */
}

{
  /* <div className="z-10 flex flex-col items-center justify-center gap-3 px-5 sm:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl w-full max-w-2xl font-bold text-center tracking-tighter  text-transparent bg-clip-text bg-linear-to-br from-amber-700 via-amber-500 to-neutral-100 animate-text">
          Discover premium mobile spare parts and accessories
        </h1>
        <p className="text-center text-xs md:text-base w-full max-w-xl text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <NavLink
          to="/about"
          // className="text-white py-2 px-4 text-sm sm:text-md md:px-7 md:py-2 bg-amber-700 rounded-md md:text-lg font-semibold hover:bg-white hover:text-amber-700 transition-all duration-300"
          className="relative inline-block rounded-md p-0.5 bg-linear-to-r from-amber-400 via-amber-700 to-white animate-border"
        >
          <span className="block rounded-md bg-white py-2 px-4 text-sm sm:text-md md:px-7 md:py-2 md:text-lg font-semibold hover:bg-white text-black transition-all duration-300">
            Learn More
          </span>
        </NavLink>
      </div> */
}
{
  /* <AnimatePresence>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "tween", duration: 1.5, ease: "easeOut" }}
          className="m-3 h-50 sm:m-0 sm:h-full sm:w-3/4 rounded-2xl overflow-hidden shadow-lg shadow-gray-400 bg-transparent"
        >
          
        </motion.div>
      </AnimatePresence> */
}
