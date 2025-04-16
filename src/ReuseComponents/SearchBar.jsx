import React from "react";
import { Icon } from "@iconify/react";

const SearchBar = ({
  query,
  setQuery,
  location,
  setLocation,
  handleSearch,
  clearInputs,
  focused,
  setFocused,
  hasSearched,
}) => (
  <div
        className={`flex items-center border ${
          focused ? "border-primary" : "border-[#ADADAD]"
        } rounded-full overflow-hidden shadow-sm transition-all bg-foreground w-full`}
      >
        {/*left side input field*/}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="restaurant, hotel, service...."
          className="font-roboto px-4 py-2 w-[55%] text-sm focus:outline-none placeholder:text-[#7A7A7A] text-default caret-primary"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <span className="text-[#7A7A7A]">|</span>
        {/*right side input field*/}
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Singapour..."
          className="font-roboto px-4 py-2 w-[35%] text-sm focus:outline-none placeholder:text-[#7A7A7A] text-default caret-primary"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={
            query || location ? (hasSearched ? clearInputs : handleSearch) : undefined
          }
          className="bg-primary text-white rounded-full p-2 m-1 hover:bg-primary/85"
        >
          <Icon
            icon={
              query || location
                ? hasSearched
                  ? "ic:round-close"
                  : "ic:round-search"
                : "ic:round-search"
            }
            className="w-5 h-5"
          />
        </button>
      </div>
);

export default React.memo(SearchBar);
