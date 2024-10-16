import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AddToCartButtonPd = () => {
  const [quantity, setQuantity] = useState(0); // Start with 0 quantity

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    } else {
      setQuantity(0); // If quantity is reduced to 0
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Decrease Button */}
      
      <button
        onClick={handleIncrease}
        className="bg-gray-500 text-white py-2 px-2 flex items-center rounded-sm hover:bg-green-600 transition duration-300"
      >
        <FaPlus />
      </button>

      {/* Quantity Display */}
      <span className="text-lg rounded-sm border border-gray-400 px-2">{quantity}</span>

      {/* Increase Button */}
      <button
        onClick={handleDecrease}
        className={`${
          quantity === 0 ? 'opacity-50 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
        } text-white py-2 px-2 flex items-center rounded-sm transition duration-300`}
        disabled={quantity === 0}
      >
        <FaMinus />
      </button>
    </div>
  );
};

export default AddToCartButtonPd;
