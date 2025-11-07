import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddCGPA from "./components/AddCGPA";
import ViewCGPA from "./components/ViewCGPA";
import "./App.css";

const App = () => {
  const [studentData, setStudentData] = useState(null);

  return (
    <Router>
      <div className="app-container">
        <h1>Student CGPA Management System</h1>
        
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Add CGPA
              </Link>
            </li>
            <li>
              <Link to="/view-cgpa" className="nav-link">
                View CGPA
              </Link>
            </li>
          </ul>
        </nav>

        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={<AddCGPA setStudentData={setStudentData} />}
            />
            <Route
              path="/view-cgpa"
              element={<ViewCGPA studentData={studentData} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
