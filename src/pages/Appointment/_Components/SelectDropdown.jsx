import React, { useState } from 'react';

const SelectDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(''); // State to store selected option

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update state when an option is selected
  };

  return (
    <div className="w-full">
      <select
        id="options"
        value={selectedOption}
        onChange={handleSelectChange}
        className="block w-full py-3 px-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-400 sm:text-sm"
      >
        <option value="" disabled className=''>
          Select A Service
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {/* Display the selected option */}
      {selectedOption && (
        <p className="mt-4 text-lg font-medium text-gray-700">
          You selected: <span className="text-red-600">{selectedOption}</span>
        </p>
      )}
    </div>
  );
};

export default SelectDropdown;
