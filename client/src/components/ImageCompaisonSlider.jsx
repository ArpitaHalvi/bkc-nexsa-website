import { useEffect, useRef, useState } from "react";

export default function ImageComparisonSlider() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const animationRef = useRef(null);
  const directionRef = useRef(1);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        let next = prev + directionRef.current * 0.15;
        if (next >= 80) directionRef.current = -1;
        if (next <= 20) directionRef.current = 1;
        return next;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Mouse move handler
  const handleMove = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, percent)));
  };

  return (
    <div className="px-10 lg:px-0 w-full flex justify-center py-20 bg-black h-screen">
      <div
        ref={containerRef}
        className="relative w-300 h-150 overflow-hidden rounded-xl select-none shadow-lg"
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        <img
          src="/images/comparison-img-1.png"
          alt="Old"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/images/comparison-img-2.png"
          alt="New"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        />
        <div
          className="absolute top-0 bottom-0 z-20"
          style={{ left: `${position}%` }}
        >
          <div className="w-0.5 h-full bg-white shadow-md" />
          <div
            onMouseDown={() => setIsDragging(true)}
            className="absolute top-1/2 -left-3 -translate-y-1/2
                       w-6 h-6 rounded-full bg-white shadow-lg
                       cursor-ew-resize flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-gray-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
