import React, { useState } from 'react';
import { FaExpand } from 'react-icons/fa'; // Icon for hover effect
import 'slick-carousel/slick/slick.css'; // For carousel styling
import 'slick-carousel/slick/slick-theme.css'; // For carousel theme styling
import Slider from "react-slick"; // Carousel library
import { Link } from 'react-router-dom';
import Testimonial from './_Components/Testimonial';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for clicked image
  const [showCarousel, setShowCarousel] = useState(false); // State for showing the carousel

  const images = [
    "/team1.jpg",
    "/team2.jpg",
    "/team3.jpg",
    "/team4.jpg",
    "/team5.jpg",
    "/team6.jpg",
    "/team7.jpg",
    "/team8.jpg",
    "/team9.jpg",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowCarousel(true);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
  
    <div className=''>
      <div
  className="bg-cover bg-center px-4 md:px-36 py-4 md:py-24 relative"
  style={{ backgroundImage: "url('/page-header-bg.jpg')" }}
>
  {/* Red overlay with opacity */}
  <div className="absolute inset-0 bg-red-500 bg-opacity-70"></div>

  <div className="relative flex justify-center items-center">
    <div>
      <p className="text-center text-4xl md:text-6xl font-bold text-white">
        Gallery
      </p>
      <p className="text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white">
        Professional Smartphone Laptop Repair Services in Germany Since 2000
      </p>
      <div className="flex justify-center items-center mt-3">
        <p className="text-white text-lg font-medium">
          <Link href="">Home </Link> // Book A Services
        </p>
      </div>
    </div>
  </div>
</div>

      <div className="bg-gray-100 px-4 md:px-36 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            {/* Icon on hover */}
            <div
              className="absolute inset-0 bg-red-600 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => handleImageClick(image)}
            >
              <FaExpand className="text-white text-3xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Image Carousel Modal */}
      {showCarousel && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl p-4">
            <button
              onClick={closeCarousel}
              className="absolute top-2 z-10 right-5 text-[#ffffff] text-2xl"
            >
              &times;
            </button>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Carousel ${index + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
    <Testimonial/>
    </div>
  );
};

export default Gallery;
