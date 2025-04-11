"use client";

import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const key = Cookies.get("user");
    setAuth(!!key);
  }, []); // ✅ Empty dependency to avoid infinite loop

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
    <header className="border-b-2 border-gray-300 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:py-5 gap-4">
        {/* Logo */}
        <Image
          src="/logo2.png"
          alt="Roomanjo Logo"
          width={150}
          height={150}
          className="w-24 sm:w-28 h-auto"
        />

        {/* Features Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border-t-2 sm:border-t-0 sm:border-l-2 border-gray-300 sm:pl-6 pt-4 sm:pt-0 w-full sm:w-auto">
          <Block
            title="Become a member"
            para="Additional 10% off on stays"
            imageSrc="/icon5.jpeg"
            imageWidth={50}
            imageHeight={50}
          />
          <Block
            title="Roomanjo for Business"
            para="Trusted by 5000 companies"
            imageSrc="/icon3.webp"
            imageWidth={50}
            imageHeight={50}
          />
          <Block
            title="List your property"
            para="Start earning in 30 min."
            imageSrc="/icon1.jpeg"
            imageWidth={50}
            imageHeight={50}
          />
          <Block
            title="8130265893"
            para="Call us to book now"
            imageSrc="/icon4.png"
            imageWidth={50}
            imageHeight={50}
          />

          {/* Auth Block */}
          <div className="flex items-center px-3">
            <Image
              src="/login.jpeg"
              alt="Login Icon"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full mr-3"
            />
            {auth ? (
              <h3
                className="font-bold cursor-pointer text-sm sm:text-base"
                onClick={handleLogout}
              >
                Logout
              </h3>
            ) : (
              <Link href="/Login">
                <h3 className="font-bold text-sm sm:text-base">Login/Signup</h3>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
