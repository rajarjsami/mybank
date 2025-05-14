import React from "react";
import animtcard from "../../assets/animation-card.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import strings from "../Strings/Strings";

function HeroSection() {
  return (
    <div className="hero-section flex flex-col-reverse lg:flex-row justify-between items-center w-full px-4 py-10 gap-10">
  {/* Left Section (Text + Form + Stats) */}
  <div className="hero-light w-full lg:w-1/2">
    <div className="hero-heading mb-4">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">{strings.StrongerBanking}</h1>
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">{strings.GreaterService}</h1>
    </div>

    <div className="hero-subheading mb-6">
    <p className="text-sm sm:text-base leading-relaxed text-white w-[350px]">
      {strings.HeroSubheading}
    </p>,
    </div>

    {/* Searchbar */}
    <div className="searchbar w-full sm:w-[80%] h-14 bg-white border-2 rounded-md border-black flex items-center px-2 gap-2 mb-6">
      <input
        className="flex-grow p-2 outline-none text-sm"
        name="email"
        type="text"
        placeholder="Enter Your Email"
      />
      <button className="w-28 h-10 rounded-md bg-black text-white text-xs sm:text-sm">
        Get Free Card
      </button>
    </div>

    {/* Stats */}
    <div className="cardde grid grid-cols-2 sm:flex sm:justify-start gap-6 sm:gap-12">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">{strings.cardsNo}</h1>
        <p className="font-serif text-white">{strings.CardsDelivered}</p>
      </div>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">{strings.TransactionCount}</h1>
        <p className="font-serif text-white">{strings.TransactionsCompleted}</p>
      </div>
    </div>
  </div>

  {/* Right Section (Animation) */}
  <div className="hero-left w-full lg:w-1/2 flex justify-center">
    <div className="vicard w-full max-w-xs sm:max-w-md">
      <Player
        autoplay
        loop
        src={animtcard}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  </div>
</div>

  );
}

export default HeroSection;
