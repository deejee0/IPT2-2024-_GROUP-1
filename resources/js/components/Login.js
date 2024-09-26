import NavList from "./NavList";

export default function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <form className="login-form">
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <div className="input-icon">
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                            />
                            <i className="icon-user"></i>
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-icon">
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                            <i className="icon-lock"></i>
                        </div>
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>

                    <p className="signup-text">
                        Don’t have an account? <a href="#">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
