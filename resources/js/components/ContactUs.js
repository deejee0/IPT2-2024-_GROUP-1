import React, { useEffect, useState } from "react";

export default function ContactUs() {
    const [headerMinimized, setHeaderMinimized] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Apply minimized style if scrolled more than 100px
            setHeaderMinimized(currentScrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="ContactUsPage">
            {/* Header with Logo */}
            <div className={`contact-header-wrap ${headerMinimized ? 'minimized' : ''}`}>
                <img
                    src="https://pbs.twimg.com/media/GZIp0ThaEAAvqiu?format=png&name=small"
                    alt="School Logo"
                    className="logo"
                />
                <div className="contact-nav-links">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/login">Login</a>
                </div>
            </div>

            {/* Center Content with Background Image */}
            <div className="contact-center-wrap">
                <p>
                    {/* Your centered content goes here */}
                </p>
            </div>

            {/* Contact Veritas Academy Heading and Divider */}
            <h2 className="contact-heading">Contact Information</h2>
            <hr className="contact-divider" />

            {/* Address, Telephone, Offices, and Emails Section */}
            <div className="contact-details">
                <div className="contact-item">
                    <h3>Our Address:</h3>
                    <p>P-8 Bancasi, Butuan City, Philippines</p>
                </div>
                <div className="contact-item">
                    <h3>Telephone Numbers:</h3>
                    <p>+63 123 456 7890</p>
                    <p>+63 987 654 3210</p>
                </div>
                <div className="contact-item">
                    <h3>Offices:</h3>
                    <p>Admissions Office - <a href="mailto:admissions@veritasacademia.edu">admissions@veritasacademia.edu</a></p>
                    <p>Student Affairs Office - <a href="mailto:studentaffairs@veritasacademia.edu">studentaffairs@veritasacademia.edu</a></p>
                    <p>Registrar's Office - <a href="mailto:registrar@veritasacademia.edu">registrar@veritasacademia.edu</a></p>
                </div>
                <div className="contact-item">
                    <h3>Main Email:</h3>
                    <p>Email: <a href="mailto:contact@veritasacademia.edu">contact@veritasacademia.edu</a></p>
                </div>
            </div>

            {/* Submit a Ticket Section */}
            <div className="submit-ticket">
                <h3>Submit Your Concerns Here</h3>
                <form className="ticket-form">
                    <input type="text" placeholder="Your Name" className="ticket-input" required />
                    <input type="email" placeholder="Your Email" className="ticket-input" required />
                    <textarea placeholder="Your Message" className="ticket-textarea" rows="5" required></textarea>
                    <button type="submit" className="ticket-button">Submit</button>
                </form>
            </div>

            {/* Footer Section */}
            <footer className="contact-footer">
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
