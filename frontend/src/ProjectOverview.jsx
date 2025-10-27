import React from "react";
import {
  MapPin,
  Home,
  Ruler,
  Grid3x3,
  Users,
  Layers,
} from "lucide-react";

const projectHighlights = [
  {
    icon: <MapPin className="w-8 h-8 text-[#00b4e6]" />,
    title: "LOCATION",
    desc: "Tellapur",
  },
  {
    icon: <Home className="w-8 h-8 text-[#00b4e6]" />,
    title: "VILLA SIZES",
    desc: "401–450 SYDS",
  },
  {
    icon: <Ruler className="w-8 h-8 text-[#00b4e6]" />,
    title: "PROJECT AREA",
    desc: "21.89 Acres",
  },
  {
    icon: <Grid3x3 className="w-8 h-8 text-[#00b4e6]" />,
    title: "NO. OF VILLAS",
    desc: "171",
  },
  {
    icon: <Users className="w-8 h-8 text-[#00b4e6]" />,
    title: "CLUBHOUSE",
    desc: "37,000 SFT",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#00b4e6]" />,
    title: "TYPE OF VILLAS",
    desc: "G+2 Floors",
  },
];

const ProjectOverview = () => {
  return (
    <section
      id="project-overview"
      className="w-full bg-white py-10 px-4 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 border-t border-b py-8">
          {projectHighlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-4 py-3 relative"
            >
              {/* Icon */}
              <div className="mb-3">{item.icon}</div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              )}

              {/* Divider (hidden on mobile) */}
              {index < projectHighlights.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
