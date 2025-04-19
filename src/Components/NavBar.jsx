import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { filterData } from "../lib/reuse/filter";
import SearchBar from "../ReuseComponents/SearchBar";
import { Button } from "@heroui/react";

function NavBar({ focused, setFocused }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const clearInputs = () => {
    setQuery("");
    setLocation("");
    setHasSearched(false);
    setFocused(false);
  };

  const handleSearch = () => {
    if (query.trim() || location.trim()) {
      setHasSearched(true);
      setFocused(true);
    }
  };

  const filtered = filterData.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(query.trim().toLowerCase());
    const locationMatch = item.location.toLowerCase().includes(location.trim().toLowerCase());
    return (!query || nameMatch) && (!location || locationMatch);
  });

  return (
    <div className="w-full px-6 xl:px-10 py-4 bg-foreground border-b border-[#DCDCDC] relative z-50 font-roboto">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 w-full">
        {/* Logo + mobile buttons */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center gap-2 mt-2">
            <img src="/logo.svg" alt="logo" className="w-[150px]" />
          </div>

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

        {/* Desktop buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <Icon icon="ic:round-language" className="w-9 h-9 text-[#595959]" />
          <Button className="bg-[#1E1E1E] text-foreground text-sm rounded-full hover:opacity-90 transition px-7">
            MyFeedback for business
          </Button>
        </div>
      </div>

      {/* Results Dropdown */}
      {hasSearched && filtered.length > 0 && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-foreground shadow-lg rounded-2xl w-full max-w-[600px] mt-3 top-full z-50 border border-[#E0E0E0]">
          <div className="divide-y divide-[#E0E0E0]">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-tertiary/10 hover:scale-105 transition-all "
              >
                <div className="border-2 border-[#F0F0F0] rounded-full p-1">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-5 h-5 object-contain"
                />
                </div>
                <div className="text-sm text-[#1E1E1E] truncate font-roboto">
                  <span className="font-medium">
                    {item.name.toLowerCase()}, {item.location.toLowerCase()}...
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
