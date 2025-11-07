import React, { useState } from 'react';
import './MatrixSumCalculator.css';

const MatrixSumCalculator = () => {
  const [rowsA, setRowsA] = useState(2);
  const [colsA, setColsA] = useState(2);
  const [rowsB, setRowsB] = useState(2);
  const [colsB, setColsB] = useState(2);
  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [resultMatrix, setResultMatrix] = useState([]);

  // Initialize Matrix A
  const handleMatrixASetup = () => {
    const emptyMatrix = Array.from({ length: rowsA }, () =>
      Array.from({ length: colsA }, () => 0)
    );
    setMatrixA(emptyMatrix);
    setResultMatrix([]); // Clear previous results
  };

  // Initialize Matrix B
  const handleMatrixBSetup = () => {
    const emptyMatrix = Array.from({ length: rowsB }, () =>
      Array.from({ length: colsB }, () => 0)
    );
    setMatrixB(emptyMatrix);
    setResultMatrix([]); // Clear previous results
  };

  // Handle Input Changes for Both Matrices
  const handleMatrixChange = (matrixSetter, rowIndex, colIndex, value) => {
    matrixSetter((prevMatrix) => {
      const updatedMatrix = [...prevMatrix];
      updatedMatrix[rowIndex][colIndex] = parseInt(value) || 0;
      return updatedMatrix;
    });
  };

  // Calculate Sum of Matrices
  const calculateSum = () => {
    if (
      matrixA.length !== matrixB.length ||
      matrixA[0].length !== matrixB[0].length
    ) {
      alert("Matrix A and Matrix B must have the same dimensions for addition.");
      return;
    }

    const result = matrixA.map((row, i) =>
      row.map((val, j) => val + matrixB[i][j])
    );
    setResultMatrix(result);
  };

  // Render a Matrix with Editable Inputs
  const renderMatrix = (matrix, setMatrix, title) => (
    <div className="matrix-section">
      <h3>{title}</h3>
      <table className="matrix-table">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="number"
                    value={col}
                    onChange={(e) =>
                      handleMatrixChange(setMatrix, rowIndex, colIndex, e.target.value)
                    }
                    className="matrix-input"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Render Result Matrix (Read-only)
  const renderResultMatrix = (matrix) => (
    <div className="result-section">
      <h3>Result Matrix (A + B)</h3>
      <table className="matrix-table result-table">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={colIndex}>
                  <div className="result-cell">{col}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="matrix-calculator-container">
      {/* Matrix A Setup */}
      <div className="matrix-setup-card">
        <h3>Matrix A Dimensions</h3>
        <div className="dimension-controls">
          <label>
            Rows:
            <input
              type="number"
              min="1"
              max="10"
              value={rowsA}
              onChange={(e) => setRowsA(parseInt(e.target.value) || 1)}
              className="dimension-input"
            />
          </label>
          <label>
            Columns:
            <input
              type="number"
              min="1"
              max="10"
              value={colsA}
              onChange={(e) => setColsA(parseInt(e.target.value) || 1)}
              className="dimension-input"
            />
          </label>
          <button onClick={handleMatrixASetup} className="btn btn-setup">
            Set Matrix A
          </button>
        </div>
      </div>

      {matrixA.length > 0 && renderMatrix(matrixA, setMatrixA, "Matrix A")}

      {/* Matrix B Setup */}
      <div className="matrix-setup-card">
        <h3>Matrix B Dimensions</h3>
        <div className="dimension-controls">
          <label>
            Rows:
            <input
              type="number"
              min="1"
              max="10"
              value={rowsB}
              onChange={(e) => setRowsB(parseInt(e.target.value) || 1)}
              className="dimension-input"
            />
          </label>
          <label>
            Columns:
            <input
              type="number"
              min="1"
              max="10"
              value={colsB}
              onChange={(e) => setColsB(parseInt(e.target.value) || 1)}
              className="dimension-input"
            />
          </label>
          <button onClick={handleMatrixBSetup} className="btn btn-setup">
            Set Matrix B
          </button>
        </div>
      </div>

      {matrixB.length > 0 && renderMatrix(matrixB, setMatrixB, "Matrix B")}

      {/* Calculate Button */}
      {matrixA.length > 0 &&
        matrixB.length > 0 &&
        matrixA.length === matrixB.length &&
        matrixA[0].length === matrixB[0].length && (
          <div className="calculate-section">
            <button onClick={calculateSum} className="btn btn-calculate">
              Calculate Sum
            </button>
          </div>
        )}

      {/* Result */}
      {resultMatrix.length > 0 && renderResultMatrix(resultMatrix)}
    </div>
  );
};

export default MatrixSumCalculator;
