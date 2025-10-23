# FEDF Assignment 3 - Matrix Sum Calculator

## Aim
Write ReactJS code for sum of two matrices using props and state

## Description
This React application demonstrates matrix addition operations using React Hooks (useState) for state management. The application allows users to:
- Define custom dimensions for two matrices (Matrix A and Matrix B)
- Input values into matrix cells dynamically
- Calculate and display the sum of the two matrices
- Validates that matrices have the same dimensions before performing addition

The project showcases fundamental React concepts including state management, event handling, conditional rendering, and dynamic component rendering.

## Project Structure
```
FEDF_Assignment3/
├── src/
│   ├── MatrixSumCalculator.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── Styles.css
├── public/
│   └── index.html
├── package.json
├── .gitignore
└── README.md
```

## Setup Instructions

### Step 1: Create React Application
```bash
npx create-react-app matrix-calculator
cd matrix-calculator
```

### Step 2: Install Dependencies
All necessary dependencies are included with create-react-app. No additional installations required.

### Step 3: Run the Application
```bash
npm start
```

The application will start at `http://localhost:3000`

## Features

### Implemented Functionality
✅ **Dynamic Matrix Dimensions** - User-defined rows and columns for both matrices  
✅ **State Management** - useState hooks for managing matrix data  
✅ **Dynamic Matrix Rendering** - Matrices rendered based on user-defined dimensions  
✅ **Editable Matrix Cells** - Input fields for entering matrix values  
✅ **Matrix Addition** - Calculates sum of two matrices  
✅ **Dimension Validation** - Ensures matrices have same dimensions before addition  
✅ **Result Display** - Shows result matrix after calculation  
✅ **Responsive Design** - Beautiful gradient styling with responsive layout  
✅ **Error Handling** - Alerts for invalid operations  

## Components Overview

### 1. MatrixSumCalculator.jsx
- **Purpose:** Main component handling all matrix operations
- **State Variables:**
  - `rowsA`, `colsA` - Dimensions of Matrix A
  - `rowsB`, `colsB` - Dimensions of Matrix B
  - `matrixA` - 2D array storing Matrix A values
  - `matrixB` - 2D array storing Matrix B values
  - `resultMatrix` - 2D array storing sum result
  
- **Key Functions:**
  - `handleMatrixASetup()` - Initialize Matrix A with zeros
  - `handleMatrixBSetup()` - Initialize Matrix B with zeros
  - `handleMatrixChange()` - Update individual matrix cell values
  - `calculateSum()` - Perform matrix addition with validation
  - `renderMatrix()` - Render editable matrix table

### 2. App.jsx
- **Purpose:** Main application component
- **Features:**
  - Imports MatrixSumCalculator component
  - Applies container styling
  - Renders the calculator interface

### 3. index.jsx
- **Purpose:** Application entry point
- **Features:**
  - Renders App component to DOM
  - Uses React 18 createRoot API

### 4. Styles.css
- **Purpose:** Application styling
- **Features:**
  - Gradient background (purple to indigo)
  - Centered container with shadow
  - Styled tables and inputs
  - Hover effects on buttons
  - Responsive design for mobile devices

## Key React Concepts Used

### 1. React Hooks
- **useState** - Managing multiple state variables for dimensions and matrices

### 2. State Management
- Array state for 2D matrices
- Controlled components for form inputs
- State updates with spread operator

### 3. Event Handling
- onChange events for input fields
- onClick events for buttons
- Form submission handling

### 4. Conditional Rendering
- Show matrices only after setup
- Show calculate button only when dimensions match
- Show result only after calculation

### 5. Dynamic Rendering
- `Array.from()` to create matrices
- `map()` to render matrix rows and cells
- Key props for list rendering

### 6. Component Props
- `renderMatrix()` receives matrix and setter function
- Reusable rendering logic

## How It Works

### Step-by-Step Process

1. **Set Matrix A Dimensions**
   - User enters rows and columns for Matrix A
   - Clicks "Set Matrix A" button
   - Empty matrix is created and displayed

2. **Fill Matrix A Values**
   - User enters numeric values in each cell
   - Values are stored in state

3. **Set Matrix B Dimensions**
   - User enters rows and columns for Matrix B
   - Clicks "Set Matrix B" button
   - Empty matrix is created and displayed

4. **Fill Matrix B Values**
   - User enters numeric values in each cell
   - Values are stored in state

5. **Calculate Sum**
   - If dimensions match, "Calculate Sum" button appears
   - Clicking button performs element-wise addition
   - Result matrix is displayed

6. **View Result**
   - Result matrix shows sum of corresponding elements
   - Result = A[i][j] + B[i][j] for all i, j

## Code Examples

### Creating a Matrix
```javascript
const emptyMatrix = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => 0)
);
```

### Updating Matrix Cell
```javascript
const handleMatrixChange = (matrixSetter, rowIndex, colIndex, value) => {
  matrixSetter((prevMatrix) => {
    const updatedMatrix = [...prevMatrix];
    updatedMatrix[rowIndex][colIndex] = parseInt(value) || 0;
    return updatedMatrix;
  });
};
```

### Matrix Addition
```javascript
const result = matrixA.map((row, i) =>
  row.map((val, j) => val + matrixB[i][j])
);
```

### Dimension Validation
```javascript
if (matrixA.length !== matrixB.length || 
    matrixA[0].length !== matrixB[0].length) {
  alert("Matrix A and Matrix B must have the same dimensions for addition.");
  return;
}
```

## Sample Output

### Initial State
```
Matrix Sum Calculator

Matrix A Dimensions
Rows: [2]  Columns: [2]  [Set Matrix A]

Matrix B Dimensions
Rows: [2]  Columns: [2]  [Set Matrix B]
```

### After Setting Matrices
```
Matrix A
┌───┬───┐
│ 1 │ 2 │
├───┼───┤
│ 3 │ 4 │
└───┴───┘

Matrix B
┌───┬───┐
│ 5 │ 6 │
├───┼───┤
│ 7 │ 8 │
└───┴───┘

[Calculate Sum]
```

### Result
```
Result Matrix
┌───┬───┐
│ 6 │ 8 │
├───┼───┤
│10 │12 │
└───┴───┘
```

## Mathematical Concept

### Matrix Addition
For two matrices A and B of the same dimensions m×n:
- Result matrix C = A + B
- C[i][j] = A[i][j] + B[i][j] for all i, j

**Conditions:**
- Both matrices must have the same number of rows
- Both matrices must have the same number of columns

**Example:**
```
A = [1  2]    B = [5  6]    C = [6  8]
    [3  4]        [7  8]        [10 12]
```

## Technologies Used
- **React 18.2** - UI library
- **React Hooks** - useState for state management
- **React Scripts 5.0** - Build tooling
- **CSS3** - Gradient styling and animations
- **HTML5** - Structure

## Styling Features
- **Gradient Background** - Purple to indigo linear gradient
- **White Container** - Clean centered card design
- **Box Shadow** - Elevated card effect
- **Button Hover Effects** - Transform and shadow on hover
- **Responsive Tables** - Centered with borders
- **Input Focus States** - Blue border on focus
- **Mobile Responsive** - Adapts to smaller screens

## Error Handling
- **Dimension Mismatch** - Alert if matrices don't have same dimensions
- **Invalid Input** - Defaults to 0 for non-numeric input
- **Empty Dimensions** - Prevents creating 0×0 matrices

## Troubleshooting

### Matrices Not Displaying
Ensure you click the "Set Matrix" buttons after entering dimensions.

### Calculate Button Not Appearing
Check that both matrices have the same dimensions (rows and columns).

### Styling Not Applied
Ensure `Styles.css` is imported in `App.jsx`.

## Future Enhancements
- Add matrix subtraction
- Add matrix multiplication
- Add matrix transpose
- Add matrix determinant calculation
- Add matrix inverse
- Save/Load matrix presets
- Export result as image
- Add matrix dimension presets (2×2, 3×3, 4×4)
- Add input validation for maximum dimensions
- Add result history
- Add dark mode theme
- Add animation for result display

## Learning Outcomes
1. **State Management** - Managing complex nested state (2D arrays)
2. **useState Hook** - Multiple state variables in one component
3. **Event Handling** - Input changes and button clicks
4. **Conditional Rendering** - Show/hide elements based on state
5. **Dynamic Rendering** - Creating elements based on data
6. **Array Methods** - map(), Array.from() for matrix operations
7. **Component Reusability** - Reusable renderMatrix function
8. **Props** - Passing functions as props
9. **Form Handling** - Controlled components
10. **Validation** - Input and operation validation

## Key Takeaways
- React state can handle complex data structures like 2D arrays
- Functional programming patterns (map, array methods) work well with React
- Validation is important before performing operations
- Controlled components give full control over form inputs
- Conditional rendering improves user experience
- CSS can greatly enhance the visual appeal of mathematical applications

## Conclusion
This Matrix Sum Calculator demonstrates how React's state management and component architecture can be used to build interactive mathematical applications. The use of hooks, dynamic rendering, and proper validation creates a robust and user-friendly tool for matrix operations.
