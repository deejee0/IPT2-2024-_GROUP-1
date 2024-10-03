    import React, { useEffect, useState } from "react";

    export default function AboutUs() {
        const [scrollingUp, setScrollingUp] = useState(true);
        const [lastScrollTop, setLastScrollTop] = useState(0);

        useEffect(() => {
            const handleScroll = () => {
                const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                    setScrollingUp(false);
                } else if (currentScrollTop < lastScrollTop) {
                    setScrollingUp(true);
                }
                setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, [lastScrollTop]);

        return (
            <div className="AboutUs">
                {/* Header with Logo */}
                <div className={`header-container ${scrollingUp ? 'visible' : 'hidden'}`}>
                    <img
                        src="https://media.canva.com/v2/image-resize/format:PNG/height:280/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FAmOLg%2FMAGSH1AmOLg%2F1%2Fp.png/watermark:F/width:677?csig=AAAAAAAAAAAAAAAAAAAAAPBPqBOQVZpfqbsVajHdMuVdR0DiwNvMyDdzL6ED4cUC&exp=1727614699&osig=AAAAAAAAAAAAAAAAAAAAAG7gjUuJdWVBKMNxaWLZ60oxLG76I7yOXGpVKGnCJ41i&signer=media-rpc&x-canva-quality=screen"
                        alt="School Logo"
                        className="logo"
                    />
                </div>
                {/* Banner Image */}
                <div className="banner-container">
                    <img
                        className="banner-image"
                        src="https://pbs.twimg.com/media/GY35EajbIAA_n3v?format=jpg&amp;name=4096x4096"
                        alt="Banner"
                    />
                </div>
                {/* Mission, Vision, and Core Values Section */}
    <div className="values-container">
        <h2>OUR PURPOSE</h2> {/* Optional Title */}
        <div className="mission-vision-container">
            <div className="value mission">
                <img className="value-icon" src="https://pbs.twimg.com/media/GY51bb8bAAIOrS7?format=png&amp;name=small" alt="Mission Icon" />
                <h3>MISSION</h3>
                <p>At Veritas Academia, our mission is to provide a holistic education that nurtures the intellectual, emotional, and social development of every student. We are committed to fostering a supportive and engaging learning environment that encourages exploration and innovation. Through a comprehensive curriculum, dedicated educators, and a focus on character development, we aim to cultivate critical thinkers and lifelong learners who are equipped with the skills and values necessary to thrive in a diverse and interconnected world. Together with our community, we inspire students to embrace challenges, celebrate diversity, and contribute positively to society.</p>
            </div>
            <div className="value vision">
                <img className="value-icon" src="https://pbs.twimg.com/media/GY51bb3bAAElZGB?format=png&amp;name=small" alt="Vision Icon" />
                <h3>VISION</h3>
                <p>To be a leading institution that nurtures the potential of every student by providing a dynamic and innovative learning environment. We strive to cultivate a community of lifelong learners who are well-equipped with the knowledge, critical thinking skills, and ethical values needed to succeed in an ever-evolving global society. Through a commitment to excellence in education, we aim to inspire creativity, foster diversity, and empower students to become compassionate, responsible leaders who contribute positively to the world around them.</p>
            </div>
            <div className="value core-values">
                <img className="value-icon" src="https://pbs.twimg.com/media/GY51bb2asAAgQg2?format=png&amp;name=small" alt="Core Values Icon" />
                <h3>CORE VALUES</h3>
                <p>Integrity, Excellence, and Community Engagement.</p>
            </div>
        </div>
    </div>

    {/* Campus and Library Section */}
    <div className="main-container">
        {/* Campus Section */}
        <div className="campus-container">
            <div className="campus-card">
                <img
                    className="campus-photo"
                    src="https://pbs.twimg.com/media/GY5g7iMbAAAidyF?format=jpg&amp;name=medium" // Replace with actual image URL
                    alt="Main Campus"
                />
            </div>
            <div className="description">
                <h2>Main Campus</h2>
                <p>
                    Nestled in the vibrant heart of Butuan City, at P-8 Bancasi, Veritas Academia boasts a campus that harmoniously blends modern architecture with the natural beauty of its surroundings. The lush greenery and meticulously landscaped gardens create a serene and inspiring environment, making it an ideal setting for learning and personal growth.
                </p>
            </div>
        </div>

        {/* Library Section */}
        <div className="library-container">
            <div className="library-card">
                <img
                    className="library-photo"
                    src="https://pbs.twimg.com/media/GY5oNn4bAAM6hFy?format=jpg&amp;name=medium" // Replace with actual image URL
                    alt="Library"
                />
            </div>
            <div className="description">
                <h2>Library</h2>
                <p>
                    Our library is a haven for knowledge, equipped with vast resources that support students' academic needs. It provides a quiet space for study and collaboration, making it an essential part of the campus experience.
                </p>
            </div>
        </div>
    </div>
{/* Separation Line */}
<hr className="section-divider" />

{/* President's Message Section */}
<div className="president-message">
    <h2>President's Message</h2>
    <p>Your president's message content goes here...</p>
</div>

                {/* Footer Section */}
                <footer className="footer">
                    <div className="footer-logo">
                        <img
                            src="https://pbs.twimg.com/media/GY3_PShbsAAWrsS?format=png&amp;name=small"
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
