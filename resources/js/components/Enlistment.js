import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Enlistment() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    course: ""
  });
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const navigate = useNavigate(); // Use navigate to programmatically redirect after saving

  const availableSubjects = {
    "Information Technology": [
      { id: 1, name: "Integrative Programming and Technologies 2", schedule: "MWF 10:00am - 11:30am" },
      { id: 2, name: "Platform Technologies", schedule: "TTH 2:00pm - 3:30pm" },
      { id: 3, name: "Network Security", schedule: "MWF 1:00pm - 2:30pm" },
      { id: 4, name: "Database Management Systems", schedule: "TTH 9:00am - 10:30am" },
      { id: 5, name: "Web Development", schedule: "MWF 3:00pm - 4:30pm" },
    ],
    "Computer Science": [
      { id: 6, name: "Data Structures and Algorithms", schedule: "MWF 9:00am - 10:30am" },
      { id: 7, name: "Operating Systems", schedule: "TTH 1:00pm - 2:30pm" },
      { id: 8, name: "Computer Architecture", schedule: "MWF 11:00am - 12:30pm" },
      { id: 9, name: "Software Engineering", schedule: "TTH 3:00pm - 4:30pm" },
      { id: 10, name: "Artificial Intelligence", schedule: "MWF 2:00pm - 3:30pm" },
    ],
  };

  const availableCourses = [
    "Information Technology",
    "Computer Science",
    "Software Engineering",
    "Data Science"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    if (name === "course") {
      setSelectedSubjects([]); // Reset selected subjects when the course changes
    }
  };

  const handleSubjectSelection = (subjectId) => {
    if (selectedSubjects.includes(subjectId)) {
      setSelectedSubjects(selectedSubjects.filter((id) => id !== subjectId));
    } else {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    }
  };

  const handleSave = () => {
    const newStudent = {
      ...studentInfo,
      subjects: selectedSubjects.map((subjectId) => {
        const subject = availableSubjects[studentInfo.course].find((sub) => sub.id === subjectId);
        return subject ? subject.name : "";
      })
    };

    // Get existing students from localStorage or initialize as an empty array
    const existingStudents = JSON.parse(localStorage.getItem("studentsList")) || [];
    // Update the students list with the new student
    const updatedStudents = [...existingStudents, newStudent];
    // Save back to localStorage
    localStorage.setItem("studentsList", JSON.stringify(updatedStudents));

    // Clear form inputs
    setStudentInfo({ firstName: "", lastName: "", studentId: "", course: "" });
    setSelectedSubjects([]);

    // Redirect to Students page after save
    navigate("/students");
  };

  const handleCancel = () => {
    setStudentInfo({ firstName: "", lastName: "", studentId: "", course: "" });
    setSelectedSubjects([]);
  };

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
          <div className="dashboard-title">ENLISTMENT</div>
          <div className="dashboard-search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="dashboard-icons">
            <img src="https://pbs.twimg.com/media/GZeLqLMaAAEBXhg?format=png&name=360x360" alt="Notification Icon" className="notif-icon" />
            <img src="https://pbs.twimg.com/media/GZcqgy0bQAACjgM?format=jpg&name=medium" alt="Profile Icon" className="profile-icon" />
          </div>
        </div>

        {/* Enlistment Form */}
        <div className="enlistment-form-container">
          {/* Student Information Section */}
          <div className="student-info-container">
            <h2>Student Information</h2>
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={studentInfo.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={studentInfo.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              name="studentId"
              placeholder="Student ID"
              value={studentInfo.studentId}
              onChange={handleInputChange}
            />
            <select
              name="course"
              value={studentInfo.course}
              onChange={handleInputChange}
            >
              <option value="">Select Course</option>
              {availableCourses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Available Subjects Section */}
          <div className="subject-list-container">
            <h2>Available Subjects</h2>
            {studentInfo.course && availableSubjects[studentInfo.course] ? (
              <ul>
                {availableSubjects[studentInfo.course].map((subject) => (
                  <li key={subject.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedSubjects.includes(subject.id)}
                        onChange={() => handleSubjectSelection(subject.id)}
                      />
                      <span className="subject-name">{subject.name}</span>
                      <span className="subject-schedule">{subject.schedule}</span>
                    </label>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Please select a course to view available subjects.</p>
            )}
          </div>

          {/* Save or Cancel Section */}
          <div className="enlistment-actions">
            <button onClick={handleSave} className="save-button">Confirm & Save</button>
            <button onClick={handleCancel} className="cancel-button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
