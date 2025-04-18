import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { RecentCardsItems } from '../lib/reuse/RecentCardsItem';

function RecentCards() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const cardWidth = 360;
  const totalCards = RecentCardsItems.length;

  const handleScroll = () => {
    const nextIndex = (index + 1) % totalCards;
    setIndex(nextIndex);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full py-10">
        <h1 className='text-3xl font-extrabold text-[#1E1E1E] mx-8 xl:ml-[380px] mb-5 font-lexend'>Recents avtivities</h1>
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth px-12"
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
          >
            {RecentCardsItems.map((item, i) => (
              <div
                key={i}
                className="bg-secondary rounded-xl p-7 min-w-[340px] max-w-[340px] flex-shrink-0 relative"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Profile */}
                <div className="flex items-center gap-3 mb-3">
                    <div className='bg-foreground rounded-full px-2 py-2 w-fit'>
                        <img
                        src={item.profile}
                        alt="profile"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    </div>
                  
                  <div>
                    <h2 className="text-base font-semibold font-roboto capitalize text-default">{item.name}</h2>
                    <p className="text-sm text-[#8A8A8A] font-roboto">{item.address}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-3">
                  <img src={item.ratingimage} alt="rating" className="h-5" />
                  <span className="text-sm text-[#343434] font-roboto">{item.date}</span>
                </div>

                {/* Description */}
                <div className="text-sm text-[#5E5E5E] mb-3 font-roboto">
                  <p className="mb-2">{item.sub1}</p>
                  <p>{item.sub2}</p>
                </div>

                {/* Images */}
                <div className="flex gap-2 mb-3 ">
                  {item.image.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`recent-${idx}`}
                      className="w-24 h-20 object-cover hover:scale-105 transition-all duration-300"
                    />
                  ))}
                </div>

                {/* Discover */}
                <p className="text-sm font-lexend font-semibold underline text-default cursor-pointer">
                  {item.discover}
                </p>
              </div>
            ))}
          </div>

          {/* Single Right Arrow (infinite loop) */}
          <button
            onClick={handleScroll}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-foreground border shadow-md rounded-full p-3 lg:p-5 z-10"
          >
            <Icon icon="mdi:arrow-right" width="22" height="22" className='text-[#2C2C2C] lg:w-[35px] lg:h-[35px]' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentCards;
