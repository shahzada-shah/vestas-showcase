import React, { useContext } from 'react';

import PlatformDropdown from "./PlatformDropdown";
import RatedPowerDropdown from "./RatedPowerDropdown";
import WindClassDropdown from "./WindClassDropdown";

import { FaSearchDollar } from "react-icons/fa"

import { ProductContext } from "./ProductContext";

const Search = () => {
  const { handleClick } = useContext(ProductContext)

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <WindClassDropdown />
      <PlatformDropdown />
      <RatedPowerDropdown />
      <button 
      onClick={() => handleClick()}
      className="bg-[#104277] hover:bg-[#22344b] transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
        <FaSearchDollar className="text-2xl"/>
      </button>
    </div>
  );
};

export default Search;
