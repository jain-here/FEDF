# Assignment 3: Matrix Sum Calculator

**Author:** Atharva Jain - 2420030092

A React.js application for calculating the sum of two matrices using props and state management.

## Features

- ✅ Dynamic matrix dimension setting
- ✅ Matrix A and Matrix B input
- ✅ Real-time value updates
- ✅ Matrix addition calculation
- ✅ Result display with animation
- ✅ Dimension validation
- ✅ Responsive design
- ✅ Props and state demonstration

## Installation

```bash
cd Assignment3-Matrix
npm install
```

## Running the Application

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

## Technologies Used

- React 19.2.0
- Vite 7.2.1
- CSS3 with animations

## How to Use

1. **Set Matrix A Dimensions**
   - Enter rows and columns
   - Click "Set Matrix A"

2. **Input Matrix A Values**
   - Enter numbers in each cell

3. **Set Matrix B Dimensions**
   - Enter rows and columns (must match Matrix A)
   - Click "Set Matrix B"

4. **Input Matrix B Values**
   - Enter numbers in each cell

5. **Calculate Sum**
   - Click "Calculate Sum" button
   - View the result matrix

## React Concepts Demonstrated

### State Management
- Multiple state variables using `useState`
- State updates with setter functions
- Array state management

### Props
- Function props for matrix updates
- Callback functions for handling changes

### Array Methods
- `Array.from()` for matrix initialization
- `map()` for matrix operations
- Nested arrays for 2D matrices

## Validation

- Validates that both matrices have same dimensions
- Alert message if dimensions don't match
- Prevents calculation until validation passes

## Author

Created for FEDF Assignment 3 - November 2025
