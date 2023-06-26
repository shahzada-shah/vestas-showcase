import React, { useState, useContext } from "react";
import { MdOutlineWindPower } from "react-icons/md";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { ProductContext } from "./ProductContext";

/**
 * Dropdown component for selecting a turbine wind class.
 */
const WindClassDropdown = () => {
  const { windClass, setWindClass, windClasses } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the dropdown menu.
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Handles the selection of a wind class.
   * @param {string} selectedClass - The selected wind class.
   */
  const handleSelection = (selectedClass) => {
    setWindClass(selectedClass);
  };

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={toggleDropdown}
        className="dropdown-btn w-full text-left"
      >
        <MdOutlineWindPower className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {windClass}
          </div>
          <div className="text-[13px]">Select Turbine Wind Class</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {windClasses.map((windClass, index) => (
          <Menu.Item
            key={index}
            onClick={() => handleSelection(windClass)}
            className="cursor-pointer hover:text-[#22344b] transition"
            as="li"
          >
            {windClass}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default WindClassDropdown;
