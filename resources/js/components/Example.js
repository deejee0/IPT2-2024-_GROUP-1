import React from "react";
import { Link } from "react-router-dom";

export default function Example() {
    return (
        <div className="Home">
            <div className="header-container">
                <img 
                    src="https://media.canva.com/v2/image-resize/format:PNG/height:280/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FAmOLg%2FMAGSH1AmOLg%2F1%2Fp.png/watermark:F/width:677?csig=AAAAAAAAAAAAAAAAAAAAAPBPqBOQVZpfqbsVajHdMuVdR0DiwNvMyDdzL6ED4cUC&exp=1727614699&osig=AAAAAAAAAAAAAAAAAAAAAG7gjUuJdWVBKMNxaWLZ60oxLG76I7yOXGpVKGnCJ41i&signer=media-rpc&x-canva-quality=screen" 
                    alt="School Logo" 
                    className="logo"
                />
                <div className="nav-links">
                    <Link to="/about-us">About Us</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </div>
            <div className="school-content">
                <h1>Welcome to Veritas Academia</h1>
                <h3>Discover Your Future With Us</h3>
            </div>
            <div className="extra-content"></div> {/* This adds height for scrolling */}
        </div>
    );
}
