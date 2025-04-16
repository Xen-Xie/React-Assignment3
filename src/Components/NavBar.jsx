import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { filterData } from "../lib/reuse/filter";
import SearchBar from "../ReuseComponents/SearchBar";
import { Button } from "@heroui/react";
function NavBar() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [focused, setFocused] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const clearInputs = () => {
    setQuery("");
    setLocation("");
    setHasSearched(false);
  };

  const handleSearch = () => {
    if (query.trim() || location.trim()) {
      setHasSearched(true);
    }
  };

  const filtered = filterData.filter((item) => {
    const nameMatch = item.name
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const locationMatch = item.location
      .toLowerCase()
      .includes(location.trim().toLowerCase());
    return (!query || nameMatch) && (!location || locationMatch);
  });

  return (
    <div className="w-full px-6 xl:px-10 py-4 bg-foreground border-b-1 border-b-[#DCDCDC] relative z-20">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 w-full">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center gap-2 mt-2">
            <img src="logo.svg" alt="" className="w-[150px]" />
          </div>

          {/* Button for Mobile Screen */}
          <div className="flex items-center gap-2 sm:hidden">
            <Icon icon="ic:round-language" className="w-8 h-8 text-[#595959]" />
            <Button className="font-roboto bg-default text-foreground text-xs sm:text-sm rounded-full hover:opacity-90 transition px-3 py-1 sm:px-4 sm:py-1.5 whitespace-nowrap">
              MyFeedback for business
            </Button>
          </div>
        </div>

        {/* Search bar */}
        <div className="w-full sm:w-auto">
          <SearchBar
            query={query}
            setQuery={setQuery}
            location={location}
            setLocation={setLocation}
            handleSearch={handleSearch}
            clearInputs={clearInputs}
            focused={focused}
            setFocused={setFocused}
            hasSearched={hasSearched}
          />
        </div>

        {/* Button for Desktop Screen */}
        <div className="hidden sm:flex items-center gap-4">
          <Icon icon="ic:round-language" className="w-9 h-9 text-[#595959]" />
          <Button className="bg-[#1E1E1E] text-foreground text-sm rounded-full hover:opacity-90 transition px-7">
            MyFeedback for business
          </Button>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {hasSearched && filtered.length > 0 && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-foreground shadow-lg rounded-xl p-4 w-full max-w-[600px] mt-3 top-full">
          <p className="text-sm font-medium mb-2 text-default">Results:</p>
          <ul className="text-sm text-default space-y-1">
            {filtered.map((item, i) => (
              <li key={i} className="cursor-pointer bg-tertiary/15 px-3 py-2 rounded-lg transition-all duration-150 hover:scale-105">
                {item.name} —{" "}
                <span className="text-[#7A7A7A]">{item.location}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
