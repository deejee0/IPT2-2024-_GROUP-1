import { Link } from "react-router-dom"; // Import Link for navigation

export default function SignUp() {
    return (
        <div className="school-signup">
            <div className="school-signup-container">
                <form className="school-signup-form">
                    <h2 className="school-heading">Create Your Account</h2>

                    {/* Full Name Input */}
                    <div className="input-group school-input-group">
                        <label htmlFor="fullname" className="school-label">Full Name</label>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Enter your full name"
                            className="school-input"
                            required // Make this field required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="input-group school-input-group">
                        <label htmlFor="email" className="school-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="school-input"
                            required // Make this field required
                        />
                    </div>

                    {/* Username Input */}
                    <div className="input-group school-input-group">
                        <label htmlFor="username" className="school-label">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Choose a username"
                            className="school-input"
                            required // Make this field required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="input-group school-input-group">
                        <label htmlFor="password" className="school-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Choose a password"
                            className="school-input"
                            required // Make this field required
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="input-group school-input-group">
                        <label htmlFor="confirm-password" className="school-label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm your password"
                            className="school-input"
                            required // Make this field required
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button type="submit" className="school-signup-btn">
                        Sign Up
                    </button>

                    {/* Link to Login Page */}
                    <p className="school-login-text">
                        Already have an account? 
                        <Link to="/login" className="school-login-link">Log In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
