import Filters from "@/components/Filters";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import axios from "axios";
import { useEffect, useState } from "react";

const Hotels = ({ hotels }) => {
  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

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

  const handlePrice = async () => {
    try {
      const { data } = await axios.get(
        `/api/facilities/range?price=${price}`
      );
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
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;
