import React from "react";
import MatrixSumCalculator from "./components/MatrixSumCalculator";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Matrix Sum Calculator</h1>
      <p className="subtitle">Calculate the sum of two matrices using React props and state</p>
      <MatrixSumCalculator />
    </div>
  );
};

export default App;
