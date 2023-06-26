import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TurbineDetails from "./pages/TurbineDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turbine/:id" element={<TurbineDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;