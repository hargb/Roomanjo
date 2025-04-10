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

    // Clear input after 3 seconds
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5">
      <div className="flex items-center">
        <Image
          src={"/fire.jpg"}
          alt={"Exclusive Deals"}
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mr-5"
          priority={true} // Improves performance
        />
        <div className="text-xl">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      <div className="flex">
        {submitted ? (
          <p className="text-green-600 font-bold text-xl">Thank you for subscribing! 🎉</p>
        ) : (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-3 rounded-lg mr-5 w-80 h-16 outline-none border border-gray-300 text-lg"
              placeholder="e.g. john.doe@gmail.com"
              aria-label="Email for exclusive deals"
            />
            <button
              type="button"
              className="w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer hover:bg-red-600 transition duration-300"
              onClick={handleSubmit}
            >
              Notify
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header4;
