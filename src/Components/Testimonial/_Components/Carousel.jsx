import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Slider = () => {
    const items = [
        {
            image: '/a1.jpg',
            name: 'Chandra Dev Yadav',
            title: 'Web Developer',
            description: 'This is the description for the third slide. It contains information about the third image. This is the description for the second slide. It contains information about the second image. This is the description for the second slide. It contains information about the second image.',
        },
        {
            image: '/a2.jpg',
            name: 'Pooja Sharma',
            title: 'Graphic Designer',
            description: 'Pooja has over 7 years of experience in designing engaging and visually appealing graphics for web and mobile platforms. Her creativity shines through in her work, helping companies build unique brand identities. In this slide, you can learn more about her process and inspiration behind her designs.',
        },
        {
            image: '/a3.jpg',
            name: 'Rahul Kumar',
            title: 'UI/UX Designer',
            description: 'Rahul is an expert in designing user-friendly and visually engaging interfaces. His approach focuses on understanding user behavior and delivering intuitive designs. He has contributed to numerous projects, helping businesses enhance their user experience and satisfaction. His work is highlighted in this slide.',
        },
        {
            image: '/a4.jpg',
            name: 'Sneha Verma',
            title: 'Content Strategist',
            description: 'Sneha specializes in creating and managing effective content strategies for various brands. With a deep understanding of user behavior and market trends, she ensures that the content not only resonates with the audience but also drives engagement. Her methods and achievements are detailed in this slide.',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Auto-slide effect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    // Handle touch start for swipe functionality
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    // Handle touch end for swipe functionality
    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 100) {
            nextSlide(); // swipe left -> next slide
        }
        if (touchStartX.current - touchEndX.current < -100) {
            prevSlide(); // swipe right -> previous slide
        }
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    // Handle mouse events for sliding
    const handleMouseDown = (e) => {
        touchStartX.current = e.clientX;
    };

    const handleMouseUp = (e) => {
        touchEndX.current = e.clientX;
        if (touchStartX.current - touchEndX.current > 100) {
            nextSlide();
        }
        if (touchStartX.current - touchEndX.current < -100) {
            prevSlide();
        }
    };

    return (
        <div
            ref={sliderRef}
            className="w-full flex justify-center items-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <div className="relative flex items-center w-full bg-black rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-16 shadow-lg rounded-lg overflow-hidden p-4 md:p-8">
                    {/* Image */}
                    <div className="flex justify-center items-center bg-gray-400 my-12 md:justify-start rounded-lg">
                        <img
                            src={items[currentIndex].image}
                            alt={items[currentIndex].title}
                            className="w-full h-full py-8 px-6 object-cover rounded-lg"
                        />
                    </div>

                    {/* Text */}
                    <div className="col-span-3 p-4 md:text-left">
                        <FaQuoteRight className="text-red-600 text-5xl mr-4 mb-5" />
                        <div className='flex items-start justify-start '>
                        <div>
                            <p className="text-md md:text-2xl font-semibold text-white">
                                {items[currentIndex].description}
                            </p>
                            <p className="text-xl md:text-2xl font-semibold text-red-600 mt-8">
                                {items[currentIndex].name}
                            </p>
                            <h2 className="text-md md:text-lg mb-2 md:mb-4 text-gray-300">
                                {items[currentIndex].title}
                            </h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
