"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Filters = ({ price, setPrice, handlePrice, checkedList, setCheckedList }) => {
  const [list, setList] = useState([]);

  // Fetch available facilities from API
  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get(`/api/facilities`);
      if (data?.facilities) {
        setList(data.facilities);
      }
    } catch (err) {
      console.error("Error fetching facilities:", err);
    }
  };

  // Handle checkbox selection
  const handleCheckList = (e) => {
    const value = e.target.value;
    let newList = [...checkedList];

    if (e.target.checked) {
      newList.push(value);
    } else {
      newList = newList.filter((item) => item !== value);
    }

    setCheckedList(newList);
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <div className="border-2 border-red-500 rounded-md m-5 p-6 sm:p-10 w-full">
      {/* Price Filter */}
      <div className="mb-6">
        <label htmlFor="price" className="text-lg sm:text-xl font-bold mr-3">
          Price:
        </label>
        <input
          type="range"
          id="price"
          min={1000}
          max={3500}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full sm:w-2/3 mt-2"
        />
        <span className="ml-4 text-gray-700 text-base">₹{price}</span>

        <div className="mt-4">
          <button
            onClick={handlePrice}
            className="w-full sm:w-40 h-10 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Facilities Filter */}
      <div className="mt-10">
        <h3 className="text-lg sm:text-xl font-bold mb-4">Filter by Facilities:</h3>
        <div className="flex flex-col gap-3">
          {list?.map((facility) => (
            <label key={facility} className="flex items-center justify-between text-sm sm:text-base">
              <span>{facility}</span>
              <input
                type="checkbox"
                value={facility}
                checked={checkedList.includes(facility)}
                onChange={handleCheckList}
                className="w-5 h-5"
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
