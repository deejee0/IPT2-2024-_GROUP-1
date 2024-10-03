import React from "react";
import NavList from "./NavList";
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <div className="layout AboutUs">
            <NavList />

            <section className="hero">
                <div className="container">
                    <h1>Discover Your Future with Us</h1>
                </div>
            </section>

            <section className="features">
                <div className="feature">
                    <h3>Future Students</h3>
                    <p>If you believe that your future is bright with education, join us!</p>
                </div>
                <div className="feature">
                    <h3>Our Community</h3>
                    <p>We bring a community that supports and enhances your growth.</p>
                </div>
                <div className="feature">
                    <h3>Best Curriculum</h3>
                    <p>We offer the best resources to help you achieve academic success.</p>
                </div>
                <div className="feature">
                    <h3>Flexible Timing</h3>
                    <p>Study according to your schedule with our flexible timing options.</p>
                </div>
            </section>

            <section className="welcome-section">
                <h1>Welcome to Veritas Academia</h1>
                <p>We are excited to have you join us in your academic journey.</p>
            </section>

            {/* Vision and Image Section */}
            <div className="vision-image-container">
                <div className="left-image-container">
                    <img 
                        src="https://i.pinimg.com/564x/e8/6a/3d/e86a3dba21f62a1d48281d0af01ef225.jpg" 
                        alt="Decorative" 
                        className="left-image" 
                    />
                </div>
                <div className="vision-container">
                    <h2>Our Vision</h2>
                    <p>
                        To be a leading institution that nurtures the potential of every student by providing a dynamic and innovative learning environment. We strive to cultivate a community of lifelong learners who are well-equipped with the knowledge, critical thinking skills, and ethical values needed to succeed in an ever-evolving global society. Through a commitment to excellence in education, we aim to inspire creativity, foster diversity, and empower students to become compassionate, responsible leaders who contribute positively to the world around them.
                    </p>
                </div>
            </div>

            {/* Right Image and Mission Section */}
            <div className="right-image-mission-container">
                <div className="right-image-container">
                    <img 
                        src="https://i.pinimg.com/564x/9b/eb/40/9beb4029cc931449ac1bfbe1a313bcb5.jpg" 
                        alt="Right Decorative" 
                        className="right-image" 
                    />
                </div>
                <div className="mission-container">
                    <h2>Our Mission</h2>
                    <p>
                        "At Veritas Academia, our mission is to provide a holistic education that nurtures the intellectual, emotional, and social development of every student. We are committed to fostering a supportive and engaging learning environment that encourages exploration and innovation. Through a comprehensive curriculum, dedicated educators, and a focus on character development, we aim to cultivate critical thinkers and lifelong learners who are equipped with the skills and values necessary to thrive in a diverse and interconnected world. Together with our community, we inspire students to embrace challenges, celebrate diversity, and contribute positively to society."
                    </p>
                </div>
            </div>

                    <section className="school-areas">
            <h2>Explore Our School Areas</h2>
            <div className="school-areas-container">
                <div className="school-area">
                    <img 
                        src="https://i.pinimg.com/564x/e3/d4/30/e3d4305a2349d167fbd8e9e5ff6d8b13.jpg" 
                        alt="Cafeteria" 
                    />
                    <h3>Cafeteria</h3> {/* Cafeteria */}
                </div>
                <div className="school-area">
                    <img 
                        src="https://i.pinimg.com/564x/2e/c9/12/2ec912aa530fb39c4a0decb35f956400.jpg" 
                        alt="Learning Resources" 
                    />
                    <h3>Learning Resources</h3> {/* Learning Resources */}
                </div>
                <div className="school-area">
                    <img 
                        src="https://i.pinimg.com/564x/7c/d1/64/7cd164b060c0edb4ec4b5890db5424cc.jpg" 
                        alt="Lecture Hall" 
                    />
                    <h3>Lecture Hall</h3> {/* Lecture Hall */}
                </div>
            </div>
        </section>

        </div>
    );
}
