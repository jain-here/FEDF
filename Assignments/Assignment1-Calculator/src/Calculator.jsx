import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumberClick = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  const handleDecimalClick = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const handleOperationClick = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = performOperation(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const performOperation = (firstValue, secondValue, operation) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "*":
        return firstValue * secondValue;
      case "/":
        return firstValue / secondValue;
      case "%":
        return firstValue % secondValue;
      default:
        return secondValue;
    }
  };

  const handleEqualsClick = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = performOperation(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const handleClearEntryClick = () => {
    setDisplay("0");
    setWaitingForOperand(false);
  };

  const handleBackspaceClick = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const handleSignChange = () => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="display-value">{display}</div>
      </div>

      <div className="calculator-keypad">
        <div className="calculator-row">
          <button className="btn btn-function" onClick={handleClearClick}>
            C
          </button>
          <button className="btn btn-function" onClick={handleClearEntryClick}>
            CE
          </button>
          <button className="btn btn-function" onClick={handleBackspaceClick}>
            ←
          </button>
          <button
            className="btn btn-operator"
            onClick={() => handleOperationClick("/")}
          >
            ÷
          </button>
        </div>

        <div className="calculator-row">
          <button className="btn" onClick={() => handleNumberClick(7)}>
            7
          </button>
          <button className="btn" onClick={() => handleNumberClick(8)}>
            8
          </button>
          <button className="btn" onClick={() => handleNumberClick(9)}>
            9
          </button>
          <button
            className="btn btn-operator"
            onClick={() => handleOperationClick("*")}
          >
            ×
          </button>
        </div>

        <div className="calculator-row">
          <button className="btn" onClick={() => handleNumberClick(4)}>
            4
          </button>
          <button className="btn" onClick={() => handleNumberClick(5)}>
            5
          </button>
          <button className="btn" onClick={() => handleNumberClick(6)}>
            6
          </button>
          <button
            className="btn btn-operator"
            onClick={() => handleOperationClick("-")}
          >
            -
          </button>
        </div>

        <div className="calculator-row">
          <button className="btn" onClick={() => handleNumberClick(1)}>
            1
          </button>
          <button className="btn" onClick={() => handleNumberClick(2)}>
            2
          </button>
          <button className="btn" onClick={() => handleNumberClick(3)}>
            3
          </button>
          <button
            className="btn btn-operator"
            onClick={() => handleOperationClick("+")}
          >
            +
          </button>
        </div>

        <div className="calculator-row">
          <button className="btn" onClick={handleSignChange}>
            +/-
          </button>
          <button className="btn" onClick={() => handleNumberClick(0)}>
            0
          </button>
          <button className="btn" onClick={handleDecimalClick}>
            .
          </button>
          <button className="btn btn-equals" onClick={handleEqualsClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
