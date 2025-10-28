import React from "react";
import logo1 from "./assets/luxury-villas-tellapur.webp";
import logo2 from "./assets/villa.jpeg";

const StudyAbroadForm = () => {
  return (
    <div className="w-full relative">
      {/* ✅ MOBILE VIEW — fixed height like desktop */}
      <div className="block md:hidden w-full overflow-hidden">
        <img
          src={logo2}
          alt="Luxury Villas Tellapur"
          className="w-full object-cover pt-8"
          loading="lazy"
        />
      </div>

      {/* ✅ DESKTOP VIEW — full banner */}
      <div
        className="hidden md:flex w-full h-[600px] bg-cover bg-center bg-no-repeat items-center justify-start relative"
        style={{ backgroundImage: `url(${logo1})` }}
      ></div>
    </div>
  );
};

export default StudyAbroadForm;
