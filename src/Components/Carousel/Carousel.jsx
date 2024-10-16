import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Carousel = () => {
  const slides = [
    {
      url: "/main-slider-1-1.jpg",
      alt: "Slide 1",
      heading: "Have Broken Gadget? We Can Fix Anything",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Discover More",
    },
    {
      url: "/main-slider-1-2.jpg",
      alt: "Slide 2",
      heading: "Reliable Gadget Repairs",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "Learn More",
    },
    {
      url: "/main-slider-1-3.jpg",
      alt: "Slide 3",
      heading: "We Care for Your Devices",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      buttonText: "Get Started",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mx-auto bg-red-600 bg-opacity-50 relative top-0">
      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        {/* Carousel Slides */}
        <div
          className="flex transition-transform  ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full relative">
              {/* Background Image */}
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-[26rem] md:h-auto object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-red-500 bg-opacity-40"></div>

              {/* Content for Each Slide */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-start md:text-center text-white px-6 sm:px-24 lg:px-[20rem] space-y-4 md:space-y-6 lg:mt-24">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold md:mb-4">
                  {slide.heading}
                </h1>
                <p className="text-lg sm:text-base lg:text-lg mb-4 md:mb-6">
                  {slide.description}
                </p>
                <button className="relative bg-red-600 text-white font-bold px-6 py-3 md:px-8 lg:px-10 lg:py-4 rounded-md overflow-hidden group">
                  <span className="relative z-10">{slide.buttonText}</span>
                  <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute top-[76%] md:top-[45%] right-4 md:right-8 transform -translate-y-1/2 border-2 border-white text-white text-2xl sm:text-3xl hover:text-red-600 p-2 rounded-full shadow-md hover:border-red-600 focus:outline-none"
        >
          <BsArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute top-[90%] md:top-[55%] right-4 md:right-8 transform -translate-y-1/2 border-2 border-white text-white text-2xl sm:text-3xl hover:text-red-600 p-2 rounded-full shadow-md hover:border-red-600 focus:outline-none"
        >
          <BsArrowRight />
        </button>

        {/* Dots Navigation */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1 h-1 md:w-4 md:h-4 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
