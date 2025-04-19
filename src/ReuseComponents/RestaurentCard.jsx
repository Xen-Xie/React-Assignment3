import React from "react";
import { ResCardItems } from "../lib/reuse/ResCardItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function RestaurentCard() {
  return (
    <div className="p-2 space-y-6">
      {ResCardItems.map((item, i) => (
        <div
          key={i}
          className={`flex max-w-full bg-foreground overflow-hidden font-roboto ${
            i !== ResCardItems.length - 1 ? "border-b pb-4" : ""
          } hover:scale-105 transition-all duration-300 cursor-pointer`}
        >
          {/* Carousel */}
          <div className="w-[40%] sm:w-[35%] md:w-[33%]">
            <div className="relative pt-[100%]">
              {" "}
              <div className="absolute inset-0">
                <Swiper
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="h-full w-full"
                >
                  {item.images.map((imgUrl, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={imgUrl}
                        alt={`slide-${idx}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Texts Area */}
          <div className="w-[60%] sm:w-[65%] md:w-[67%] p-2 sm:p-3 md:p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-default">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-tertiary mt-1 line-clamp-3">
                {item.subtitle}
              </p>
            </div>

            {/* Rating Area */}
            <div className="flex items-center gap-2 mt-3">
              <img
                src={item.rating}
                alt="Rating Stars"
                className="w-[70px] sm:w-[90px] md:w-[100px] h-auto"
              />
              <p className="text-xs sm:text-sm font-medium text-default">
                {item.ratingtitle}{" "}
                <span className="text-[#7A7A7A]">({item.ratingsub})</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurentCard;
