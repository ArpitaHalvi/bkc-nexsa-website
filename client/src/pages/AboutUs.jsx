import { useEffect } from "react";

export default function AboutUs() {
  const stats = [
    { label: "Customers", value: "3500+" },
    { label: "Distributors", value: "800+" },
    { label: "Stores", value: "20+" },
    { label: "Years of Experience", value: "0" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">
      <section className="w-full px-5 md:pl-10 lg:pl-20 flex flex-col justify-center mt-20">
        <div className="py-5">
          <h4 className="text-xl font-bold mb-1 sm:mb-4 tracking-tighter">
            About us
          </h4>
          <div className="w-1/4 h-0.5 bg-amber-600"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          Lorem ipsum dolor sit amet consectetur maiores!
        </h2>
        <p className="text-md w-full sm:w-3/4 pt-2 pb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae odit in
          Lorem ipsum dolor sit amet. dicta repellat modi.
        </p>
        <h3 className="text-2xl font-bold tracking-tighter">Our Mission</h3>
        <p className="pt-2 w-full md:w-3/4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
          amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          consectetur reprehenderit officiis cumque unde adipisci, debitis cum
          modi ratione fugit nihil necessitatibus earum expedita sint natus
          laborum assumenda eos, doloremque illum alias doloribus, voluptatem
          quia laudantium! Tenetur, provident molestias, minus quisquam facere
          repellendus qui voluptatum vel error suscipit commodi beatae velit
          tationem iste sed consectetur! Quia veritatis voluptates eligendi
          blanditiis. Consequatur.
        </p>
      </section>
      <div className="w-full flex flex-col justify-center items-center mt-20">
        <div className="grid grid-cols-2 w-full md:w-3/4 items-center text-center py-10 px-5 md:gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="py-5">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-semibold tracking-tighter">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
