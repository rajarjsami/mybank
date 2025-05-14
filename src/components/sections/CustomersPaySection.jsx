import React from 'react'
import { FaAppStoreIos, FaCircleDot, FaTableCells, FaUnity } from "react-icons/fa6";
import { TbChartLine, TbTopologyStar3 } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosDisc } from "react-icons/io";
import { SiVagrant } from "react-icons/si";
import strings from '../Strings/Strings';

function CustomersPaySection() {
      const customerspay = [
    {
      id: 1,
      name: strings.BusinesofApps,
      icon: <FaTableCells className="text-[35px] text-white" />,
    },
    {
      id: 2,
      name: strings.APPODEAL,
      icon: <FaCircleDot className="text-[35px] text-white" />,
    },

    {
      id: 3,
      name: strings.Adikteev,
      icon: <TbTopologyStar3 className="text-[35px] text-white" />,
    },
    {
      id: 4,
      name: strings.Stack,
      subtitle: strings.subtitle,
      icon: <BsThreeDotsVertical className="text-[35px] text-white" />,
    },
  ];

  const seccustomerspay = [
    {
      id: 1,
      name: strings.Unity,
      icon: <FaUnity className="text-[20px] mt-4 text-white" />,
    },
     {
      id: 2,
      name: strings.IronSurce,
      icon: <IoIosDisc className="text-[20px] mt-4 text-white" />,
    },
      {
      id: 3,
      name: strings.Smaato,
      icon: <TbChartLine className="text-[20px] mt-4 text-white" />,
    },
      {
      id: 4,
      name: strings.APPLOVIN,
      icon: <FaAppStoreIos className="text-[20px] mt-4 text-white" />,
    },
      {
      id: 5,
      name: strings.Vungle,
      icon: <SiVagrant className="text-[20px] mt-4 text-white" />,
    },
    

  ];
  return (
           <div className="w-full min-h-[400px] bg-black py-8 px-4">
  <div className="text-center mb-6 mt-12">
    <h1 className="text-white text-2xl md:text-3xl lg:text-[35px] font-bold font-serif">
      Trusted by nearly 5400+ paying customers
    </h1>
  </div>

  {/* First Row */}
  <div className="w-full flex flex-wrap justify-center gap-4">
    {customerspay.map((customer) => (
      <div
        key={customer.id}
        className="popularbrand flex items-center w-full sm:w-[300px] 2xl:bg-blue-800  rounded-full p-3
        bg-sky-400 md:bg-transparent"
      >
        <span className="mr-3">{customer.icon}</span>
        <div>
          <p className="text-xs text-gray-400">{customer.subtitle}</p>
          <h2 className="text-lg md:text-xl font-bold text-white">
            {customer.name}
          </h2>
        </div>
      </div>
    ))}
  </div>

  {/* Second Row */}
  <div className="w-full flex flex-wrap justify-center gap-4 mt-6">
    {seccustomerspay.map((seccustomer) => (
      <div
        key={seccustomer.id}
        className="popularbrand flex items-center w-full sm:w-[200px]  rounded-full p-2
        bg-sky-400 md:bg-transparent"
      >
        <span className="mr-3">{seccustomer.icon}</span>
        <div>
          <p className="text-xs text-gray-200">{seccustomer.subtitle}</p>
          <h2 className="text-sm font-bold text-white">
            {seccustomer.name}
          </h2>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default CustomersPaySection
