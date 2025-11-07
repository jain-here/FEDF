import React from "react";
import { jsPDF } from "jspdf";
import "./ViewCGPA.css";

const ViewCGPA = ({ studentData }) => {
  const handleDownloadPDF = () => {
    if (studentData) {
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
      doc.text(studentData.studentName, 70, 40);
      
      doc.text("Roll Number:", 20, 55);
      doc.text(studentData.rollNumber, 70, 55);
      
      doc.text("CGPA:", 20, 70);
      doc.text(studentData.cgpa, 70, 70);
      
      // Add footer
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text("Generated on: " + new Date().toLocaleDateString(), 105, 280, { align: "center" });
      
      doc.save("student-details.pdf");
    } else {
      alert("No student data available to download.");
    }
  };

  return (
    <div className="view-cgpa-container">
      <h2>View Student CGPA</h2>
      {studentData ? (
        <div className="student-info-card">
          <div className="info-row">
            <span className="label">Student Name:</span>
            <span className="value">{studentData.studentName}</span>
          </div>
          
          <div className="info-row">
            <span className="label">Roll Number:</span>
            <span className="value">{studentData.rollNumber}</span>
          </div>
          
          <div className="info-row">
            <span className="label">CGPA:</span>
            <span className="value cgpa-value">{studentData.cgpa}</span>
          </div>
          
          <button onClick={handleDownloadPDF} className="btn btn-download">
            Download PDF
          </button>
        </div>
      ) : (
        <div className="no-data-message">
          <p>📚 No student data available.</p>
          <p>Please add CGPA first.</p>
        </div>
      )}
    </div>
  );
};

export default ViewCGPA;
