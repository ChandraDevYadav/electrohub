import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { FaPlus, FaRegComments } from 'react-icons/fa';

const Card = ({ image, date, comments, title, buttonLabel }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-0 md:m-4 bg-[#ffffff] relative px-5 py-5">
            <div className="relative group overflow-hidden rounded-lg">
  <img src={image} alt={title} className="w-full object-cover rounded-lg" />

  {/* Left Overlay - Slide from top */}
  <div className="absolute inset-y-0 left-0 w-[49%] bg-red-600 opacity-0 transition-all duration-700 ease-in-out transform -translate-y-full group-hover:translate-y-0 group-hover:opacity-50">
  </div>

  {/* Right Overlay - Slide from bottom */}
  <div className="absolute inset-y-0 right-0 w-1/2 bg-red-600 opacity-0 transition-all duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-50">
  </div>

  {/* Button Overlay */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
    <div className="bg-white hover:bg-black hover:text-white p-3 rounded-full">
      <FaPlus className="text-red-600 text-xl hover:text-white" />
    </div>
  </div>
</div>


            {/* Content Overlay */}
            <div className=" mt-5">
                <div className="flex justify-between items-start">
                    <p className="text-black text-lg mb-2 flex justify-center font-medium items-center gap-1">
                        <BiCalendar className='text-red-600' /> {date}
                    </p>
                    <p className="text-black text-lg mb-4 flex justify-center font-medium items-center gap-1">
                        <FaRegComments className='text-red-600' /> {comments} Comments
                    </p>
                </div>
                <div className="font-bold text-black text-2xl">{title}</div>
                <button className="relative bg-red-600 text-white font-bold px-10 py-4 rounded-md overflow-hidden group mt-6">
                        <span className="relative z-10">{buttonLabel}</span>
                        <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
                    </button>
            </div>
        </div>
    );
};

export default Card;
