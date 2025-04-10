"use client";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Router from "next/router";
import Cookies from "js-cookie";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // This runs only on the client side
    const key = Cookies.get("user");
    if(key){
      setAuth(true);
      return ;
    }
    setAuth(false);
  },[auth]);
const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/"); // Update state after logout
  };

  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-28">
      <Image
        src={"/logo2.png"} // Image path from the public folder
        alt="logo2"
        width={200}
        height={200}
        className="w-28 h-28"
      />
      <div className="border-r-2 border-gray-300 h-full flex">
        <Block
          title={"Become a member"}
          para={"Additional 10% off on stays"}
          imageSrc={"/icon5.jpeg"} // Image path from the public folder
          imageWidth={50}
          imageHeight={70}
        />
        <Block
          title={"roomanjo for Business"}
          para={"Trusted by 5000 companies"}
          imageSrc={"/icon3.webp"} // Image path from the public folder
          imageWidth={50}
          imageHeight={70}
        />
        <Block
          title="List your property"
          para="Start earning in 30 min."
          imageSrc={"/icon1.jpeg"} // Image path from the public folder
          imageWidth={70}
          imageHeight={70}
        />
        <Block
          title={"8130265893"}
          para={"Call us to book now"}
          imageSrc={"/icon4.png"} // Image path from the public folder
          imageWidth={70}
          imageHeight={70}
        />

        <div className="flex items-center px-3">
          <Image
            src={"/login.jpeg"} // Image path from the public folder
            alt={"login-icon"}
            width={200}
            height={200}
            className="w-10 h-10 rounded-full mr-5"
          />
          {auth ? (
            <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            <Link href={"/Login"}>
              <h3 className="font-bold">Login/Signup</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
