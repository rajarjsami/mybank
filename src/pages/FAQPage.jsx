import React, { useState } from "react";
import faqStrings from "../components/Strings/faqStrings"; // adjust path if needed
import strings from "../components/Strings/Strings";

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div>
      <div className="faqsCover w-full h-[284px] mb-2">
         <div className="w-full h-full bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold lg:text-4xl">{strings.FAQs}</h1>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row min-h-screen">
        {/* Left Side Image */}
        <div className="faqsIconImg w-full lg:w-1/2 h-[300px] lg:h-auto bg-cover bg-center"></div>

        {/* Right Side FAQs */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10">
          <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
            {faqStrings.sectionTitle}
          </h2>
          <div className="space-y-4">
            {faqStrings.faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-4 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className="text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="mt-3 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
