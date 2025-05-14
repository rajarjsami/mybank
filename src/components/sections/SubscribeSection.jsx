import React from 'react'
import strings from '../Strings/Strings';

function SubscribeSection() {
  return (
     <div className="w-full bg-white mt-14 px-4 py-6">
  {/* Heading Section */}
  <div className="w-full text-center mb-6">
    <h1 className="text-2xl md:text-4xl text-black font-bold font-serif">{strings.subscribeNews}</h1>
    <h2 className="text-base md:text-xl text-gray-500 font-bold font-serif mt-2">{strings.subscribeDesc}</h2>
  </div>

  {/* Form Section */}
  <div className="w-full flex justify-center p-7  w-[60%] ">
    <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl ">
      <input
        type="text"
        name="email"
        placeholder="Enter Your Email"
        className="w-full sm:w-[300px] px-4 py-3 rounded-full bg-gray-200 text-black outline-none placeholder:text-black placeholder:font-serif"
      />
      <input
        type="submit"
        name="submit"
        value="Get Started"
        className="bg-blue-500 px-6 py-3 rounded-full text-white font-bold cursor-pointer w-full sm:w-auto"
      />
    </form>
  </div>
</div>

  
  )
}

export default SubscribeSection
