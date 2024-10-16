import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartPage = () => {
  // Initial cart items (you can fetch this data from your backend in real scenarios)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: '/shop-product-1-3.jpg',
      price: 20,
      quantity: 2, // This item has a quantity of 2
    },
    {
      id: 2,
      name: 'Product 2',
      image: '/shop-product-1-6.jpg',
      price: 15,
      quantity: 1, // This item has a quantity of 1
    },
  ]);

  // Function to remove 1 quantity of an item from the cart
  const removeOneFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }; // Decrease quantity by 1
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  // Function to calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-gray-100 px-4 md:px-36 py-12">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Cart Items Section */}
          <div className="col-span-4 bg-white p-6 rounded-lg shadow-lg">
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty.</p>
            ) : (
              <table className="w-full text-left table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 text-gray-600">Image</th>
                    <th className="p-3 text-gray-600">Product Name</th>
                    <th className="p-3 text-gray-600">Price</th>
                    <th className="p-3 text-gray-600">Quantity</th>
                    <th className="p-3 text-gray-600">Total</th>
                    <th className="p-3 text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-3 flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded mr-4"
                        />
                      </td>
                      <td className="p-3">{item.name}</td>
                      <td className="p-3">${item.price}</td>
                      <td className="p-3">{item.quantity}</td>
                      <td className="p-3">${item.price * item.quantity}</td>
                      <td className="p-3">
                        <button
                          onClick={() => removeOneFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 transition"
                        >
                          <MdDelete className="text-2xl" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Summary Section */}
          <div className="col-span-2 rounded-lg">
            <h2 className="text-2xl font-medium mb-6">Use Coupon</h2>
            <div className='flex justify-start items-center gap-4'>
            <input type="text" placeholder='Enter Promo Code' className='px-4 py-3 border border-gray-300 rounded-md w-2/3' />
            <button className="relative bg-red-600 text-white font-bold px-8 py-3 rounded-md overflow-hidden group">
              <span className="relative z-10">Apply Coupon</span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
            </div>
            
          </div>
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-medium mb-6">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${getTotalPrice()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold">$5.00</span>
            </div>
            <div className="flex justify-between text-xl font-semibold mb-6">
              <span>Total</span>
              <span>${getTotalPrice() + 5}</span>
            </div>
            <Link to='/checkout' className="w-full bg-red-600 text-white px-10 py-4 rounded-md font-semibold hover:bg-red-700 transition">
              Proceed to Checkout
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
