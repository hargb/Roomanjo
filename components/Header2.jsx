import React from 'react';

const Header2 = () => {
  const List = [
    { id: 1, name: 'Bangalore' },
    { id: 2, name: 'Kolkata' },
    { id: 3, name: 'Mumbai' },
    { id: 4, name: 'Delhi' },
    { id: 5, name: 'Hyderabad' },
  ];

  return (
    <div className="bg-gray-100 w-full">
      <div className="flex flex-wrap justify-center sm:justify-between px-4 sm:px-10 py-3 text-sm sm:text-base font-medium gap-4 sm:gap-0">
        {List.map((city) => (
          <span
            key={city.id}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            {city.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header2;
