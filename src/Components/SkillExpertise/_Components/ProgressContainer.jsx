import React, { useState } from 'react';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

const ProgressContainer = () => {
    // Array of progress values with descriptions
    const progressData = [
        { percentage: 90, description: 'Diagnostics' },
        { percentage: 70, description: 'Replacment' },
        { percentage: 80, description: 'Device Repair' },
    ];

    return (
        <div className="w-full pr-0 md:pr-8 py-10">
            {progressData.map((item, index) => (
                <div key={index} className="mb-4">
                    <ProgressBar percentage={item.percentage} description={item.description} />
                </div>
            ))}
        </div>
    );
};

export default ProgressContainer;
