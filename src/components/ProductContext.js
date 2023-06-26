import React, { useState, useEffect, createContext } from "react";
import { productData } from "../data";

// Create a new context
export const ProductContext = createContext();

/**
 * Context provider component for managing product-related data and state.
 *
 * @component
 * @param {Object} children - The child components that need access to the context.
 * @returns {JSX.Element} JSX element representing the product context provider.
 */
const ProductContextProvider = ({ children }) => {
  const [turbines, setTurbines] = useState(productData);
  const [windClass, setWindClass] = useState("All Wind Classes (any)");
  const [windClasses, setWindClasses] = useState([]);
  const [platform, setPlatform] = useState("All Platforms (any)");
  const [platforms, setPlatforms] = useState([]);
  const [power, setPower] = useState("Rated Power (any)");
  const [loading, setLoading] = useState(false);

  // Update wind classes when turbines change
  useEffect(() => {
    const allWindClasses = turbines.map((turbine) => turbine.windClass);
    const uniqueWindClasses = [...new Set(allWindClasses)];
    setWindClasses(["All Wind Classes (any)", ...uniqueWindClasses]);
  }, [turbines]);

  // Update platforms when turbines change
  useEffect(() => {
    const allPlatforms = turbines.map((turbine) => turbine.platform);
    const uniquePlatforms = [...new Set(allPlatforms)];
    setPlatforms(["All Platforms (any)", ...uniquePlatforms]);
  }, [turbines]);

  /**
   * Event handler for filtering turbines based on selected criteria.
   */
  const handleClick = () => {
    setLoading(true);

    // Function to check if a string contains the word '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const minPower = parseInt(power.split(" ")[0].replace(",", ""));
    const maxPower = parseInt(power.split(" ")[2].replace(",", ""));

    const newTurbines = productData.filter((turbine) => {
      const turbinePower = parseInt(
        turbine.standardRatedPower.replace(",", "")
      );

      if (
        turbine.windClass === windClass &&
        turbine.platform === platform &&
        turbinePower >= minPower &&
        turbinePower <= maxPower
      ) {
        return turbine;
      }

      if (isDefault(windClass) && isDefault(platform) && isDefault(power)) {
        return turbine;
      }

      if (!isDefault(windClass) && isDefault(platform) && isDefault(power)) {
        return turbine.windClass === windClass;
      }

      if (isDefault(windClass) && !isDefault(platform) && isDefault(power)) {
        return turbine.platform === platform;
      }

      if (isDefault(windClass) && isDefault(platform) && !isDefault(power)) {
        if (turbinePower >= minPower && turbinePower <= maxPower) {
          return turbine;
        }
      }

      if (!isDefault(windClass) && !isDefault(platform) && isDefault(power)) {
        return turbine.windClass === windClass && turbine.platform === platform;
      }

      if (!isDefault(windClass) && isDefault(platform) && !isDefault(power)) {
        if (turbinePower >= minPower && turbinePower <= maxPower) {
          return turbine.windClass === windClass;
        }
      }

      if (isDefault(windClass) && !isDefault(platform) && !isDefault(power)) {
        if (turbinePower >= minPower && turbinePower <= maxPower) {
          return turbine.platform === platform;
        }
      }
    });

    setTimeout(() => {
      setTurbines(newTurbines.length < 1 ? [] : newTurbines);
      setLoading(false);
    }, 1000);
  };

  return (
    <ProductContext.Provider
      value={{
        windClass,
        setWindClass,
        windClasses,
        platform,
        setPlatform,
        platforms,
        power,
        setPower,
        turbines,
        loading,
        handleClick,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;