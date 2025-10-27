import React from "react";

const shortKeywords = [
  "Tellapur Villas",
  "Luxury Homes",
  "Tellapur Hyderabad",
  "Villa Projects",
  "Premium Villas",
  "Luxury Living",
  "Gated Villas",
  "Tellapur Properties",
  "Hyderabad Villas",
];

const longTailKeywords = [
  "Luxury villas in Tellapur Hyderabad",
  "Premium gated community villas Tellapur",
  "Best villa projects near Gachibowli",
  "Upcoming luxury villas in Tellapur",
  "Tellapur real estate investment options",
  "Villas near Financial District Hyderabad",
  "High-end villas for sale in Tellapur",
  "Luxury homes near Outer Ring Road",
  "Exclusive NRI villas in Tellapur Hyderabad",
];

const lsiKeywords = [
  "Tellapur connectivity and infrastructure",
  "Luxury living near Gachibowli",
  "Real estate growth in Tellapur",
  "Outer Ring Road access villas",
  "Schools and hospitals near Tellapur",
  "Luxury gated community Hyderabad",
  "Green and sustainable villas",
  "Premium lifestyle in Tellapur",
  "Property appreciation Hyderabad West",
];

const SeoKeywordsTellapur = () => {
  const allKeywords = [...shortKeywords, ...longTailKeywords, ...lsiKeywords];

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {allKeywords.map((keyword, index) => (
            <a
              key={index}
              href="/"
              onClick={handleClick}
              className="block text-sm md:text-base hover:text-[#00b4e6] transition duration-300 cursor-pointer"
            >
              • {keyword}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default SeoKeywordsTellapur;
