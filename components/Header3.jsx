"use client";

import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState("");

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 py-8 px-4 sm:px-20 text-white">
      {/* Main Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold text-center leading-tight">
        Over 157,000 hotels and homes across 35 countries
      </h2>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-4">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full sm:w-1/2 h-12 sm:h-16 px-4 text-black text-base sm:text-lg rounded-md outline-none"
        />

        <Link href={`/hotels?city=${city}`} className="w-full sm:w-72">
          <button
            type="submit"
            className="w-full h-12 sm:h-16 bg-green-400 hover:bg-green-600 text-white text-base sm:text-xl rounded-md"
          >
            Search
          </button>
        </Link>
      </div>

      {/* Extra Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 font-semibold">
        <button className="h-12 sm:h-14 px-5 hover:underline">
          Continue your search
        </button>
        <button className="h-12 sm:h-14 px-5 border-2 border-white hover:bg-white hover:text-red-600 rounded-xl transition-all">
          Homestay in India hotels
        </button>
      </div>
    </div>
  );
};

export default Header3;
