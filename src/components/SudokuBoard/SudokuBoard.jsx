import React, { useState } from 'react';
import './SudokuBoard.css';

const SudokuBoard = ({ sudokuBoard, handleInputChange, solved }) => {
  const [inputValues, setInputValues] = useState(sudokuBoard || []);

  const handleChange = (index, value) => {
    console.log(value, solved[index])
    if (value == solved[index]) {
      const updatedValues = [...inputValues];
      updatedValues[index] = value;
      setInputValues(updatedValues);
      handleInputChange(index, value, updatedValues);
    }
  };

  return (
    <div className="sudoku-board">
      {inputValues ? (
        <div className="sudoku-row">
          {inputValues.map((cell, index) => (
            <input
              className="sudoku-cell"
              key={index}
              type="text"
              min={1}
              max={9}
              value={cell ?? ''}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
      ) : (
        <div>Loading Sudoku board...</div>
      )}
    </div>
  );
};

export default SudokuBoard;
