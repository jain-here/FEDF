# ReactJS Assignments - Complete Submission

Three separate React.js applications demonstrating different concepts and features.

---
## Atharva Jain - 2420030092
---
## 📁 Project Structure

```
calculator_using_reactJS assignement/
├── Assignment1-Calculator/         → Calculator Application
├── Assignment2-CGPA/              → Student CGPA Management with Routing
├── Assignment3-Matrix/            → Matrix Sum Calculator
└── README.md                      → This file
```

---

## 📋 Assignment Details

### ✅ Assignment 1: Calculator Application

**Folder:** `Assignment1-Calculator`

**Description:** A fully functional calculator with modern UI

**Features:**
- Basic arithmetic operations (+, -, ×, ÷)
- Decimal point support
- Clear (C) and Clear Entry (CE)
- Backspace functionality
- Sign change (+/-)
- Responsive design

**Technologies:**
- React 19.2.0
- Vite 7.2.1
- CSS3

**How to Run:**
```bash
cd Assignment1-Calculator
npm install
npm run dev
```

---

### ✅ Assignment 2: Student CGPA Management System

**Folder:** `Assignment2-CGPA`

**Description:** Student CGPA management with React Router and PDF generation

**Features:**
- React Router DOM navigation
- Add student CGPA details
- View stored information
- PDF download using jsPDF
- Form validation
- Two-page routing system

**Technologies:**
- React 19.2.0
- React Router DOM 7.9.5
- jsPDF 3.0.3
- Vite 7.2.1

**Routes:**
- `/` - Add CGPA page
- `/view-cgpa` - View CGPA page

**How to Run:**
```bash
cd Assignment2-CGPA
npm install
npm run dev
```

---

### ✅ Assignment 3: Matrix Sum Calculator

**Folder:** `Assignment3-Matrix`

**Description:** Matrix addition calculator using props and state

**Features:**
- Dynamic matrix dimensions
- Matrix A and B input
- Matrix addition algorithm
- Result display with animation
- Dimension validation
- Props and state demonstration

**Technologies:**
- React 19.2.0
- Vite 7.2.1
- CSS3 with animations

**How to Run:**
```bash
cd Assignment3-Matrix
npm install
npm run dev
```

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation & Running

Each project can be run independently:

```powershell
# For Calculator
cd Assignment1-Calculator
npm install
npm run dev

# For CGPA (in new terminal)
cd Assignment2-CGPA
npm install
npm run dev

# For Matrix Calculator (in new terminal)
cd Assignment3-Matrix
npm install
npm run dev
```

All applications will run on `http://localhost:5173` (or next available port)

---

## 📊 Feature Comparison

| Feature | Calculator | CGPA | Matrix |
|---------|-----------|------|--------|
| React Hooks | ✅ useState | ✅ useState | ✅ useState |
| React Router | ❌ | ✅ | ❌ |
| PDF Generation | ❌ | ✅ jsPDF | ❌ |
| Form Validation | ✅ | ✅ | ✅ |
| Responsive Design | ✅ | ✅ | ✅ |
| Props Usage | ✅ | ✅ | ✅ |
| State Management | ✅ | ✅ | ✅ |

---

## 🎯 Learning Outcomes

### Assignment 1 - Calculator
- Component-based architecture
- Event handling
- State management for calculations
- UI/UX design principles

### Assignment 2 - CGPA
- React Router DOM implementation
- BrowserRouter, Routes, Route, Link
- State lifting pattern
- Third-party library integration (jsPDF)
- Multi-page SPA architecture

### Assignment 3 - Matrix
- Complex state management
- 2D array manipulation
- Props drilling
- Dynamic rendering
- Array methods (map, Array.from)
- Algorithm implementation

---

## 📝 Code Highlights

### Calculator - State Management
```javascript
const [display, setDisplay] = useState("0");
const [previousValue, setPreviousValue] = useState(null);
const [operation, setOperation] = useState(null);
```

### CGPA - React Router
```javascript
<Router>
  <Routes>
    <Route path="/" element={<AddCGPA setStudentData={setStudentData} />} />
    <Route path="/view-cgpa" element={<ViewCGPA studentData={studentData} />} />
  </Routes>
</Router>
```

### Matrix - 2D Array Operations
```javascript
const result = matrixA.map((row, i) =>
  row.map((val, j) => val + matrixB[i][j])
);
```

---

## 🎨 Design Features

All three applications feature:
- **Modern Gradient Backgrounds**
- **Responsive Layouts** (Mobile & Desktop)
- **Smooth Animations & Transitions**
- **Professional Color Schemes**
- **Box Shadows & Depth Effects**
- **Clean, Intuitive UI**

---

## 📦 Dependencies Summary

### Assignment 1 (Calculator)
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "vite": "^7.2.1",
  "@vitejs/plugin-react": "^5.1.0"
}
```

### Assignment 2 (CGPA)
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.9.5",
  "jspdf": "^3.0.3",
  "vite": "^7.2.1",
  "@vitejs/plugin-react": "^5.1.0"
}
```

### Assignment 3 (Matrix)
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "vite": "^7.2.1",
  "@vitejs/plugin-react": "^5.1.0"
}
```

---

## 🔧 Build Commands

Each project supports the following commands:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 📸 Screenshots Guide

### For Submission, capture screenshots of:

**Assignment 1 - Calculator:**
1. Calculator interface
2. A calculation in progress
3. Result display

**Assignment 2 - CGPA:**
1. Add CGPA page with form
2. View CGPA page with data
3. Downloaded PDF file

**Assignment 3 - Matrix:**
1. Matrix dimensions setup
2. Matrices with input values
3. Result matrix display

---

## ✅ Testing Checklist

### Assignment 1 - Calculator
- [x] All number buttons work
- [x] All operations work (+, -, ×, ÷)
- [x] Clear (C) clears everything
- [x] CE clears current entry
- [x] Backspace removes last digit
- [x] Decimal point works
- [x] Sign change works
- [x] Responsive on mobile

### Assignment 2 - CGPA
- [x] Navigation works between pages
- [x] Form validation works
- [x] Data persists across routes
- [x] PDF downloads successfully
- [x] Alerts show properly
- [x] Both pages can download PDF

### Assignment 3 - Matrix
- [x] Matrix dimensions can be set
- [x] Values can be input
- [x] Validation for mismatched dimensions
- [x] Calculation is accurate
- [x] Result displays correctly
- [x] Clear previous results on new setup

---

## 🎓 React Concepts Covered

### Core Concepts
- ✅ Functional Components
- ✅ JSX Syntax
- ✅ Props
- ✅ State Management (useState)
- ✅ Event Handling
- ✅ Conditional Rendering
- ✅ Lists & Keys (map)
- ✅ Forms & Controlled Components

### Advanced Concepts
- ✅ React Router DOM
- ✅ State Lifting
- ✅ Component Composition
- ✅ Third-party Libraries Integration
- ✅ Array Methods
- ✅ Responsive Design

---

## 📚 Documentation

Each assignment folder contains:
- `README.md` - Specific project documentation
- `src/` - Source code
- `package.json` - Dependencies
- `vite.config.js` - Vite configuration
- `index.html` - HTML template

---

## 🎯 Submission Checklist

For ALM Component Upload:

- [x] All 3 assignments in separate folders
- [x] All dependencies installed
- [x] All projects tested and working
- [x] README files in each folder
- [x] Clean, well-commented code
- [x] No console errors
- [x] Responsive design verified
- [x] Professional appearance

---

## 🏆 Project Status

**STATUS:** ✅ **ALL 3 ASSIGNMENTS COMPLETE & READY FOR SUBMISSION**

### Summary
- ✅ Assignment 1 - Calculator: COMPLETE
- ✅ Assignment 2 - CGPA Management: COMPLETE  
- ✅ Assignment 3 - Matrix Calculator: COMPLETE

All projects are:
- Fully functional
- Well-documented
- Production-ready
- Tested and verified

---

## 👨‍💻 Author

**Created for:** ReactJS Assignment Submission  
**Date:** November 7, 2025  
**Course:** Frontend Development / ReactJS  

---

## 📧 Support

If you encounter any issues:

1. Ensure Node.js is installed
2. Run `npm install` in each project folder
3. Check that no other application is using port 5173
4. Clear browser cache if styles don't load
5. Use `npm run dev` to start each project

---

## 🎉 Thank You!

All three assignments have been completed successfully with modern UI, clean code, and proper documentation. Ready for submission to ALM component!

