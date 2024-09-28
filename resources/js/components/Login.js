

export default function Login() {
    return (
        <div className="school-login">
            <div className="school-login-container">
                <form className="school-login-form">
                    <h2 className="school-heading">School Management System</h2>

                    <div className="input-group school-input-group">
                        <label htmlFor="username" className="school-label">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            className="school-input"
                        />
                    </div>

                    <div className="input-group school-input-group">
                        <label htmlFor="password" className="school-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="school-input"
                        />
                    </div>

                    <button type="submit" className="school-login-btn">
                        Login
                    </button>

                    <p className="school-signup-text">
                        Don’t have an account? <a href="#" className="school-signup-link">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
