import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: '/shop-product-1-3.jpg',
      price: 20,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      image: '/shop-product-1-6.jpg',
      price: 15,
      quantity: 1,
    },
  ]);

  const removeOneFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-gray-100 px-4 md:px-36 py-12">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Cart Items Section */}
          <div className="col-span-1 lg:col-span-3 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 sm:p-3 text-gray-600">Image</th>
                      <th className="p-2 sm:p-3 text-gray-600">P Name</th>
                      <th className="p-2 sm:p-3 text-gray-600">Price</th>
                      <th className="p-2 sm:p-3 text-gray-600">Quantity</th>
                      <th className="p-2 sm:p-3 text-gray-600">Total</th>
                      <th className="p-2 sm:p-3 text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="p-2 sm:p-3 flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded mr-2 sm:mr-4"
                          />
                        </td>
                        <td className="p-2 sm:p-3">{item.name}</td>
                        <td className="p-2 sm:p-3">${item.price}</td>
                        <td className="p-2 sm:p-3">{item.quantity}</td>
                        <td className="p-2 sm:p-3">${item.price * item.quantity}</td>
                        <td className="p-2 sm:p-3">
                          <button
                            onClick={() => removeOneFromCart(item.id)}
                            className="text-red-600 hover:text-red-700 transition"
                          >
                            <MdDelete className="text-xl sm:text-2xl" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Summary Section */}
          <div className="col-span-1 space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Use Coupon</h2>
              <div className='flex flex-col justify-start items-center gap-4'>
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md"
                />
                <button className="w-full bg-red-600 text-white font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-red-700 transition">
                  Apply Coupon
                </button>
              </div>
            </div>

            <div className="bg-white px-4 py-10 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Order Summary</h2>
              <div className="flex justify-between mb-2 sm:mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${getTotalPrice()}</span>
              </div>
              <div className="flex justify-between mb-2 sm:mb-4">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">$5.00</span>
              </div>
              <div className="flex justify-between text-lg sm:text-xl font-semibold mb-4 sm:mb-6 border-t border-t-gray-300 py-3">
                <span>Total</span>
                <span>${getTotalPrice() + 5}</span>
              </div>
              <Link
                to="/checkout"
                className="w-full bg-red-600 text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
