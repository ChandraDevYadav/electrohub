import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importing icons

const Accordion = () => {
  // State to keep track of which accordion item is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Handler to toggle the accordion
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already active
    } else {
      setActiveIndex(index); // Expand the clicked one
    }
  };

  // Sample data for the accordion
  const accordionData = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'What is Tailwind CSS?',
      content: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without writing custom CSS.',
    },
    {
      title: 'Why use React?',
      content: 'React is fast, scalable, and simple. It works only on the user interfaces in the application.',
    },
    {
      title: 'Why use React-Router?',
      content: 'React is fast, scalable, and simple. It works only on the user interfaces in the application.',
    },
  ];

  return (
    <div className="w-full mx-auto mt-16">
      {accordionData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full flex justify-between items-center py-4 rounded-sm px-4 text-left focus:outline-none bg-black hover:bg-gray-800"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium text-white">{item.title}</span>
            {activeIndex === index ? (
              <FaMinus className="w-4 h-4 text-white" /> // Minus icon when expanded
            ) : (
              <FaPlus className="w-4 h-4 text-white" /> // Plus icon when collapsed
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              activeIndex === index ? 'max-h-40' : 'max-h-0'
            }`}
          >
            <div className="p-4 text-white">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
