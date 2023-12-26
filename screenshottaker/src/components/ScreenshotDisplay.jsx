import React, { useState } from 'react';
import '../App.css'

const ScreenshotDisplay = ({ screenshots }) => {

    const handleDownload = (imageData, index) => {
        const link = document.createElement('a');
        link.href = `data:image/png;base64,${imageData}`;
        link.download = `screenshot_${index + 1}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="screenshot-display">
            {screenshots.map((screenshot, index) => (
                <div key={index}>
                    <div>
                        <img
                            key={index}
                            src={`data:image/png;base64,${screenshot}`}
                            alt={`Screenshot ${index + 1}`}
                            width={"100%"}
                        />
                    </div>
                    <button onClick={() => handleDownload(screenshot, index)}>
                        Download
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ScreenshotDisplay;
