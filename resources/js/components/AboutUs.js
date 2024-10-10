import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <div className="AboutUs">
            {/* Header with Logo and Navigation Links */}
            <div className="header-wrap">
                <img
                    src="https://pbs.twimg.com/media/GZIp0ThaEAAvqiu?format=png&name=small"
                    alt="School Logo"
                    className="logo"
                />
            
                <div className="header-navigation-links">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </div>

            {/* Center Content with Information */}
            <div className="center-wrap">
                <div className="info-box">
                    <h2>WHO, WHEN?</h2>
                </div>
                <div className="short-about">
                    <h2>Short About Veritas Academia!</h2>
                    <p>
                        Veritas Academia was founded with a mission to provide a holistic education that fosters the intellectual, emotional, and social growth of students. With a focus on character development and a supportive learning environment, we strive to cultivate lifelong learners and responsible citizens.
                    </p>
                </div>
            </div>

            {/* Wrap Nest Section */}
            <div className="wrap-nest">
                <div className="description">
                    <h3>LOCATION</h3>
                    <h2>Main Campus</h2>
                    <p>
                        Veritas Academia is headquartered in the heart of P-8 Bancasi, Butuan City, Philippines. We are committed to providing quality education and fostering a diverse, innovative learning environment where students can grow academically and personally.
                    </p>
                </div>
                <div className="image-box" style={{ width: '500px', height: '500px' }}>
                    <img
                        src="https://pbs.twimg.com/media/GZc0IyQa4AAm3dc?format=jpg&amp;name=large"
                        alt="Campus Image"
                    />
                </div>
            </div>

            {/* Wrap Nest Section But Flip */}
            <div className="wrap-nest-flip">
                <div className="image-box" style={{ width: '500px', height: '500px' }}>
                    <img
                        src="https://pbs.twimg.com/media/GZc0IyRbQAANxmU?format=jpg&amp;name=4096x4096"
                        alt="Campus Image"
                    />
                </div>
                <div className="description">
                    <h3>NUMBER OF STUDENTS</h3>
                    <h2>Student Community</h2>
                    <p>
                        Veritas Academia has a diverse community of students, with a growing number of talented individuals joining each year. We are committed to providing an environment where students can thrive, learn, and achieve their academic and personal goals.
                    </p>
                </div>
            </div>

            {/* Line Separator */}
            <hr className="section-divider" />

            {/* Mission, Vision, and Core Values Section */}
            <div className="mission-vision-values">
                <div className="mission">
                    <h3>MISSION</h3>
                    <p>
                        Our mission is to provide a holistic education that nurtures the intellectual, emotional, and social development of every student. We aim to cultivate critical thinkers and lifelong learners.
                    </p>
                </div>
                <div className="vision">
                    <h3>VISION</h3>
                    <p>
                        To be a leading institution that nurtures the potential of every student, providing a dynamic and innovative learning environment to inspire creativity, foster diversity, and empower compassionate leaders.
                    </p>
                </div>
                <div className="core-values">
                    <h3>CORE VALUES</h3>
                    <p>
                        Integrity, Excellence, and Community Engagement.
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-logo">
                    <img
                        src="https://pbs.twimg.com/media/GY3_PShbsAAWrsS?format=png&name=small"
                        alt="School Logo"
                    />
                </div>
                <div className="footer-content">
                    <p>&copy; 2024 Veritas Academia. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}