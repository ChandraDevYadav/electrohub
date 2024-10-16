import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const countries = [
  { value: 'AF', label: 'Afghanistan' },
  { value: 'AL', label: 'Albania' },
  { value: 'DZ', label: 'Algeria' },
  { value: 'AS', label: 'American Samoa' },
  { value: 'AD', label: 'Andorra' },
  { value: 'AO', label: 'Angola' },
  { value: 'AR', label: 'Argentina' },
  { value: 'AU', label: 'Australia' },
  { value: 'AT', label: 'Austria' },
  { value: 'BD', label: 'Bangladesh' },
  { value: 'BE', label: 'Belgium' },
  { value: 'BR', label: 'Brazil' },
  { value: 'CA', label: 'Canada' },
  { value: 'CN', label: 'China' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'IN', label: 'India' },
  { value: 'JP', label: 'Japan' },
  { value: 'MX', label: 'Mexico' },
  { value: 'NE', label: 'Nepal' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'RU', label: 'Russia' },
  { value: 'SA', label: 'Saudi Arabia' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'ES', label: 'Spain' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'US', label: 'United States' },
  // Add more countries as needed
];

const CheckOut = () => {
  const [shippingFormData, setShippingFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [billingFormData, setBillingFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [selectedShippingCountry, setSelectedShippingCountry] = useState(null);
  const [selectedBillingCountry, setSelectedBillingCountry] = useState(null);
  const [isShippingFormValid, setIsShippingFormValid] = useState(false);
  const [isBillingFormValid, setIsBillingFormValid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleShippingCountryChange = (option) => {
    setSelectedShippingCountry(option);
  };

  const handleBillingCountryChange = (option) => {
    setSelectedBillingCountry(option);
  };

  const handleShippingInputChange = (e) => {
    const { name, value } = e.target;
    setShippingFormData({ ...shippingFormData, [name]: value });
  };

  const handleBillingInputChange = (e) => {
    const { name, value } = e.target;
    setBillingFormData({ ...billingFormData, [name]: value });
  };

  // Check if the shipping form is valid
  useEffect(() => {
    const { name, email, address, city, postalCode } = shippingFormData;
    const isValid =
      name &&
      email &&
      address &&
      city &&
      postalCode &&
      selectedShippingCountry; // Include selected country as a validation condition
    setIsShippingFormValid(isValid);
  }, [shippingFormData, selectedShippingCountry]);

  // Check if the billing form is valid
  useEffect(() => {
    const { name, email, address, city, postalCode } = billingFormData;
    const isValid =
      name &&
      email &&
      address &&
      city &&
      postalCode &&
      selectedBillingCountry; // Include selected country as a validation condition
    setIsBillingFormValid(isValid);
  }, [billingFormData, selectedBillingCountry]);

  const handleCashOnDelivery = () => {
    setPaymentMethod('cod');
    // Handle Cash on Delivery logic
    console.log('Cash on Delivery selected');
  };

  const handleOnlinePayment = () => {
    setPaymentMethod('online');
    // Handle Online Payment logic
    console.log('Online Payment selected');
  };

  // Dummy total cost for order summary
  const totalCost = 100;
  const tax = totalCost * 0.1; // Assuming 10% tax
  const shippingCost = 5;
  const finalTotal = totalCost + tax + shippingCost;

  const isProceedEnabled = isShippingFormValid && isBillingFormValid && paymentMethod;

  const handleProceed = () => {
    if (isProceedEnabled) {
      // Logic for proceeding with payment
      console.log('Proceeding to payment...');
    }
  };

  return (
    <div>
      <div className='bg-cover bg-center py-16 md:py-32' style={{ backgroundImage: "url('/counter-one-bg.jpg')" }}>
        <div className='flex justify-center items-center'>
          <div>
            <p className='text-center text-4xl md:text-6xl font-bold text-white'>CheckOut</p>
            <p className='text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white'>Professional Smartphone Laptop Repair Services in Germany Since 2000</p>
            <div className='flex justify-center items-center mt-3'>
              <p className='text-white text-lg font-medium'><Link href=''>Home </Link>// Checkout</p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 px-4 md:px-36 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold mb-8 text-center">Checkout</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Shipping Information Form */}
            <div className="flex-1 bg-white p-6 rounded-md shadow-lg">
              <h2 className="text-2xl font-medium mb-6">Shipping Information</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={shippingFormData.name}
                    onChange={handleShippingInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={shippingFormData.email}
                    onChange={handleShippingInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingFormData.address}
                    onChange={handleShippingInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="1234 Main St"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingFormData.city}
                      onChange={handleShippingInputChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="City"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={shippingFormData.postalCode}
                      onChange={handleShippingInputChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Postal Code"
                      required
                    />
                  </div>
                </div>

                <div className="">
                  <Select
                    options={countries}
                    value={selectedShippingCountry}
                    onChange={handleShippingCountryChange}
                    className="text-sm mb-4"
                    placeholder="Select Country"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Billing Information Form */}
            <div className="flex-1 bg-white p-6 rounded-md shadow-lg">
              <h2 className="text-2xl font-medium mb-6">Billing Information</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="billingName"
                    name="name"
                    value={billingFormData.name}
                    onChange={handleBillingInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="billingEmail"
                    name="email"
                    value={billingFormData.email}
                    onChange={handleBillingInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="billingAddress"
                    name="address"
                    value={billingFormData.address}
                    onChange={handleBillingInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="1234 Main St"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      id="billingCity"
                      name="city"
                      value={billingFormData.city}
                      onChange={handleBillingInputChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="City"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="billingPostalCode"
                      name="postalCode"
                      value={billingFormData.postalCode}
                      onChange={handleBillingInputChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Postal Code"
                      required
                    />
                  </div>
                </div>

                <div className="">
                  <Select
                    options={countries}
                    value={selectedBillingCountry}
                    onChange={handleBillingCountryChange}
                    className="text-sm mb-4"
                    placeholder="Select Country"
                    required
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className='col-span-2'>
            <div className="bg-white p-6 mt-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-medium mb-4">Order Summary</h2>
            <div className='flex justify-between items-center my-2'>
            <p className="text-md">Subtotal: </p>
            <p className="text-md">${totalCost.toFixed(2)}</p>
            </div>
            <div className='flex justify-between items-center my-2'>
            <p className="text-md">Tax: </p>
            <p className="text-md">${tax.toFixed(2)}</p>
            </div>
            <div className='flex justify-between items-center my-2'>
            <p className="text-md">Shipping: </p>
            <p className="text-md">${shippingCost.toFixed(2)}</p>
            </div>
            <hr className="my-3" />
            <div className='flex justify-between items-center'>
            <p className="text-xl font-semibold">Total: </p>
            <p className="text-xl font-semibold">${finalTotal.toFixed(2)}</p>
            </div>
          </div>

          {/* Proceed to Payment Button */}
          
            </div>
            <div className="col-span-2">
            <div className="bg-white p-6 mt-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-medium mb-4">Select Payment Method</h2>
            <div className="flex space-x-4">
              <button
                onClick={handleCashOnDelivery}
                className={`flex-1 py-2 text-center rounded-md border ${paymentMethod === 'cod' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Cash on Delivery
              </button>
              <button
                onClick={handleOnlinePayment}
                className={`flex-1 py-2 text-center rounded-md border ${paymentMethod === 'online' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Online Payment
              </button>
            </div>
            <div className="mt-8">
            <button
              onClick={handleProceed}
              disabled={!isProceedEnabled}
              className={`w-full py-3 text-lg font-semibold rounded-md ${isProceedEnabled ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
            >
              Proceed to Payment
            </button>
          </div>
          </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
