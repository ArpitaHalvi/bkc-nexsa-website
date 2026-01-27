export default function Brands() {
  const brands = [
    "/images/Samsung.png",
    "/images/Apple.png",
    "/images/Huawei.png",
    "/images/Realme.png",
    "/images/Samsung.png",
    "/images/Apple.png",
    "/images/Huawei.png",
    "/images/Realme.png",
  ];
  return (
    <section className="w-full mt-10 p-5 flex flex-col justify-center items-center">
      <h2 className="w-full sm:w-1/2 text-center md:w-full text-bold text-3xl font-bold tracking-tighter">
        Trusted by Leading Mobile Companies
      </h2>
      <div className="my-3 w-40 md:w-70 h-1 bg-amber-600 mx-auto"></div>
      <div className="fade-edges overflow-hidden w-full md:w-3/4 py-6">
        <div className="flex w-max gap-8 animate-conveyor">
          <div className="flex md:gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="w-40 h-24 flex items-center justify-center"
              >
                <img
                  src={brand}
                  alt="Brand Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set */}
          <div className="flex md:gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="w-40 h-24 flex items-center justify-center"
              >
                <img
                  src={brand}
                  alt="Brand Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
