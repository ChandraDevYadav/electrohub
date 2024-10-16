import React from 'react';

const ProgressBar = ({ percentage, description }) => {
    return (
        <div className="w-full bg-white h-7 mb-2 relative">
            <div
                className="bg-red-600 h-7 flex justify-between px-4 items-center text-white"
                style={{ width: `${percentage}%` }}
            >
                <span className="text-sm font-semibold">{description}</span>
                <span className="text-sm">{percentage}%</span>
            </div>
            
        </div>
    );
};

export default ProgressBar;
