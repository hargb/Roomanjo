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
    <div>
      <div className="flex px-10 py-3 bg-gray-100 justify-between">
        {List.map((e) => (
          <span key={e.id}>{e.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Header2;
