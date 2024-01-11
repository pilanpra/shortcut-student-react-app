// src/components/ToolsSection.js
import React from 'react';

const ToolsSection = () => {
    return (
        <div className="tools-section">
            <div className="video-container">
                <iframe width="750" height="400" src="https://www.youtube.com/embed/uD4izuDMUQA?si=-unfFi4JxZYazz1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="description">
                {/* Text description about the video */}
                <h2>Streamline your job application process and reclaim valuable time.</h2>
                <br></br>
                <p>Discover a treasure trove of tools designed to accelerate your job search, minimize time spent on applications, and optimize your chances of securing interviews</p>
            </div>
        </div>
    );
};

export default ToolsSection;
