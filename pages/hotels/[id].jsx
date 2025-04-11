"use client";

import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleHotel = ({ hotel }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const cookie = Cookies.get("user");
    setAuth(!!cookie);
  }, []);

  // Fallback UI if hotel is null
  if (!hotel) {
    return (
      <div className="text-center py-20 text-xl text-red-600">
        ⚠️ Hotel not found or failed to load. Please try again.
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>

      <div className="w-full max-w-4xl mx-auto my-10 px-4 sm:px-6">
        {/* Hotel Banner */}
        <Image
          src={hotel?.banner}
          alt="hotel"
          width={2000}
          height={1000}
          className="w-full h-auto rounded-lg object-cover mb-6"
          priority
        />

        {/* Hotel Details */}
        <div className="text-gray-800">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">{hotel?.name}</h3>

          <p className="text-base sm:text-lg text-justify mb-6">
            {hotel?.description}
          </p>

          <button className="w-full sm:w-60 h-12 bg-blue-500 text-white text-lg font-medium rounded-lg mb-6 hover:bg-blue-600 transition">
            Price: ₹{hotel?.price}
          </button>

          {/* Facilities */}
          <p className="text-xl sm:text-2xl font-semibold mb-4">Facilities:</p>
          <ul className="flex flex-wrap gap-5 mb-8">
            {hotel?.facilities?.map((ele, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Image
                  src={ele.img}
                  alt={ele.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-base">{ele.name}</span>
              </li>
            ))}
          </ul>

          {/* Booking Button or Login Prompt */}
          {auth ? (
            <Link href={`/payment/${hotel?._id}`}>
              <button className="w-full sm:w-60 h-12 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition">
                Book Now
              </button>
            </Link>
          ) : (
            <p className="text-lg sm:text-xl">
              Please{" "}
              <Link href="/login" className="text-blue-600 underline">
                log in
              </Link>{" "}
              to get new offers!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const id = ctx.query.id;

    // 🛑 Prevent fetch crash if no ID is provided
    if (!id) {
      return {
        notFound: true,
      };
    }

    const res = await fetch(`https://roomanjo-ugty.vercel.app/api/hotels/${id}`);
    const data = await res.json();

    return {
      props: {
        hotel: data?.hotel || null,
      },
    };
  } catch (error) {
    console.error("❌ Error fetching single hotel:", error);

    return {
      props: {
        hotel: null,
      },
    };
  }
}

export default SingleHotel;
