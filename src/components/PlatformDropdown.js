import React, { useState, useContext } from "react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { GiFlatPlatform } from "react-icons/gi";
import { Menu } from "@headlessui/react";
import { ProductContext } from "./ProductContext";

/**
 * Dropdown component for selecting a turbine platform.
 */
const PlatformDropdown = () => {
  const { platform, setPlatform, platforms } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the dropdown menu.
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={toggleDropdown}
        className="dropdown-btn w-full text-left"
      >
        <GiFlatPlatform className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {platform}
          </div>
          <div className="text-[13px]">Select Turbine Platform</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {platforms.map((platformOption, index) => (
          <Menu.Item
            onClick={() => setPlatform(platformOption)}
            className="cursor-pointer hover:text-[#22344b] transition"
            as="li"
            key={index}
          >
            {platformOption}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PlatformDropdown;
