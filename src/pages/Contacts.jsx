import React from "react";
import strings from "../components/Strings/Strings";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import GMap from "./GMap";

function Contacts() {
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
  return (
    <div className="w-full h-auto]">
      {/* Top Cover Image */}
      <div className="contact-cover w-full h-[250px] sm:h-[400px] ">
        <div className="w-full h-full bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold lg:text-4xl">
            {strings.contacts}
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full h-auto flex flex-col lg:flex-row ">
        {/* Left Banner */}
        <div className="contact-banner w-full lg:w-1/2 h-[300px] lg:h-[600px] bg-gray-200">
          {/* Add background or image here if needed */}
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 h-auto lg:h-[600px] flex justify-center items-center mb-8">
          <div className="contact-ui w-[90%] sm:w-[450px] h-auto bg-red-500 rounded-md p-6 sm:p-12 mt-6">
            <form>
              <input
                className="p-3 w-full rounded-md outline-none mb-4"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="p-3 w-full rounded-md outline-none mb-4"
                type="text"
                name="email"
                placeholder="Email"
              />
              <textarea
                className="w-full rounded-md p-3 max-h-[130px] outline-none mb-4"
                name="message"
                placeholder="Message"
                id="message"
              ></textarea>
              <button className="p-3 bg-[#ff460d] w-full sm:w-[130px] rounded-lg text-white font-bold mx-auto block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex mb-4">
        <div className="w-[30%] p-6 border-t-2">
          <h1 className="p-6 text-[20px] font-bold">New York Office</h1>
          <div className="flex">
            <span className="mr-3">
              <IoLocation />
            </span>
            <span className="w-48">
              123 New AddressLane, Hyderabad, NY, Pakistan
            </span>
          </div>
          <div className="flex mt-2">
            <span className="mr-3">
              <FaPhoneAlt />
            </span>
            <span className="w-48">(+92) 302-975-5913</span>
          </div>
          <div className="flex mt-2">
            <span className="mr-3">
              <MdEmail />
            </span>
            <span className="w-48">zindabadp034@gmail.com</span>
          </div>
        </div>

        <div className="w-[70%] border-t-2">
          <div>
            <GMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
