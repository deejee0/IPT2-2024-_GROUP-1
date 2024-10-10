import React, { useEffect, useState } from "react";

export default function Students() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [studentsList, setStudentsList] = useState([]);

  // Retrieve student data from localStorage on component mount
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("studentsList")) || [];
    setStudentsList(storedStudents);
  }, []);

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
        {/* Upper Container */}
        <div className="rounded-upper-container">
          <div className="dashboard-title">STUDENTS</div>
          <div className="dashboard-search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="dashboard-icons">
            <img src="https://pbs.twimg.com/media/GZeLqLMaAAEBXhg?format=png&name=360x360" alt="Notification Icon" className="notif-icon" />
            <img src="https://pbs.twimg.com/media/GZcqgy0bQAACjgM?format=jpg&name=medium" alt="Profile Icon" className="profile-icon" />
          </div>
        </div>

        {/* Students List Container */}
        <div className="students-list-container">
          <h2>Enlisted Students</h2>
          <div className="student-cards">
            {studentsList.length > 0 ? (
              studentsList.map((student, index) => (
                <div className="student-card" key={index}>
                  <div className="student-info">
                    <span>{student.firstName} {student.lastName}</span> <br />
                    <strong>ID: </strong>{student.studentId} <br />
                    <strong>Course: </strong>{student.course}
                  </div>
                  <div className="student-subjects">
                    <strong>Subjects:</strong>
                    <ul>
                      {student.subjects.map((subject, subIndex) => (
                        <li key={subIndex}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <p>No students have been enlisted yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
