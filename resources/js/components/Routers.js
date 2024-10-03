import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Example from "./Example";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import SignUp from "./SignUp"; // Import the SignUp component
import ReadMore from "./ReadMore";

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Example />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} /> {/* Add route for SignUp */}
                <Route path="/read-more" element={<ReadMore />} />


            </Routes>
        </Router>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}
