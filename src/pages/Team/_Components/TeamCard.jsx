import React from 'react';
import Card from './Card';

const TeamCard = () => {

    const teamMembers = [
        { id: 1, image: '/team-1-1.jpg', title: 'John Doe', profession: 'Software Engineer' },
        { id: 2, image: '/team-1-2.jpg', title: 'Jane Smith', profession: 'Graphic Designer' },
        { id: 3, image: '/team-1-3.jpg', title: 'Alex Johnson', profession: 'Product Manager' },
        { id: 4, image: '/team1.jpg', title: 'Emily Davis', profession: 'UX/UI Designer' },
        { id: 5, image: '/team2.jpg', title: 'Michael Brown', profession: 'Data Scientist' },
        { id: 6, image: '/team3.jpg', title: 'Sarah Wilson', profession: 'Marketing Specialist' },
        { id: 7, image: '/team4.jpg', title: 'David Lee', profession: 'DevOps Engineer' },
        { id: 8, image: '/team5.jpg', title: 'Olivia Garcia', profession: 'Content Strategist' },
        { id: 9, image: '/team6.jpg', title: 'Chris Martinez', profession: 'Backend Developer' },
        { id: 10, image: '/team7.jpg', title: 'Sophia Lopez', profession: 'Project Manager' },
        { id: 11, image: '/team8.jpg', title: 'Ethan Clark', profession: 'Frontend Developer' },
        { id: 12, image: '/team9.jpg', title: 'Ava Rodriguez', profession: 'Business Analyst' }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2 md:p-8">
            {teamMembers.map((card) => (
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

export default TeamCard;
