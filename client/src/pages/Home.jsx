// import Brands from "../components/Brands";
// import ImageComparisonSlider from "../components/ImageCompaisonSlider";
// import Services from "../components/Services";
// import SectionLayout from "../components/SectionLayout";
import Intro from "../components/Intro";
import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
import { MdBatteryChargingFull } from "react-icons/md";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { RiLinksFill } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import {
  BkcSection,
  NexsaSection,
  SancySection,
} from "../components/SectionLayout";
import Footer from "../components/Footer";

// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);
const sections = [Intro, BkcSection, NexsaSection, SancySection];

export default function Home() {
  const [activeCount, setActiveCount] = useState(0);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let count = 0;
      const triggerPoint = window.innerHeight * 0.55;
      sectionRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint) count++;
      });

      setActiveCount(count);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-orange-500 w-full overflow-clip">
      {sections.map((SectionComponent, i) => (
        <>
          <StackSection
            key={i}
            refProp={(el) => (sectionRefs.current[i] = el)}
            index={i}
            totalSections={sections.length}
            activeCount={activeCount}
            component={SectionComponent}
          />
          <div className="h-100"></div>
        </>
      ))}
    </div>
  );
}

function StackSection({
  refProp,
  index,
  totalSections,
  activeCount,
  component: Component,
}) {
  const isActive = index < activeCount;
  const zIndex = (totalSections + index) * 10;

  return (
    <div
      ref={refProp}
      className={`
        w-full
        h-screen
        transition-all
        duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
        // flex items-center justify-center
        z-${zIndex}
        ${isActive ? "sticky rotate-0" : `relative ${index === 0 ? "rotate-0" : "rotate-12"}`}
      `}
      style={{
        top: isActive ? "0px" : "auto",
        zIndex: zIndex,
      }}
    >
      {Component && <Component />}
    </div>
  );
}

// export default function Home() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const isAnimating = useRef(false);
//   const scrollRef = useRef(null);
//   const touchStartY = useRef(0);

//   useEffect(() => {
//     const onWheel = (e) => {
//       e.preventDefault();

//       if (isAnimating.current) return;
//       if (!scrollRef.current) return;

//       const el = scrollRef.current;
//       const atTop = el.scrollTop === 0;
//       const atBottom =
//         Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 1;

//       // Scroll down to next section
//       if (e.deltaY > 0 && atBottom && activeIndex < sections.length - 1) {
//         isAnimating.current = true;
//         setActiveIndex((i) => i + 1);
//         setTimeout(() => {
//           isAnimating.current = false;
//         }, 1000);
//       }

//       // Scroll up to previous section
//       if (e.deltaY < 0 && atTop && activeIndex > 0) {
//         isAnimating.current = true;
//         setActiveIndex((i) => i - 1);
//         setTimeout(() => {
//           isAnimating.current = false;
//         }, 1000);
//       }
//     };

//     // Touch support for mobile
//     const onTouchStart = (e) => {
//       touchStartY.current = e.touches[0].clientY;
//     };

//     const onTouchMove = (e) => {
//       if (isAnimating.current) return;
//       if (!scrollRef.current) return;

//       const touchEndY = e.touches[0].clientY;
//       const deltaY = touchStartY.current - touchEndY;
//       const el = scrollRef.current;
//       const atTop = el.scrollTop === 0;
//       const atBottom =
//         Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 1;

//       if (deltaY > 50 && atBottom && activeIndex < sections.length - 1) {
//         isAnimating.current = true;
//         setActiveIndex((i) => i + 1);
//         setTimeout(() => {
//           isAnimating.current = false;
//         }, 1000);
//       }

//       if (deltaY < -50 && atTop && activeIndex > 0) {
//         isAnimating.current = true;
//         setActiveIndex((i) => i - 1);
//         setTimeout(() => {
//           isAnimating.current = false;
//         }, 1000);
//       }
//     };

//     window.addEventListener("wheel", onWheel, { passive: false });
//     window.addEventListener("touchstart", onTouchStart, { passive: true });
//     window.addEventListener("touchmove", onTouchMove, { passive: true });

//     return () => {
//       window.removeEventListener("wheel", onWheel);
//       window.removeEventListener("touchstart", onTouchStart);
//       window.removeEventListener("touchmove", onTouchMove);
//     };
//   }, [activeIndex]);

//   // Reset scroll position when changing sections
//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = 0;
//     }
//   }, [activeIndex]);

//   return (
//     <div className="fixed inset-0 bg-[#f4793a]">
//       {/* Navigation dots */}
//       <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
//         {sections.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               if (!isAnimating.current) {
//                 isAnimating.current = true;
//                 setActiveIndex(i);
//                 setTimeout(() => {
//                   isAnimating.current = false;
//                 }, 1000);
//               }
//             }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               i === activeIndex
//                 ? "bg-white scale-125"
//                 : "bg-white/40 hover:bg-white/60"
//             }`}
//             aria-label={`Go to section ${i + 1}`}
//           />
//         ))}
//       </div>

//       <div className="relative w-full h-full">
//         {sections.map((Section, i) => {
//           const isActive = i === activeIndex;
//           const isPast = i < activeIndex;
//           const isFuture = i > activeIndex;

//           return (
//             <motion.div
//               key={i}
//               className="absolute inset-0 will-change-transform"
//               initial={false}
//               animate={{
//                 y: isFuture ? "100%" : isPast ? "-10%" : "0%",
//                 scale: isActive ? 1 : 0.95,
//                 opacity: isPast ? 0 : 1,
//                 filter: isActive ? "blur(0px)" : "blur(2px)",
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 25,
//                 mass: 1,
//                 opacity: { duration: 0.3 },
//                 filter: { duration: 0.3 },
//               }}
//               style={{
//                 zIndex: isActive ? 20 : isFuture ? 10 - i : 0,
//                 pointerEvents: isActive ? "auto" : "none",
//               }}
//             >
//               <div
//                 ref={isActive ? scrollRef : null}
//                 className="h-full overflow-y-auto overscroll-contain scrollbar-hide"
//                 style={{
//                   scrollbarWidth: "none",
//                   msOverflowStyle: "none",
//                 }}
//               >
//                 <Section />
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// <section className="w-full flex justify-center align-middle flex-col">
//   <Intro />
//     <ImageComparisonSlider />
//     <Brands />
//     <SancyBattery />
//     <Categories />
//     <Services />
// </section>

// function SancyBattery() {
//   const features = [
//     { title: "Overcharge Protection", icon: MdBatteryChargingFull },
//     { title: "Temperature Protection", icon: LiaTemperatureHighSolid },
//     { title: "Durable", icon: RiLinksFill },
//     { title: "Rust Protection", icon: GoShieldCheck },
//   ];
//   return (
//     <div
//       className="w-full grid grid-cols-1 md:grid-cols-2 p-10 h-full"
//       style={{
//         backgroundColor: "#C5939D",
//       }}
//     >
//       <div className="order-2 md:order-1 w-full flex flex-col justify-center items-center gap-3">
//         {features.map((feature) => (
//           <FeatureCard
//             key={feature.title}
//             Icon={feature.icon}
//             title={feature.title}
//           />
//         ))}
//       </div>
//       <div className="order-1 md:order-2 flex justify-center items-center">
//         <img
//           src="/images/sancy-battery.png"
//           className="object-contain"
//           style={{
//             filter: "drop-shadow(15px 15px 15px black)",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// function FeatureCard({ Icon, title }) {
//   return (
//     <div className=" flex justify-start items-center p-2 rounded-full w-full lg:w-3/4">
//       <Icon className="text-4xl md:text-6xl bg-neutral-800 rounded-full p-3 text-white" />
//       <h4 className="text-black font-semibold text-left tracking-tighter md:text-2xl lg:text-3xl px-4">
//         {title}
//       </h4>
//     </div>
//   );
// }
