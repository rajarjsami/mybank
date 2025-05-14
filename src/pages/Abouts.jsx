import React, { useState } from "react";
import Buttons from "../components/common/Buttons";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import strings from "../components/Strings/Strings";


function Abouts() {
  return (
    <div>
      <div className="aboutus w-full h-96 bg-red-300 border-b-2 border-black">
         <div className="w-full h-full bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold lg:text-4xl">{strings.About}</h1>
        </div>
      </div>

<div className="w-full flex flex-col lg:flex-row mt-12 mb-12">
  {/* Left Section */}
  <div className="w-full lg:w-1/2 border-b-2 lg:border-b-0 lg:border-r-2 border-black px-5">
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        {strings.AboutTile}
      </h1>
      <p className="mb-4">
        {strings.AboutSubTile}
      </p>
      <Buttons />
    </div>
    <div className="mt-6">
      <p className="mb-7">
       {strings.aboutsDescription}
      </p>
    </div>
    <div className="social-icons flex space-x-3 mt-5 mb-10">
      <span className="text-[24px] bg-black rounded-full p-2 text-white"><FaFacebook /></span>
      <span className="text-[24px] bg-black rounded-full p-2 text-white"><FaTwitter /></span>
      <span className="text-[24px] bg-black rounded-full p-2 text-white"><FaInstagramSquare /></span>
      <span className="text-[24px] bg-black rounded-full p-2 text-white"><FaYoutube /></span>
    </div>
  </div>

  {/* Right Section */}
  <div className="aboutbannerCover w-full lg:w-1/2 bg-green-900 h-64 lg:h-auto">
    {/* You can add image or content here */}
  </div>
</div>

    </div>
  );
}

export default Abouts;
