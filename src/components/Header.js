import React from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

/**
 * Header component displays the header section of the website.
 * It includes the logo and navigation buttons.
 */
const Header = () => {
  return (
    <header className="py-3 mb-12 border-b">
      <div className="container mx-auto flex items-center justify-center"> 
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="#" className="h-auto" /> 
        </Link>
      </div>
    </header>
  );
};

export default Header;
