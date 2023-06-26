import React, { useState, useEffect, useContext } from "react";
import { ImPower } from "react-icons/im";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { ProductContext } from "./ProductContext";

/**
 * Dropdown component for selecting a rated power range.
 */
const RatedPowerDropdown = () => {
  const { power, setPower } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the dropdown menu.
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Power range options
  const powerRange = [
    { value: "All Rated power (any)" },
    { value: "2000kW - 4000kW" },
    { value: "4000kW - 6000kW" },
    { value: "6000kW - 8000kW" },
    { value: "8000kW - 12000kW" },
    { value: "12000kW - 20000kW" },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={toggleDropdown}
        className="dropdown-btn w-full text-left"
      >
        <ImPower className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{power}</div>
          <div className="text-[13px]">Select Rated Power Range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {powerRange.map((powerOption, index) => (
          <Menu.Item
            key={index}
            onClick={() => setPower(powerOption.value)}
            className="cursor-pointer hover:text-[#22344b] transition"
            as="li"
          >
            {powerOption.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default RatedPowerDropdown;
