import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="servicecard bg-white shadow-lg border-[1px] border-[#ff460d] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#ff460d] mb-2">{title}</h3>
      <p className="text-gray-900 text-sm mb-4">{description}</p>
      <button className="bg-[#ff460d] text-white px-4 py-2 rounded hover:bg-[#d35028] text-sm">MORE</button>
    </div>
  );
};

export default ServiceCard;