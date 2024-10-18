import React from 'react';
import Card from './Card';

const AboutCard = () => {
  // Sample data for the cards
  const cardData = [
    { id: 1, image: '/team-1-1.jpg', title: 'John Doe', profession: 'Software Engineer' },
    { id: 2, image: '/team-1-2.jpg', title: 'Jane Smith', profession: 'Graphic Designer' },
    { id: 3, image: '/team-1-3.jpg', title: 'Alex Johnson', profession: 'Product Manager' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2 mt-6 md:mt-0 md:p-8">
      {cardData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          profession={card.profession}
        />
      ))}
    </div>
  );
};

export default AboutCard;
