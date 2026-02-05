import Brands from "../components/Brands";
import ImageComparisonSlider from "../components/ImageCompaisonSlider";
import Intro from "../components/Intro";
import Services from "../components/Services";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionLayout from "../components/SectionLayout";
import { MdBatteryChargingFull } from "react-icons/md";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { RiLinksFill } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import {
  BkcSection,
  NexsaSection,
  SancySection,
} from "../components/SectionLayout";

const sections = [
  Intro,
  // ImageComparisonSlider,
  // Brands,
  // SancyBattery,
  BkcSection,
  NexsaSection,
  SancySection,
  // Categories,
  // Services,
];

export default function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const onWheel = (e) => {
      if (isAnimating.current) return;

      if (e.deltaY > 0 && activeIndex < sections.length - 1) {
        isAnimating.current = true;
        setActiveIndex((i) => i + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        isAnimating.current = true;
        setActiveIndex((i) => i - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-white">
      <div className="relative w-full h-full perspective-distant">
        {sections.map((Section, i) => {
          const isActive = i === activeIndex;
          const isBelow = i > activeIndex;
          return (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={false}
              animate={{
                y: isBelow ? "120%" : 0,
                scale: isActive ? 1 : 0.94,
                opacity: isBelow ? 0 : 1,
                zIndex: i,
                boxShadow: isActive
                  ? "0 40px 80px rgba(0,0,0,0.25)"
                  : "0 10px 30px rgba(0,0,0,0.15)",
              }}
              transition={{
                type: "spring",
                stiffness: 90, // 70
                damping: 22, // 26
                mass: 1.4, // 1.4
              }}
              onAnimationComplete={() => {
                isAnimating.current = false;
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Section />
            </motion.div>
          );
        })}
      </div>
    </div>
    // <section className="w-full flex justify-center align-middle flex-col">
    //   <Intro />
    //     <ImageComparisonSlider />
    //     <Brands />
    //     <SancyBattery />
    //     <Categories />
    //     <Services />
    // </section>
  );
}
function SancyBattery() {
  const features = [
    { title: "Overcharge Protection", icon: MdBatteryChargingFull },
    { title: "Temperature Protection", icon: LiaTemperatureHighSolid },
    { title: "Durable", icon: RiLinksFill },
    { title: "Rust Protection", icon: GoShieldCheck },
  ];
  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-2 p-10 h-full"
      style={{
        backgroundColor: "#C5939D",
      }}
    >
      <div className="order-2 md:order-1 w-full flex flex-col justify-center items-center gap-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            Icon={feature.icon}
            title={feature.title}
          />
        ))}
      </div>
      <div className="order-1 md:order-2 flex justify-center items-center">
        <img
          src="/images/sancy-battery.png"
          className="object-contain"
          style={{
            filter: "drop-shadow(15px 15px 15px black)",
          }}
        />
      </div>
    </div>
  );
}

function FeatureCard({ Icon, title }) {
  return (
    <div className=" flex justify-start items-center p-2 rounded-full w-full lg:w-3/4">
      <Icon className="text-4xl md:text-6xl bg-neutral-800 rounded-full p-3 text-white" />
      <h4 className="text-black font-semibold text-left tracking-tighter md:text-2xl lg:text-3xl px-4">
        {title}
      </h4>
    </div>
  );
}
