import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./AddCGPA.css";

const AddCGPA = ({ setStudentData }) => {
  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [cgpa, setCgpa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName && rollNumber && cgpa) {
      setStudentData({ studentName, rollNumber, cgpa });
      alert("Student CGPA Added Successfully!");
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleDownload = () => {
    if (!studentName || !rollNumber || !cgpa) {
      alert("Please fill all fields before downloading!");
      return;
    }

    const doc = new jsPDF();
    
    // Add header
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 150);
    doc.text("Student CGPA Details", 105, 20, { align: "center" });
    
    // Add line
    doc.setDrawColor(40, 40, 150);
    doc.line(20, 25, 190, 25);
    
    // Add student details
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Student Name:", 20, 40);
    doc.text(studentName, 70, 40);
    
    doc.text("Roll Number:", 20, 55);
    doc.text(rollNumber, 70, 55);
    
    doc.text("CGPA:", 20, 70);
    doc.text(cgpa, 70, 70);
    
    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Generated on: " + new Date().toLocaleDateString(), 105, 280, { align: "center" });
    
    doc.save("student-details.pdf");
  };

  return (
    <div className="add-cgpa-container">
      <h2>Add Student CGPA</h2>
      <form onSubmit={handleSubmit} className="cgpa-form">
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student name"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter roll number"
            required
          />
        </div>
        
        <div className="form-group">
          <label>CGPA:</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="10"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            placeholder="Enter CGPA (0-10)"
            required
          />
        </div>
        
        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            Add CGPA
          </button>
          <button type="button" onClick={handleDownload} className="btn btn-success">
            Download PDF
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCGPA;
