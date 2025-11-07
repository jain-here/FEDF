# Assignment 2: Student CGPA Management System

**Author:** Atharva Jain - 2420030092

A React.js application implementing routing mechanism for managing and displaying student CGPA details with PDF download functionality.

## Features

- ✅ React Router DOM for navigation
- ✅ Add student CGPA details
- ✅ View stored student information
- ✅ PDF generation using jsPDF
- ✅ Form validation
- ✅ Responsive design
- ✅ Modern gradient UI

## Installation

```bash
cd Assignment2-CGPA
npm install
```

## Running the Application

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

## Technologies Used

- React 19.2.0
- React Router DOM 7.9.5
- jsPDF 3.0.3
- Vite 7.2.1

## Project Structure

```
src/
├── components/
│   ├── AddCGPA.jsx
│   └── ViewCGPA.jsx
├── App.jsx
└── main.jsx
```

## Routes

- `/` - Add CGPA page
- `/view-cgpa` - View CGPA page

## How to Use

### Add CGPA
1. Navigate to "Add CGPA" page
2. Enter student name, roll number, and CGPA
3. Click "Add CGPA" to save
4. Click "Download PDF" to generate PDF

### View CGPA
1. Navigate to "View CGPA" page
2. View stored student information
3. Click "Download PDF" to download details

## Author

Created for CO2 Skill Week 5 - November 2025
