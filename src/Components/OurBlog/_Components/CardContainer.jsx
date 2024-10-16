import React from 'react';
import Card from './Card'; // Adjust the import path based on your file structure

const CardContainer = () => {
    const cardData = [
        {
            image: '/services-1-1.jpg',
            date: '2024-10-12',
            comments: 5,
            title: 'How To Fix Broken Back Glass On Your Phone',
            buttonLabel: 'Read More',
        },
        {
            image: '/services-1-2.jpg',
            date: '2024-10-11',
            comments: 3,
            title: 'How To Fix Broken Screen On Your Laptop',
            buttonLabel: 'Read More',
        },
        {
            image: '/services-1-3.jpg',
            date: '2024-10-10',
            comments: 8,
            title: 'What Is The Best Affordable Android Phone In 2023?',
            buttonLabel: 'Read More',
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    date={card.date}
                    comments={card.comments}
                    title={card.title}
                    buttonLabel={card.buttonLabel}
                />
            ))}
        </div>
    );
};

export default CardContainer;
