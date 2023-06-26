import React from "react";
import BannerImage from "../assets/img/alternative-energy.png";
import Search from "../components/Search";

/**
 * Banner component displays the main banner section of the website.
 * It includes a title, subtitle, description, and a search component.
 */
const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl-mb-24 px-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex  flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            Renewable Leader
          </h1>
          <h2 className="text-2xl mb-4 font-semibold text-[#104277]">
            Wind Turbine Product Portfolio
          </h2>
          <p className="max-w-[400px] mb-8">
            Vestas offers a range of products across three wind turbine
            platforms. The EnVentus™, 4 MW and 2 MW platforms provide an
            extensive portfolio.
          </p>
        </div>

        {/* Banner image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={BannerImage} alt="" />
        </div>
      </div>

      {/* Search component */}
      <Search />
    </section>
  );
};

export default Banner;
