import React, { useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAllExams, setShowAllExams] = useState(false);

  return (
    <div className={`rounded-dashboard-container ${sidebarOpen ? "" : "collapsed-sidebar"}`}>
      {/* Sidebar Toggle Button - visible only in mobile view */}
      <button
        className="toggle-sidebar-button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <div className="rounded-sidebar">
        <div className="rounded-logo-section">
          <img
            src="https://pbs.twimg.com/media/GZb0u-uasAIQVPD?format=png&name=360x360"
            alt="School Logo"
            className="rounded-logo"
          />
          <div className="rounded-separator"></div>
        </div>

        {/* Main Navigation Links */}
        <nav className="rounded-nav-links">
          <a href="/dashboard">
            <img src="https://pbs.twimg.com/media/GZeCAb8aAAI1nbc?format=png&name=360x360" alt="" className="link-icon" />
            Dashboard
          </a>
          <a href="/enlistment">
            <img src="https://pbs.twimg.com/media/GZeDjCwacAA3xfm?format=png&name=360x360" alt="" className="link-icon" />
            Enlistment
          </a>
          <a href="/profiling">
            <img src="https://pbs.twimg.com/media/GZeDjCxaAAUcedj?format=png&name=360x360" alt="" className="link-icon" />
            Profiling
          </a>
          <a href="/students">
            <img src="https://pbs.twimg.com/media/GZeDjCvbMAA2FNO?format=png&name=360x360" alt="" className="link-icon" />
            Students
          </a>
          <a href="/instructors">
            <img src="https://pbs.twimg.com/media/GZeDjCxaMAAfFOU?format=png&name=360x360" alt="" className="link-icon" />
            Instructors
          </a>
        </nav>

        {/* Bottom Links */}
        <div className="rounded-bottom-links">
          <a href="/system-admin">
            <img src="https://pbs.twimg.com/media/GZeFoEhb0AAVIRt?format=png&name=360x360" alt="" className="link-icon" />
            System Admin
          </a>
          <a href="/logout">
            <img src="https://pbs.twimg.com/media/GZeENxUaAAQ97Oi?format=png&name=360x360" alt="" className="link-icon" />
            Logout
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="rounded-main-content">
        <div className="rounded-upper-container">
          <div className="dashboard-title">Dashboard</div>
          <div className="dashboard-search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="dashboard-icons">
            <img src="https://pbs.twimg.com/media/GZeLqLMaAAEBXhg?format=png&name=360x360" alt="Notification Icon" className="notif-icon" />
            <img src="https://pbs.twimg.com/media/GZcqgy0bQAACjgM?format=jpg&name=medium" alt="Profile Icon" className="profile-icon" />
          </div>
        </div>

        {/* Statistic Boxes */}
        <div className="rounded-statistics-container">
          <div className="stat-box">
            <img src="https://pbs.twimg.com/media/GZedn7raMAA-BV-?format=png&amp;name=small" alt="Students Icon" className="stat-icon" />
            <span className="stat-text">Students</span>
            <div className="stat-number">12,478</div>
          </div>
          <div className="stat-box">
            <img src="https://pbs.twimg.com/media/GZedn7raAAEBlGn?format=png&amp;name=small" alt="Instructors Icon" className="stat-icon" />
            <span className="stat-text">Instructors</span>
            <div className="stat-number">478</div>
          </div>
          <div className="stat-box">
            <img src="https://pbs.twimg.com/media/GZedn7obAAA64cr?format=png&amp;name=small" alt="Attendance Icon" className="stat-icon" />
            <span className="stat-text">Attendance</span>
            <div className="stat-number">95%</div>
          </div>
          <div className="stat-box">
            <img src="https://pbs.twimg.com/media/GZedn7pa0AADx_P?format=png&amp;name=small" alt="Earnings Icon" className="stat-icon" />
            <span className="stat-text">Earnings</span>
            <div className="stat-number">$42.8k</div>
          </div>
        </div>

        {/* Exam Schedule Section */}
        <div className="exam-schedule-container">
          <div className="exam-schedule-title">
            Exam Schedule 
            <a
              href="#"
              className="see-all-link"
              onClick={(e) => {
                e.preventDefault();
                setShowAllExams(!showAllExams);
              }}
            >
              {showAllExams ? "See less" : "See all"}
            </a>
          </div>
          <table className="exam-schedule-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Section</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Integrative Programming and Technologies 2</td>
                <td>IT32</td>
                <td><strong>4 October</strong></td>
                <td>5:00 pm - 7:00 pm</td>
              </tr>
              <tr>
                <td>Platform Technologies</td>
                <td>IT32</td>
                <td><strong>11 October</strong></td>
                <td>3:00 pm - 6:00 pm</td>
              </tr>
              <tr>
                <td>Social Issues and Professional Practice</td>
                <td>IT32</td>
                <td><strong>7 October</strong></td>
                <td>1:00 pm - 3:00 pm</td>
              </tr>
              {showAllExams && (
                <>
                  <tr>
                    <td>Information Assurance and Security 1 (with CISDP-Part 1)</td>
                    <td>IT32</td>
                    <td><strong>4 October</strong></td>
                    <td>1:00 pm - 3:00 pm</td>
                  </tr>
                  <tr>
                    <td>Advanced Networking</td>
                    <td>IT32</td>
                    <td><strong>7 October</strong></td>
                    <td>1:00 pm - 3:00 pm</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* Announcements Section */}
        <div className="announcements-container">
          <div className="announcements-title">Announcements</div>
          <div className="announcement">
            <strong>New Course Available:</strong> Introduction to Data Science.
          </div>
          <div className="announcement">
            <strong>Reminder:</strong> Campus will be closed on 15th April for maintenance.
          </div>
          <div className="announcement">
            <strong>Upcoming Event:</strong> Science Fair on 20th April.
          </div>
        </div>
      </div>
    </div>
  );
}
