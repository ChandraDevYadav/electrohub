import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AddToCartButton from './_Components/AddToCartButton';

const products = [
  { id: 1, name: "Red Shirt", category: "Clothing", color: "Red", tags: ["New"], price: 29.99, rating: 4, image: "/shop-product-1-1.jpg" },
  { id: 2, name: "Blue Headphones", category: "Electronics", color: "Blue", tags: ["Featured"], price: 99.99, rating: 5, image: "/shop-product-1-2.jpg" },
  { id: 3, name: "Green T-Shirt", category: "Clothing", color: "Green", tags: ["Popular"], price: 19.99, rating: 3, image: "/shop-product-1-3.jpg" },
  { id: 4, name: "Black Watch", category: "Accessories", color: "Black", tags: ["New", "Discount"], price: 199.99, rating: 4, image: "/shop-product-1-4.jpg" },
  { id: 5, name: "Yellow Hat", category: "Clothing", color: "Yellow", tags: ["Discount"], price: 12.99, rating: 4, image: "/shop-product-1-5.jpg" },
  { id: 6, name: "White Shoes", category: "Footwear", color: "White", tags: ["New"], price: 49.99, rating: 5, image: "/shop-product-1-6.jpg" },
  { id: 7, name: "Gray Hoodie", category: "Clothing", color: "Gray", tags: ["Popular"], price: 39.99, rating: 4, image: "/shop-product-1-7.jpg" },
  { id: 8, name: "Red Dress", category: "Clothing", color: "Red", tags: ["Featured"], price: 59.99, rating: 5, image: "/shop-product-1-8.jpg" },
  { id: 9, name: "Blue Jeans", category: "Clothing", color: "Blue", tags: ["Discount"], price: 49.99, rating: 4, image: "/shop-product-1-9.jpg" },
  { id: 10, name: "Leather Wallet", category: "Accessories", color: "Brown", tags: ["New"], price: 29.99, rating: 4, image: "/shop-product-1-1.jpg" },
  { id: 11, name: "Black Sunglasses", category: "Accessories", color: "Black", tags: ["Popular"], price: 89.99, rating: 5, image: "/shop-product-1-2.jpg" },
  { id: 12, name: "Red Sneakers", category: "Footwear", color: "Red", tags: ["New", "Popular"], price: 79.99, rating: 5, image: "/shop-product-1-3.jpg" },
  { id: 13, name: "Silver Necklace", category: "Jewelry", color: "Silver", tags: ["Featured"], price: 149.99, rating: 4, image: "/shop-product-1-4.jpg" },
  { id: 14, name: "Black Belt", category: "Accessories", color: "Black", tags: ["New"], price: 19.99, rating: 4, image: "/shop-product-1-5.jpg" },
  { id: 15, name: "Yellow Scarf", category: "Accessories", color: "Yellow", tags: ["Discount"], price: 14.99, rating: 3, image: "/shop-product-1-6.jpg" },
  { id: 16, name: "Green Cap", category: "Clothing", color: "Green", tags: ["Popular"], price: 9.99, rating: 4, image: "/shop-product-1-7.jpg" },
  { id: 17, name: "White Socks", category: "Clothing", color: "White", tags: ["Featured"], price: 5.99, rating: 5, image: "/shop-product-1-8.jpg" },
  { id: 18, name: "Black Boots", category: "Footwear", color: "Black", tags: ["New"], price: 99.99, rating: 5, image: "/shop-product-1-9.jpg" },
  { id: 19, name: "Red Jacket", category: "Clothing", color: "Red", tags: ["Discount"], price: 89.99, rating: 4, image: "/shop-product-1-1.jpg" },
  { id: 20, name: "Blue Shorts", category: "Clothing", color: "Blue", tags: ["Popular"], price: 29.99, rating: 4, image: "/shop-product-1-2.jpg" },
  { id: 21, name: "Purple Shorts", category: "Clothing", color: "Blue", tags: ["Popular"], price: 29.99, rating: 4, image: "/shop-product-1-2.jpg" },
  { id: 22, name: "Gray Shorts", category: "Clothing", color: "Blue", tags: ["Popular"], price: 29.99, rating: 4, image: "/shop-product-1-2.jpg" },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: 5 }, (v, i) => (
        <span key={i} className="text-red-600">
          {i < rating ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
};

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  
  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleTagChange = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
      (selectedTags.length === 0 || selectedTags.some((tag) => product.tags.includes(tag)))
    );
  });

  return (
    <div>
      <div className="bg-cover bg-center px-4 md:px-36 py-4 md:py-24 relative"
        style={{ backgroundImage: "url('/page-header-bg.jpg')" }}>
        <div className="absolute inset-0 bg-red-500 bg-opacity-60"></div>
        <div className="relative flex justify-center items-center">
          <div>
            <p className="text-center text-4xl md:text-6xl font-bold text-white">
              Products
            </p>
            <p className="text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white">
              Explore Our Latest Collections
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-36 py-4'>
      <div className="flex justify-start items-center gap-6">
            <input
              type="text"
              className="w-1/2 py-4 px-4 border rounded-md"
              placeholder="Search Products"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <p>Showing 1-9 of 12 results</p>
          </div>

          <div className=" flex justify-start md:justify-end items-center gap-4">
            <select
              className="w-1/2 p-2 border rounded-md text-gray-400"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Footwear">Footwear</option>
              <option value="Jewelry">Jewelry</option>
            </select>
          </div>
      </div>
      <div className="flex p-4 space-x-4 px-4 md:px-36 py-4">
        {/* Left Side: Filters */}
        <div className="w-1/4 h-1/2 bg-gray-100 p-4 rounded-md">
          <div className="mb-4">
            <h2 className="font-bold mb-2">Color</h2>
            <div className="space-y-2">
              {["Red", "Blue", "Green", "Black", "Yellow", "White", "Gray"].map((color) => (
                <label key={color} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => handleColorChange(color)}
                    className="mr-2"
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-2">Tags</h2>
            <div className="space-y-2">
              {["New", "Featured", "Popular", "Discount"].map((tag) => (
                <label key={tag} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagChange(tag)}
                    className="mr-2"
                  />
                  {tag}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-md p-4">
              {/* <img src={product.image} alt={product.name} className="w-full h-[16rem] mb-4" /> */}
              <div className="relative overflow-hidden w-full rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[16rem] mb-4 transition-transform duration-500 ease-in-out transform scale-110 hover:scale-100 object-cover"
                />
              </div>
              <div>
              <div className='flex justify-between items-start'>
              <Link to={`/product/${product.id}`} className="font-bold text-lg hover:text-red-600">{product.name}</Link>
              <AddToCartButton/>
              </div>
              <p className="text-gray-600 my-2">${product.price.toFixed(2)}</p>
              <StarRating rating={product.rating} />
              {/* <Link to={`/product/${product.id}`} className="mt-2 text-blue-500">View Details</Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
