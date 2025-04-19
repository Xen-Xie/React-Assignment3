import { Button } from "@heroui/react";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "../lib/utlities";

const sortOptions = ["All feedbacks", "Highest rated", "Oldest rated"];

function SortButton({children,className}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All feedbacks");

  return (
    <div className={cn("relative inline-block text-left font-roboto",className)}>
      {/* Sort Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("flex items-center gap-2 px-5 py-2 sm:py-1 rounded-full text-foreground transition-all duration-300 bg-[#5D5D5D]",className)}
      >
        {children}
      </Button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 w-48 right-0 bg-foreground border border-[#E6E6E6] rounded-xl shadow-md z-10 p-4">
          {/* Close Button aligned to the right */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-8 h-8 bg-[#D9D9D9]/40 rounded-full text-[#717171] hover:text-[#717171]/65 transition-all"
            >
              <X size={18} />
            </button>
          </div>

          <ul className="mt-2 space-y-2">
            {sortOptions.map((option) => (
              <li
                key={option}
                className={`cursor-pointer px-2 py-1 rounded-md ${
                  selected === option
                    ? "text-[#2146C7] font-medium bg-[#B0C2FF]/15"
                    : "text-[#5D5D5D] hover:bg-gray-100"
                }`}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortButton;
