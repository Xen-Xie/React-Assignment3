import React, { useState } from 'react';
import { Icons } from '../lib/reuse/Icons';

function IconArea() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="font-roboto grid grid-cols-6 md:grid-cols-12 gap-4">
      {Icons.map((items, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
              isActive ? 'text-primary' : 'text-[#AFAFAF] hover:text-primary'
            }`}
          >
            <div
              className="w-6 h-6 mb-0 sm:mb-1 flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: items.image }}
            />
            <span
              className={`text-xs md:text-sm leading-none mt-1 ${
                isActive ? 'border-b-2 border-primary' : ''
              }`}
            >
              {items.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default IconArea;
