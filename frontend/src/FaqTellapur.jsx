import React, { useState } from "react";

const faqs = [
  {
    question: "Why is Tellapur becoming a prime location for luxury villas?",
    answer:
      "Tellapur is one of Hyderabad’s fastest-growing premium residential zones, strategically located near Gachibowli and the Financial District. Its clean environment, planned infrastructure, and peaceful surroundings make it ideal for luxury villa living.",
  },
  {
    question: "What are the key advantages of investing in Tellapur?",
    answer:
      "Tellapur offers excellent connectivity, high rental yield, and steady price appreciation. The area benefits from proximity to major IT hubs, educational institutions, and social infrastructure — making it a hotspot for investors and homebuyers alike.",
  },
  {
    question: "How well connected is Tellapur to the rest of Hyderabad?",
    answer:
      "Tellapur connects seamlessly through the Outer Ring Road (ORR), Nehru Outer Ring Road, and the Tellapur-Gachibowli link road. It’s just 10–15 minutes from Financial District, HITEC City, and Nanakramguda, ensuring smooth daily commutes.",
  },
  {
    question: "What social infrastructure developments are happening in Tellapur?",
    answer:
      "Tellapur hosts premium schools like Manthan International and Epistemo, healthcare centers such as Citizens Hospital, and easy access to top malls and restaurants. Upcoming commercial spaces and retail hubs further enhance lifestyle convenience.",
  },
  {
    question: "How is Tellapur’s real estate appreciation potential?",
    answer:
      "With growing demand for gated communities and luxury villas, Tellapur’s property values have shown strong appreciation. Upcoming infrastructure and proximity to employment zones promise long-term growth and value stability.",
  },
  {
    question: "Is Tellapur suitable for NRIs and luxury home buyers?",
    answer:
      "Absolutely. Many NRIs and high-net-worth individuals prefer Tellapur for its premium villa projects, wide roads, serene environment, and strong resale demand. It offers both lifestyle and investment benefits.",
  },
  {
    question: "Which prominent projects are shaping Tellapur’s skyline?",
    answer:
      "Tellapur features landmark developments by reputed builders like Ramky Estates, My Home, Aparna, and others — offering villas and apartments with world-class amenities and green-certified designs.",
  },
  {
    question: "How far is Tellapur from key destinations in Hyderabad?",
    answer:
      "Tellapur is about 10 km from Gachibowli, 25 km from the Airport, and well-connected to Nanakramguda, Kondapur, and Kokapet. The ORR ensures fast and traffic-free access to all major parts of Hyderabad.",
  },
];

const FaqTellapur = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open first FAQ

  const toggleOpen = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section id="faq-tellapur" className="py-16 px-4 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Why Choose <span className="text-[#00b4e6]">Tellapur?</span>
        </h2>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-5">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 hover:text-[#00b4e6] transition focus:outline-none"
                onClick={() => toggleOpen(idx)}
              >
                <span>{faq.question}</span>
                <span className="ml-3 text-[#00b4e6] text-xl">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqTellapur;
