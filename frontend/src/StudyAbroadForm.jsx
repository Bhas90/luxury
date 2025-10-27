import React from "react";
import logo1 from "./assets/luxury-villas-tellapur.webp";
import { MapPin } from "lucide-react";

const StudyAbroadForm = () => {
  return (
    <div className="w-full relative">
      {/* MOBILE VIEW IMAGE */}
      <div className="md:hidden w-full h-[300px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${logo1})` }}></div>

      
      {/* DESKTOP VIEW */}
      <div
        className="hidden md:flex w-full h-[600px] bg-cover bg-center bg-no-repeat items-center justify-start relative"
        style={{ backgroundImage: `url(${logo1})` }}
      >
        
      </div>
    </div>
  );
};

export default StudyAbroadForm;
