import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        header.style.top = '0';
      } else {
        header.style.top = '-70px';
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
      <div className="contact-page">
        <header className="header">
        <h1>
          <img
            src="https://pbs.twimg.com/media/GZIp0ThaEAAvqiu?format=png&amp;name=small"
            className="logo"
            alt="Veritas Academia Logo"
          />
        </h1>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
      </header>
       {/* Background Section below the Header */}
       <div className="background-section"></div>

      <div className="body-content">
        {/* Buttons for Colleges, Quick Links, and Offices */}
        <div className="button-container">
          <button className="body">Colleges</button>
          <button className="body">Quick Links</button>
          <button className="body">Offices</button>
        </div>

        {/* Floating Chat Button */}
        <div className="floating-chat-button" onClick={toggleChat}>
          <i className="fas fa-comments"></i>
        </div>

        {isChatOpen && (
          <div className="chat-modal">
            <div className="chat-modal-content">
              <h2>Contact Support</h2>
              <form>
                <label>
                  Full Name
                  <input type="text" required />
                </label>
                <label>
                  Email
                  <input type="email" required />
                </label>
                <label>
                  Campus
                  <select required>
                    <option value="">Select Campus</option>
                    <option value="main">Main Campus</option>
                    <option value="satellite">Satellite Campus</option>
                  </select>
                </label>
                <label>
                  Subject
                  <input type="text" required />
                </label>
                <label>
                  Message
                  <textarea required></textarea>
                </label>
                <label>
                  Category
                  <select required>
                    <option value="">Select Category</option>
                    <option value="general">General Inquiry</option>
                    <option value="admission">Admissions</option>
                    <option value="support">Support</option>
                  </select>
                </label>
                <button type="submit">Submit</button>
                <button type="button" className="close-button" onClick={toggleChat}>Close</button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Main Footer */}
      <footer className="footer">
        <div className="footer-content">
        
          <p>P-8 Bancasi, Butuan City, 8671 Philippines</p>
          <p>veritas.academy@verit.edu.ph  |  09659823265</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link"><i className="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="icon-link"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <footer className="footer-bottom">
        <p>&copy; 2024 Veritas Academia. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
