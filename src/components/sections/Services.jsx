import React from 'react'
import { RiBankFill } from "react-icons/ri";
import { GiReceiveMoney, GiWallet } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdBookOnline } from "react-icons/md";
import strings from '../Strings/Strings';

function Services() {
     const servicesdetails = [
    {
      id: 1,
      name: strings.PersonalLoan,
      desc: strings.PersonalDecs,
      icon: (
        <GiReceiveMoney className="text-[45px] text-center text-yellow-500" />
      ),
    },

    {
      id: 1,
      name: "Business Loan",
      desc: strings.BusinessDecs,
      icon: <RiBankFill className="text-[45px] text-center text-orange-500" />,
    },
    {
      id: 1,
      name: "Education Loan",
      desc: strings.EducationDecs,
      icon: <GrMoney className="text-[45px] text-center text-blue-500" />,
    },
  ];

  const secservicesdetails = [
    {
      id: 1,
      name: strings.MobileBanking,
      desc: strings.MobileBankingDecs,
      icon: (
        <FaFileInvoiceDollar className="text-[45px] text-center text-black" />
      ),
    },

    {
      id: 2,
      name: strings.CreditCard,
      desc: strings.CreditCardDecs,
      icon: <GiWallet className="text-[45px] text-center text-orange-900" />,
    },

    {
      id: 3,
      name: strings.OnlineDeposit,
      desc: strings.OnlineDepositDecs,
      icon: <MdBookOnline className="text-[45px] text-center text-blue-700" />,
    },
  ];


  return (
   <div className="w-full h-auto px-4">
    <div className="w-full text-center mb-8">
      <h1 className="text-[28px] md:text-[35px] font-serif">
       {strings.serviceTitle}
      </h1>
      <p className="text-[16px] md:text-[18px]">
      {strings.ServiceDecs}
      </p>
    </div>

    {/* First service list */}
    <div className="flex flex-wrap justify-center gap-6">
      {servicesdetails.map((services, index) => (
        <div
          key={index}
          className="w-full sm:w-[280px] rounded-2xl shadow-md bg-white"
        >
          {/* Top colored bar */}
          <div
            className={`w-full h-10 ${
              index === 0
                ? "bg-yellow-400"
                : index === 1
                ? "bg-orange-500"
                : index === 2
                ? "bg-blue-500"
                : "bg-teal-500"
            } rounded-t-2xl flex items-center justify-center`}
          >
            <span className="text-white font-bold text-lg">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
          </div>

          {/* Icon */}
          <div className="w-full flex justify-center mt-6 text-3xl">
            <span>{services.icon}</span>
          </div>

          {/* Title */}
          <div className="w-full text-center mt-4">
            <h1
              className={`text-[20px] font-bold uppercase ${
                index === 0
                  ? "text-yellow-500"
                  : index === 1
                  ? "text-orange-500"
                  : index === 2
                  ? "text-blue-500"
                  : "text-teal-500"
              }`}
            >
              {services.name}
            </h1>
          </div>

          {/* Description */}
          <div className="w-full text-center mt-2 px-3 pb-4">
            <p className="text-gray-600 text-sm">{services.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Second service list */}
    <div className="flex flex-wrap justify-center gap-6 mt-12">
      {secservicesdetails.map((secservices, index) => (
        <div
          key={index}
          className="w-full sm:w-[280px] rounded-2xl shadow-md bg-white"
        >
          {/* Top colored bar */}
          <div
            className={`w-full h-10 ${
              index === 0
                ? "bg-black"
                : index === 1
                ? "bg-orange-900"
                : index === 2
                ? "bg-blue-700"
                : "bg-teal-700"
            } rounded-t-2xl flex items-center justify-center`}
          >
            <span className="text-white font-bold text-lg">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
          </div>

          {/* Icon */}
          <div className="w-full flex justify-center mt-6 text-3xl">
            <span>{secservices.icon}</span>
          </div>

          {/* Title */}
          <div className="w-full text-center mt-4">
            <h1
              className={`text-[20px] font-bold uppercase ${
                index === 0
                  ? "text-black"
                  : index === 1
                  ? "text-orange-900"
                  : index === 2
                  ? "text-blue-700"
                  : "text-teal-700"
              }`}
            >
              {secservices.name}
            </h1>
          </div>

          {/* Description */}
          <div className="w-full text-center mt-2 px-3 pb-4">
            <p className="text-gray-600 text-sm">{secservices.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Services
