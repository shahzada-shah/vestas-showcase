// Import necessary dependencies and components
import React from "react";
import { productData } from "../data";
import { useParams } from "react-router-dom";
import constructionImg from "../assets/img/under-construction-sign.svg";

// TurbineDetails component
const TurbineDetails = () => {

  // Render the turbine details
  return (
    <section>
      <div className="container mx-auto h-auto m-[152px]">
        <img
          src={constructionImg}
          alt="Banner"
          className="w-2/3 mx-auto"
        />
      </div>
    </section>
  );
};

export default TurbineDetails;
