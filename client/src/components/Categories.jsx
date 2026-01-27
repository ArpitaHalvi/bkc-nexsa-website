import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    "Mobile Phone Screen",
    "Mobile Spare Parts",
    "Mobile Phone Battery",
    "Mobile Phone Body/Middle/Back Panel",
  ];
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <h2 className="w-full sm:w-1/2 text-center md:w-full text-bold text-3xl px-3 font-bold tracking-tighter">
        Explore Our Product Categories
      </h2>
      <div className="my-3 w-40 md:w-70 h-1 bg-amber-600 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-3/4 py-10 px-10 sm:px-20 lg:p-5 gap-4 sm:gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="border w-full h-50 sm:h-80 border-gray-300 rounded-lg py-5 flex justify-center items-center hover:shadow-lg transition-all duration-300 hover:translate-y-1.25 cursor-pointer relative"
          >
            <span className="text-md py-2 font-medium absolute bottom-0 w-full tracking-tighter bg-white rounded-b-lg text-center">
              {category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
