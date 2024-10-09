import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Example() {
    const [scrollingUp, setScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Check if scrolling down
            if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                setScrollingUp(false);
            } else if (currentScrollTop < lastScrollTop) {
                setScrollingUp(true);
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);

    return (
        <div className="Home">
            <div className={`header-container ${scrollingUp ? 'visible' : 'hidden'}`}>
                <img
                    src="https://pbs.twimg.com/media/GY8kPUvbQAAA3Ik?format=png&amp;name=900x900" 
                    alt="School Logo"
                    className="logo"
                />
                <div className="nav-links">
                    <Link to="/login">Login</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </div>

            <div className="school-content">
                <h2>Prepare for the future at Veritas Academia</h2>
                <h3>Discover exceptional programs designed to help you achieve your dreams</h3>
                <Link to="/about-us" className="about-us-button">Get to Know Us</Link>
            </div>

            <div className="courses-offered">
                <h2>Veritas Academia's Top Programs</h2>
                <div className="course-boxes">
                    <div className="course-box">
                        <img
                            src="https://media.licdn.com/dms/image/v2/C511BAQFAPbdHMEZBfQ/company-background_10000/company-background_10000/0/1584489046645/ama_university_cover?e=2147483647&amp;v=beta&amp;t=lyMW72b1qSgLFnLgKr0eH-LGF98MtARZOAuonb-IsE0"
                            alt="Computer Studies"
                        />
                        <div className="course-title">Computer Studies</div>
                        <div className="course-description">Learn about software development, networking, and systems analysis.</div>
                    </div>
                    <div className="course-box">
                        <img
                            src="https://lpubatangas.edu.ph/wp-content/uploads/2021/06/DSC_3773-scaled.jpg"
                            alt="Engineering"
                        />
                        <div className="course-title">Engineering</div>
                        <div className="course-description">Explore various engineering disciplines including civil, mechanical, and electrical engineering.</div>
                    </div>
                    <div className="course-box">
                        <img
                            src="https://media.philstar.com/photos/2023/06/20/5_2023-06-20_22-47-34.jpg"
                            alt="Health Sciences"
                        />
                        <div className="course-title">Health Sciences</div>
                        <div className="course-description">Dive into health care practices and the science behind them.</div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-logo">
                    <img
                        src="https://pbs.twimg.com/media/GY8kPUvbQAAA3Ik?format=png&amp;name=900x900" 
                        alt="School Logo"
                    />
                </div>
                <div className="footer-content">    
                    <p>P-8 Bancasi, Butuan City, Philippines</p>
                    <p>Email: contact@veritasacademia.edu | Phone: +639 65982 3265</p>
                </div>
            </footer>
        </div>
    );
}
