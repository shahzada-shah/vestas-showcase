import React from "react";
import { BiWind } from "react-icons/bi";
import { GiWhirlwind } from "react-icons/gi";
import { TbBrandCarbon } from "react-icons/tb";
import { MdRecycling } from "react-icons/md";

const Turbine = ({ turbine }) => {
  const {
    image,
    platform,
    windClass,
    name,
    convertedPower,
    description,
    cutInWindSpeed,
    cutOutWindSpeed,
    carbonFootprint,
    recyclabilityRate,
  } = turbine;

  return (
    <div className="bg-white shadow-1 p-5 rounded-xl w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8 rounded-xl" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-[#292E32] rounded-full text-white px-3">
          {platform}
        </div>
        <div className="bg-[#292E32] rounded-full text-white px-3">
          {convertedPower}
        </div>
        <div className="bg-[#104277] rounded-full px-3 text-white">
          {windClass}
        </div>
      </div>

      <div className="text-lg font-semibold max-w-[260px]">{name}</div>
      <div className="text-sm font-light max-w-[320px] mt-2">{description}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiWind />
          </div>
          <div>{cutInWindSpeed}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <GiWhirlwind />
          </div>
          <div>{cutOutWindSpeed}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <TbBrandCarbon />
          </div>
          <div>{carbonFootprint}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <MdRecycling />
          </div>
          <div>{recyclabilityRate}</div>
        </div>
      </div>
    </div>
  );
};

export default Turbine;
