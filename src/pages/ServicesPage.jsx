import React from "react";
import ServiceCard from "../components/common/ServiceCard";
import { servicesText } from "../components/Strings/servicesText";
import strings from "../components/Strings/Strings";

const ServicesPage = () => {
  return (
    <div>
     <div className="servicecover w-full h-[350px]">
       <div className="w-full h-full bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold lg:text-4xl">{strings.Services}</h1>
        </div>
     </div>

    <div className=" w-full py-12 px-4 md:px-20">
      <div className="text-center mb-10">
        <h4 className="text-sm tracking-widest text-[#ff460d] uppercase">{servicesText.subtitle}</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff460d] mt-2">{servicesText.title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicesText.services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

    </div>
    </div>
  );
};

export default ServicesPage;
