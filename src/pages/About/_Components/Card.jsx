import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Card = ({ image, title, profession }) => {
  return (
    <div className="group shadow-lg rounded-lg overflow-hidden">
      {/* Image Container */}
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[26rem] transition-transform duration-500 ease-in-out transform scale-110 hover:scale-100 object-cove" 
        />
        
        {/* Social Icons - shown on hover */}
        <div className="absolute inset-0 bg-red-600 bg-opacity-80 flex flex-col justify-start gap-4 py-10 items-start h-[105%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <a href="#" className="bg-red-700 p-3 rounded-sm ml-6 text-white text-xl">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-red-700 p-3 rounded-sm ml-6 text-white text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="bg-red-700 p-3 rounded-sm ml-6 text-white text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="bg-red-700 p-3 rounded-sm ml-6 text-white text-xl">
            <FaLinkedinIn />
          </a>
          
        </div>
        <div className="absolute top-[77%] p-6 text-start bg-white z-40 w-1/2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm">{profession}</p>
      </div>
      </div>

      {/* Card Content */}
      
    </div>
  );
};

export default Card;
