"use client";

import { useState } from "react";
import Image from "next/image";

const Header4 = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Subscribed:", email);
    setSubmitted(true);

    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 my-14 border-2 rounded-lg border-gray-300 p-6 sm:px-10 sm:py-8 w-full">
      {/* Left Section - Image + Text */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
        <Image
          src="/fire.jpg"
          alt="Exclusive Deals"
          width={128}
          height={128}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
          priority
        />
        <div className="text-lg sm:text-xl">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-auto">
        {submitted ? (
          <p className="text-green-600 font-bold text-center sm:text-left text-lg sm:text-xl">
            Thank you for subscribing! 🎉
          </p>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-80 h-12 px-4 border border-gray-300 rounded-lg outline-none text-base"
              placeholder="e.g. john.doe@gmail.com"
              aria-label="Email for exclusive deals"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full sm:w-48 h-12 bg-red-500 hover:bg-red-600 text-white text-lg rounded-lg transition-all"
            >
              Notify
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header4;
