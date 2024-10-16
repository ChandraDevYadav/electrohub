import React from 'react';
import Card from './Card';

const CardContainer = () => {
    const cardData = [
        {
            image: '/team9.jpg',
            date: '2024-10-09',
            comments: 6,
            title: 'How To Replace Your Laptop Battery Safely',
            buttonLabel: 'Read More',
          },
          {
            image: '/team8.jpg',
            date: '2024-10-08',
            comments: 4,
            title: '5 Tips To Improve Your Smartphone Camera Quality',
            buttonLabel: 'Read More',
          },
          {
            image: '/team1.jpg',
            date: '2024-10-07',
            comments: 9,
            title: 'Troubleshooting Common Wi-Fi Issues At Home',
            buttonLabel: 'Read More',
          },
          {
            image: '/team6.jpg',
            date: '2024-10-06',
            comments: 2,
            title: 'How To Protect Your Laptop From Malware',
            buttonLabel: 'Read More',
          },
          {
            image: '/team5.jpg',
            date: '2024-10-05',
            comments: 10,
            title: 'Which Phone Cases Offer The Best Protection?',
            buttonLabel: 'Read More',
          },
          {
            image: '/team4.jpg',
            date: '2024-10-04',
            comments: 7,
            title: 'How To Clean Your Laptop Keyboard Effectively',
            buttonLabel: 'Read More',
          },
          {
            image: '/team3.jpg',
            date: '2024-10-03',
            comments: 3,
            title: 'Top 5 Budget Laptops for Students in 2024',
            buttonLabel: 'Read More',
          },
          {
            image: '/team2.jpg',
            date: '2024-10-02',
            comments: 5,
            title: 'How To Increase Your Laptop’s Battery Life',
            buttonLabel: 'Read More',
          },
          {
            image: '/team1.jpg',
            date: '2024-10-01',
            comments: 11,
            title: 'What To Do If Your Phone Falls Into Water',
            buttonLabel: 'Read More',
          },
          
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-12">
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
