import React from "react";

function Discover() {
  const items = [
    {
      image: "/D1.svg",
      title: "The melt",
      sub: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: "/b3.5.svg",
      rt: "3.5",
      rs: "(334 reviews)",
    },
    {
      image: "/D2.svg",
      title: "Lokma",
      sub: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: "/5Star.svg",
      rt: "5.0",
      rs: "(253 reviews)",
    },
    {
      image: "/D3.svg",
      title: "The snug",
      sub: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: "/4.5Star.svg",
      rt: "4.5",
      rs: "(654 reviews)",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-roboto">
      <h2 className="text-3xl font-extrabold mb-6 font-lexend">Also discover...</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#F8F8F8] rounded-xl shadow-sm overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              {/* Dots overlay (simulate carousel dots) */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <div
                    key={dot}
                    className={`w-2 h-2 rounded-full ${
                      dot === 0 ? "bg-foreground" : "bg-[#D9D9D9]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-default">{item.title}</h3>
              <p className="text-sm text-[#8F8F8F]">{item.sub}</p>
              <div className="flex items-center gap-2 mt-2">
                <img src={item.rating} alt="Rating stars" className="h-5" />
                <span className="text-sm font-semibold text-default-50">{item.rt}</span>
                <span className="text-sm text-[#7A7A7A]">{item.rs}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
