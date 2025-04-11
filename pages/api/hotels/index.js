import { useState, useEffect } from "react";

const HotelSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    try {
      const res = await fetch(`/api/hotels?city=${searchTerm}`);
      const data = await res.json();
      setHotels(data.hotels); // Make sure this is data.hotels
    } catch (err) {
      console.error("Error fetching hotels", err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchHotels(); // Search on submit
  };

  useEffect(() => {
    fetchHotels(); // Load all hotels initially
  }, []);

  return (
    <>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search by city or name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      <div>
        {hotels.length === 0 ? (
          <p>No hotels found</p>
        ) : (
          hotels.map((hotel) => (
            <div key={hotel._id} className="border p-4 mb-2 rounded shadow">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.city}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default HotelSearch;
