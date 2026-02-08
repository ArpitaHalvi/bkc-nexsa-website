import { useEffect, useState, useRef } from "react";

export default function ScrollAnimation() {
  const [activeCount, setActiveCount] = useState(0);

  const pinkRef = useRef(null);
  const purpleRef = useRef(null);
  const yellowRef = useRef(null);
  const greenRef = useRef(null);

  const refs = [pinkRef, purpleRef, yellowRef, greenRef];

  useEffect(() => {
    const handleScroll = () => {
      let count = 0;
      // ===================== ADDED =====================
      // This defines *when* the animation should trigger.
      // 0.55 = slightly AFTER entering the viewport (55% of screen height)
      const triggerPoint = window.innerHeight * 0.55;
      // ===================== ADDED =====================
      refs.forEach((ref) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        // -------------------------------
        // NEW: detect viewport entry
        // -------------------------------
        if (rect.top <= triggerPoint) count++;
        // -------------------------------
        // Existing sticky logic (unchanged)
        // -------------------------------
        // if (rect.top <= 0) count++;
      });

      setActiveCount(count);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-orange-500 w-full overflow-clip">
      {/* Initial spacer */}

      <StackSection
        refProp={pinkRef}
        index={0}
        totalSections={4}
        activeCount={activeCount}
        color="bg-pink-400"
        label="First (Pink)"
      />
      <div className="h-100"></div>
      <StackSection
        refProp={purpleRef}
        index={1}
        totalSections={4}
        activeCount={activeCount}
        color="bg-purple-400"
        label="Second (Purple)"
      />
      <div className="h-100"></div>
      <StackSection
        refProp={yellowRef}
        index={2}
        totalSections={4}
        activeCount={activeCount}
        color="bg-yellow-400"
        label="Third (Yellow)"
      />
      <div className="h-100"></div>
      <StackSection
        refProp={greenRef}
        index={3}
        totalSections={4}
        activeCount={activeCount}
        color="bg-green-400"
        label="Last (Green)"
      />
      {/* <div className="h-screen"></div> */}
    </div>
  );
}

function StackSection({
  refProp,
  index,
  totalSections,
  activeCount,
  color,
  label,
}) {
  const isActive = index < activeCount;

  // Z-index: later cards appear on top (LIFO)
  const zIndex = (totalSections + index) * 10;

  return (
    <div
      ref={refProp}
      className={`
        ${color}
        w-full
        h-screen
        transition-all
        duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
        flex
        items-center
        justify-center
        text-4xl
        font-bold
        text-white
        z-${zIndex}
        ${isActive ? "sticky rotate-0" : "relative rotate-12"}
      `}
      style={{
        top: isActive ? "0px" : "auto", // All cards stick to top: 0px
        zIndex: zIndex,
      }}
    >
      <div className="w-full h-screen">{label}</div>
    </div>
  );
}

// import { useEffect, useState, useRef } from "react";

// export default function ScrollAnimation() {
//   const [isPinkSticky, setIsPinkSticky] = useState(false);
//   const [isPurpleSticky, setIsPurpleSticky] = useState(false);
//   const [isYellowSticky, setIsYellowSticky] = useState(false);
//   const [isGreenSticky, setIsGreenSticky] = useState(false);

//   const pinkRef = useRef(null);
//   const purpleRef = useRef(null);
//   const yellowRef = useRef(null);
//   const greenRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (pinkRef.current) {
//         const rect = pinkRef.current.getBoundingClientRect();
//         setIsPinkSticky(rect.top <= 0);
//       }
//       if (purpleRef.current) {
//         const rect = purpleRef.current.getBoundingClientRect();
//         setIsPurpleSticky(rect.top <= 0);
//       }
//       if (yellowRef.current) {
//         const rect = yellowRef.current.getBoundingClientRect();
//         setIsYellowSticky(rect.top <= 0);
//       }
//       if (greenRef.current) {
//         const rect = greenRef.current.getBoundingClientRect();
//         setIsGreenSticky(rect.top <= 0);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div className="bg-orange-500 w-full flex justify-center items-center flex-col overflow-hidden">
//       <div className="bg-transparent w-3/4 h-screen"></div>
//       <div
//         ref={pinkRef}
//         className={`bg-pink-400 w-full h-screen z-1 transform transition-all duration-700 ${isPinkSticky ? "sticky top-0 rotate-0" : "rotate-12"}`}
//       ></div>
//       <div
//         ref={purpleRef}
//         className={`bg-purple-400 w-full h-screen z-2 transform transition-all duration-700 ${isPurpleSticky ? "sticky top-0 rotate-0" : "rotate-12"}`}
//       ></div>
//       <div
//         ref={yellowRef}
//         className={`bg-yellow-400 w-full h-screen z-3 transform transition-all duration-700 ${isYellowSticky ? "sticky top-0 rotate-0" : "rotate-12"}`}
//       ></div>
//       <div
//         ref={greenRef}
//         className={`bg-green-400 w-full h-screen z-4 transform transition-all duration-700 ${isGreenSticky ? "sticky top-0 rotate-0" : "rotate-12"}`}
//       ></div>
//     </div>
//   );
// }
