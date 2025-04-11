"use client";

import { useState } from "react";
import { useRouter } from "next/router";

const Header3 = () => {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (city.trim() === "") {
      alert("Please enter a city!");
      return;
    }

    router.push(`/hotels?city=${city.trim()}`);
  };

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className="p-5">
        <h2 className="text-4xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>

        <div className="flex justify-center my-5 mx-20">
          <input
            type="text"
            placeholder="Search..."
            className="w-6/12 h-16 outline-none px-3 text-lg border-r-2 border-gray-400"
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            type="button"
            onClick={handleSearch}
            className="h-16 px-3 py-2 w-72 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
