// Dashboard.js
import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className="sidebar-title">
                    <img src="https://media.canva.com/v2/image-resize/format:PNG/height:500/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FqGiOs%2FMAGSEEqGiOs%2F1%2Fp.png/watermark:F/width:500?csig=AAAAAAAAAAAAAAAAAAAAAJccRioxt-sg8dMhZnDwGERx8KB3ImGm653K_2sHDVhn&amp;exp=1727649784&amp;osig=AAAAAAAAAAAAAAAAAAAAACeOKjldur4iNV4pRLCZZ6bjD_prQF25r-dGbivAgfK_&amp;signer=media-rpc&amp;x-canva-quality=screen" alt="Logo" /> {/* Update with the correct image path */}
                    <span>Veritas Academia</span>
                </div>
                <ul className="sidebar-menu">
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#students">Students</a></li>
                    <li><a href="#classes">Classes</a></li>
                    <li><a href="#teachers">Teachers</a></li>
                    <li><a href="#assignments">Assignments</a></li>
                    <li><a href="#reports">Reports</a></li>
                </ul>
            </div>
            <div className="main-content">
                <div className="header">
                    <h1>Welcome to the Dashboard</h1>
                    <a href="#logout" className="logout-btn">Logout</a>
                </div>
                <div className="content">
                    <div className="stats">
                        <div className="stat-item">
                            <h3>Total Students</h3>
                            <p>120</p>
                        </div>
                        <div className="stat-item">
                            <h3>Total Classes</h3>
                            <p>15</p>
                        </div>
                        <div className="stat-item">
                            <h3>Attendance Rate</h3>
                            <p>95%</p>
                        </div>
                    </div>
                    <div className="notifications">
                        <h3>Recent Notifications</h3>
                        <p>No new notifications</p>
                    </div>
                    <div className="quick-actions">
                        <div className="quick-action">Add Student</div>
                        <div className="quick-action">Create Assignment</div>
                        <div className="quick-action">View Reports</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
