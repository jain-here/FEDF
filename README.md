# FEDF - Front End Development Frameworks
This repository contains the assignments for the Front End Development Frameworks course.

## Week 1: Project Initialization and First Commit
## Week 2: Branching and Merging
## Week 3: Responsive Web Page and Git History Exploration
## Week 4: Implement HTML5 and CSS Positioning with Responsive Design
## Week 5: HTML Form with JavaScript Validation
## Week 6: Weather Application with API Integration and Local Storage
## Week 7: Modular JavaScript and Working with JSON (Online Bookstore)
## Week 8: To-Do List Application with React Hooks
## Week 9: Book Explorer with React Router and Props
## CO2 Skill Week 5: Implementing Routing Mechanism
## FEDF Assignment 3: Matrix Sum Calculator

## Assignment 1

This assignment contains the following:

*   `question1.html`: A simple HTML page with a paragraph that can be edited with a button click.
*   `question2.html`: An HTML page with an image that changes on a button click.
*   `question3.html`: A simple multiplication table generator using JavaScript.
*   `question4.html`: An HTML page with a grid of cards showcasing different technologies.

## Week 6: Weather Application

**Aim:** To develop a weather application using HTML, CSS, and JavaScript that fetches and displays real-time weather data based on user input, while utilizing localStorage to save the last searched city.

### Features:
- **Weather API Integration**: Uses wttr.in API to fetch real-time weather data
- **Async/Await Implementation**: Modern JavaScript asynchronous programming
- **Local Storage**: Remembers the last searched city for better UX
- **Dynamic DOM Updates**: Real-time weather information display
- **Error Handling**: Graceful handling of invalid cities and network failures
- **Responsive Design**: Clean and user-friendly interface

### Technologies Used:
- HTML5 for structure
- CSS3 for styling and responsive design
- JavaScript ES6+ with Fetch API
- Async/Await for asynchronous operations
- LocalStorage API for data persistence

### Files:
- `Week6/index.html`: Main weather application
- `Week6/README.md`: Detailed documentation and VIVA questions

### Key Learning Outcomes:
1. Fetch API usage for HTTP requests
2. Async/await vs Promise chains
3. DOM manipulation and dynamic content updates
4. Browser storage APIs (localStorage)
5. Error handling in asynchronous operations

## Week 7: Online Bookstore

**Aim:** To develop a modular JavaScript application that demonstrates ES6 modules, JSON data handling, and dynamic UI updates in an online bookstore application.

### Features:
- **Modular Architecture**: Separation of concerns using ES6 modules
- **JSON Data Management**: External JSON file for book inventory
- **Shopping Cart System**: Add, remove, and calculate cart totals
- **Dynamic UI Updates**: Real-time cart and price updates
- **Event Delegation**: Efficient event handling for dynamic elements
- **Stock Management**: Disabled buttons for out-of-stock items

### Technologies Used:
- HTML5 for structure
- CSS3 for modern, responsive styling
- JavaScript ES6+ modules (import/export)
- JSON for data storage
- DOM manipulation and event listeners
- Async/await for data fetching

### Files:
- `Week7/index.html`: Main application interface
- `Week7/books.json`: JSON data file with book inventory
- `Week7/books.js`: Module for fetching book data
- `Week7/cart.js`: Module for cart management operations
- `Week7/ui.js`: Module for dynamic UI updates
- `Week7/main.js`: Entry point that coordinates all modules
- `Week7/README.md`: Detailed documentation with Q&A

### Key Learning Outcomes:
1. ES6 module system (import/export)
2. JSON data structure and parsing
3. Modular code organization and separation of concerns
4. Event delegation and dynamic event handling
5. Array methods (forEach, reduce) for data manipulation
6. DOM manipulation techniques
7. Async/await with fetch API

## Week 8: To-Do List Application

**Aim:** To develop a To-Do List Application using React Hooks and JSON Server backend to demonstrate full CRUD (Create, Read, Update, Delete) operations.

### Features:
- **React Hooks Implementation**: useState and useEffect for state management
- **Full CRUD Operations**: Create, Read, Update, and Delete tasks
- **JSON Server Backend**: Mock REST API for data persistence
- **Axios Integration**: HTTP client for API communication
- **Controlled Components**: Form input management
- **Conditional Rendering**: Empty state messaging
- **Event Handling**: Task completion toggling and deletion
- **Component Architecture**: Modular component structure

### Technologies Used:
- React 18.3 with Hooks (useState, useEffect)
- Vite for build tooling and dev server
- Axios for HTTP requests
- JSON Server for mock backend API
- ESLint for code quality
- CSS3 for styling

### Files:
- `Week8/backend/db.json`: JSON Server database file
- `Week8/frontend/src/components/TaskForm.jsx`: Form component for adding tasks
- `Week8/frontend/src/components/TaskList.jsx`: List rendering component
- `Week8/frontend/src/components/TaskItem.jsx`: Individual task component
- `Week8/frontend/src/App.jsx`: Main application component
- `Week8/frontend/src/api.jsx`: Axios API configuration
- `Week8/README.md`: Complete documentation with VIVA Q&A

### Key Learning Outcomes:
1. React Hooks (useState, useEffect)
2. RESTful API integration
3. CRUD operations implementation
4. Component state and props management
5. Event handling in React
6. Conditional rendering techniques
7. Axios for HTTP requests
8. Component-based architecture
9. Controlled form components
10. Modern React development with Vite

### API Endpoints:
- **GET** `/tasks` - Fetch all tasks
- **GET** `/tasks/:id` - Fetch single task
- **POST** `/tasks` - Create new task
- **PUT** `/tasks/:id` - Update task
- **DELETE** `/tasks/:id` - Delete task

### Setup:
```bash
# Backend
cd Week8/backend
npx json-server --watch db.json --port 5000

# Frontend
cd Week8/frontend
npm install
npm run dev
```

## Week 9: Book Explorer Application

**Aim:** To develop a Book Explorer application using React Router and Props to demonstrate client-side routing, dynamic routes, and component-based architecture.

### Features:
- **React Router Integration** - Client-side routing for seamless navigation
- **Dynamic Routing** - URL parameters for book-specific pages
- **Component Reusability** - Modular BookCard and BookDetail components
- **Props Data Passing** - Parent-to-child data flow
- **useState & useEffect Hooks** - State management and data loading
- **useParams Hook** - Dynamic URL parameter extraction
- **Simulated API Fetch** - Loading state demonstration
- **Navigation Links** - Smooth transitions between views

### Technologies Used:
- React 18.3 with Hooks (useState, useEffect)
- React Router DOM 6.20 for client-side routing
- Vite for build tooling and dev server
- ESLint for code quality
- HTML5 & CSS3 for structure and styling

### Files:
- `Week9/src/main.jsx`: Entry point with BrowserRouter
- `Week9/src/App.jsx`: Main app with route configuration
- `Week9/src/components/BookCard.jsx`: Reusable book card component
- `Week9/src/components/BookDetail.jsx`: Book detail page component
- `Week9/src/pages/BookList.jsx`: Book list page with state management
- `Week9/src/data/booksData.js`: Static book data
- `Week9/README.md`: Complete documentation with VIVA Q&A

### Key Learning Outcomes:
1. React Router for single-page applications
2. Dynamic routes and URL parameters
3. useParams hook for route parameters
4. Component props and data flow
5. State management with useState
6. Side effects with useEffect
7. Creating reusable components
8. Conditional rendering techniques
9. Modern React development with Vite
10. Client-side navigation without page reloads

### Routes:
- **GET** `/` - Book list view
- **GET** `/book/:id` - Book detail view with dynamic ID

### Setup:
```bash
cd Week9
npm install
npm install react-router-dom
npm run dev
```

## CO2 Skill Week 5: Student CGPA Management

**Aim:** Implementing Routing Mechanism - ReactJS application that implements a routing mechanism for managing and displaying a student's CGPA details and download as PDF.

### Features:
- **React Router Implementation** - BrowserRouter for client-side routing
- **Two Main Routes** - Add CGPA and View CGPA pages
- **State Management** - useState for managing student data across components
- **Form Handling** - Controlled components for input fields
- **PDF Generation** - jsPDF library for downloading student details
- **Data Passing** - Props to share state between parent and child components
- **Navigation** - Link component for seamless navigation
- **Form Validation** - Required field validation
- **Responsive Design** - Centered layout with clean styling

### Technologies Used:
- React 18.2 with Hooks (useState)
- React Router DOM 6.20 for client-side routing
- jsPDF 2.5 for PDF generation
- React Scripts 5.0 for build tooling
- HTML5 & CSS3 for structure and styling

### Files:
- `CO2_Skill_Week5/src/components/AddCGPA.jsx`: Form component for adding student CGPA
- `CO2_Skill_Week5/src/components/ViewCGPA.jsx`: Component to view and download CGPA
- `CO2_Skill_Week5/src/App.jsx`: Main app with route configuration and state management
- `CO2_Skill_Week5/src/index.jsx`: Entry point
- `CO2_Skill_Week5/README.md`: Complete documentation with React Router concepts

### Key Learning Outcomes:
1. React Router for single-page applications
2. BrowserRouter, Routes, Route, and Link components
3. State management across components using props
4. Controlled components for form handling
5. PDF generation using jsPDF library
6. Client-side routing without page reloads
7. Component communication through state lifting
8. Form validation and user feedback
9. Conditional rendering based on state
10. Understanding different types of React Routers

### Routes:
- **/** - Add CGPA form page
- **/view-cgpa** - View CGPA details page

### React Router Concepts Covered:
- **BrowserRouter** - HTML5 history API routing
- **HashRouter** - Hash-based routing
- **MemoryRouter** - In-memory routing for testing
- **NativeRouter** - React Native routing
- **Route** - URL to component mapping
- **Link** - Navigation without page refresh
- **Routes** - Container for route definitions

### Setup:
```bash
npx create-react-app student-cgpa
cd student-cgpa
npm install react-router-dom
npm install jspdf
npm start
```

## FEDF Assignment 3: Matrix Sum Calculator

**Aim:** Write ReactJS code for sum of two matrices using props and state.

### Features:
- **Dynamic Matrix Dimensions** - User-defined rows and columns for both matrices
- **State Management** - useState hooks for managing matrix data
- **Dynamic Matrix Rendering** - Matrices rendered based on user-defined dimensions
- **Editable Matrix Cells** - Input fields for entering matrix values
- **Matrix Addition** - Calculates sum of two matrices
- **Dimension Validation** - Ensures matrices have same dimensions before addition
- **Result Display** - Shows result matrix after calculation
- **Responsive Design** - Beautiful gradient styling with responsive layout
- **Error Handling** - Alerts for invalid operations

### Technologies Used:
- React 18.2 with Hooks (useState)
- React Scripts 5.0 for build tooling
- CSS3 for gradient styling and animations
- HTML5 for structure

### Files:
- `FEDF_Assignment3/src/MatrixSumCalculator.jsx`: Main component with matrix operations
- `FEDF_Assignment3/src/App.jsx`: Application wrapper
- `FEDF_Assignment3/src/index.jsx`: Entry point
- `FEDF_Assignment3/src/Styles.css`: Beautiful gradient styling
- `FEDF_Assignment3/README.md`: Complete documentation

### Key Learning Outcomes:
1. Managing complex nested state (2D arrays)
2. useState Hook with multiple state variables
3. Event handling for inputs and buttons
4. Conditional rendering based on state
5. Dynamic rendering with map() and Array.from()
6. Component reusability with functions
7. Props - passing functions as props
8. Form handling with controlled components
9. Input and operation validation
10. CSS styling for mathematical applications

### Matrix Operations:
- **Matrix Addition:** C[i][j] = A[i][j] + B[i][j]
- **Dimension Validation:** Matrices must have same dimensions
- **Dynamic Input:** User can set any matrix size

### Setup:
```bash
npx create-react-app matrix-calculator
cd matrix-calculator
# Copy files from FEDF_Assignment3/src
npm start
```