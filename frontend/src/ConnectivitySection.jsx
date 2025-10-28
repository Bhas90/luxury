import React from "react";
import { GraduationCap, Hospital, Network, MapPin } from "lucide-react";
import map from "./assets/loca.webp";

const connectivityItems = [
  {
    title: "Education",
    icon: <GraduationCap className="w-6 h-6 text-[#00b4e6]" />,
    description:
      "Proximity to leading institutions like Manthan International, Epistemo, and Gaudium School.",
  },
  {
    title: "Healthcare",
    icon: <Hospital className="w-6 h-6 text-[#00b4e6]" />,
    description:
      "Easy access to Citizens Hospital, Continental Hospital, and other renowned medical centers.",
  },
  {
    title: "Business & IT Hubs",
    icon: <Network className="w-6 h-6 text-[#00b4e6]" />,
    description:
      "Just minutes away from Financial District, Gachibowli, Nanakramguda, and HITEC City.",
  },
  {
    title: "Connected Living",
    icon: <MapPin className="w-6 h-6 text-[#00b4e6]" />,
    description:
      "Excellent connectivity via Outer Ring Road with upcoming metro access, malls, and entertainment zones.",
  },
];

const ConnectivitySection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Seamlessly Connected,{" "}
          <span style={{ color: "#00b4e6" }}>Ideally Positioned</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-center">
          Tellapur, Hyderabad, offers the perfect balance between peaceful living
          and urban convenience. Enjoy close proximity to top schools, hospitals,
          IT hubs, and leisure destinations — making it one of the most desirable
          addresses for luxury villas in the city.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {/* Left: Info Cards */}
        <div className="space-y-2">
          {connectivityItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start p-4 rounded-xl shadow-md bg-gradient-to-br from-white to-gray-50 border hover:shadow-lg transition duration-300"
            >
              <div className="mr-4">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Map Image */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <img
            src={map}
            alt="Tellapur Location Map"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;
