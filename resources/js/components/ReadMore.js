import React from "react";

// Navigation Component with Full Page Scroll
export default function Example() {
    return (
        <div className="nav-container">
            <h1 className="headline">Welcome to Veritas Academia</h1>
            <ImageSection />
            <AdditionalImageSection />
        </div>
    );
}

// New function to display the first image and vision
function ImageSection() {
    return (
        <div className="image-section">
            <div className="image-container">
                <img 
                    src="https://i.pinimg.com/564x/e8/6a/3d/e86a3dba21f62a1d48281d0af01ef225.jpg" 
                    alt="Decorative" 
                    className="decorative-image" 
                />
            </div>
            <div className="vision-container">
                <h2 className="vision-title">VISION</h2> {/* Added title for the vision */}
                <p className="vision-text">
                    "To be a leading institution that nurtures the potential of every student by providing a dynamic and innovative learning environment. We strive to cultivate a community of lifelong learners who are well-equipped with the knowledge, critical thinking skills, and ethical values needed to succeed in an ever-evolving global society. Through a commitment to excellence in education, we aim to inspire creativity, foster diversity, and empower students to become compassionate, responsible leaders who contribute positively to the world around them."
                </p>
            </div>
        </div>
    );
}

// New function for the additional image section
function AdditionalImageSection() {
    return (
        <div className="image-section right"> {/* Use the right class for right positioning */}
            <div className="image-container">
                <img 
                    src="https://i.pinimg.com/564x/9b/eb/40/9beb4029cc931449ac1bfbe1a313bcb5.jpg" 
                    alt="Additional Decorative" 
                    className="decorative-image" 
                />
            </div>
        </div>
    );
}

