import Filters from "@/components/Filters";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import connectDB from "@/db";
import HotelModel from "@/models/hotel-model"; // DB model for direct query
import { useEffect, useState } from "react";
import axios from "axios";

const Hotels = ({ hotels }) => {
  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  // 🔍 Filter by facilities
  const handleCheckList = async () => {
    try {
      const { data } = await axios.get(
        `/api/facilities/search?val=${checkedList}`
      );
      if (data?.hotels) setList(data.hotels);
    } catch (error) {
      console.error("Facility filter error:", error);
    }
  };

  // 🔍 Filter by price
  const handlePrice = async () => {
    try {
      const { data } = await axios.get(`/api/facilities/range?price=${price}`);
      if (data?.hotels) setList(data.hotels);
    } catch (error) {
      console.error("Price filter error:", error);
    }
  };

  useEffect(() => {
    if (checkedList.length > 0) {
      handleCheckList();
    }
  }, [checkedList]);

  return (
    <>
      <Header1 />
      <div className="flex flex-col lg:flex-row px-4 py-6 gap-6">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-1/4">
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        </div>

        {/* Hotels Listing */}
        <div className="w-full lg:w-3/4">
          {(list.length > 0 ? list : hotels)?.map((e) => (
            <div key={e._id} className="mb-6">
              <Hotel e={e} />
            </div>
          ))}
          {hotels.length === 0 && list.length === 0 && (
            <div className="text-center text-gray-500 text-xl">
              No hotels found 😕
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    await connectDB();

    const city = ctx.query.city || "";

    let hotels;

    if (city && city !== "") {
      hotels = await HotelModel.find({
        $or: [
          { city: { $regex: city, $options: "i" } },
          { name: { $regex: city, $options: "i" } },
        ],
      });
    } else {
      hotels = await HotelModel.find({});
    }

    return {
      props: {
        hotels: JSON.parse(JSON.stringify(hotels)),
      },
    };
  } catch (error) {
    console.error("🔥 getServerSideProps error:", error.message);
    return {
      props: {
        hotels: [],
      },
    };
  }
}

export default Hotels;
