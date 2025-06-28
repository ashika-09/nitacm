import React from "react";

const SearchBox = ({ onSearch, placeholder }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleInputChange}
      className="w-full max-w-md p-3 border-2 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:border-blue-500"
    />
  );
};

export default SearchBox;
