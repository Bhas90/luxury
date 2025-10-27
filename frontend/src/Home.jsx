import React, { useEffect, useState } from "react";
import StudyAbroadForm from "./StudyAbroadForm";
import AdvantageSection from "./AdvantageSection";
import StudyAbroad from "./StudyAbroad";
import ProjectOverview from "./ProjectOverview";
import AmenitiesSection from "./AmenitiesSection";
import Banner from "./Banner";
import ConnectivitySection from "./ConnectivitySection";
import AboutTellapur from "./AboutTellapur";
import WhatsAppButton from "./WhatsAppButton";
import PopupForm from "./PopupForm";
import AttentionGrabberButton from "./AttentionGrabberButton";

import FaqTellapur from "./FaqTellapur.jsx";
import SeoKeywordsTellapur from "./SeoKeywordsTellapur.jsx";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
      <StudyAbroadForm />
      <AttentionGrabberButton/>
      <div id="project-overview">
        <h2 className="section-heading"></h2>
        <ProjectOverview />
      </div>
      <div id="amenities">
        <h2 className="section-heading"></h2>
        <AmenitiesSection />
      </div>
      
      
      <div id="nri-support">
        <h2 className="section-heading"></h2>
        <AdvantageSection />
      </div>
      <div id="banner-section">
        <Banner />
      </div>
      <div id="connectivity">
        <h2 className="section-heading"></h2>
        <ConnectivitySection />
      </div>
      <div id="faq-tellapur">
        <h2 className="section-heading"></h2>
        <FaqTellapur/>
      </div>
      
      <div id="about">
        <h2 className="section-heading"></h2>
        <AboutTellapur />
      </div>
      <SeoKeywordsTellapur/>
      <WhatsAppButton />
      <PopupForm show={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Home;
