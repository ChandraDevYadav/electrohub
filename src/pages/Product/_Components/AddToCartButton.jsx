import React, { useState } from 'react';
import { FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

const AddToCartButton = () => {
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setInCart(true);
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    } else {
      setInCart(false); // If quantity is reduced to 0, remove from cart
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {!inCart ? (
        <button
          onClick={handleAddToCart}
          className="bg-red-500 text-white py-2 px-2 flex items-center rounded-lg hover:bg-red-800 transition duration-300"
        >
          <FaShoppingCart className="" />
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          <button
            onClick={handleDecrease}
            className="bg-red-500 text-white py-1 px-1 flex items-center rounded-lg hover:bg-red-600 transition duration-300"
          >
            <FaMinus />
          </button>

          <span className="text-lg">{quantity}</span>

          <button
            onClick={handleIncrease}
            className="bg-gray-500 text-white py-1 px-1 flex items-center rounded-lg hover:bg-green-600 transition duration-300"
          >
            <FaPlus />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
