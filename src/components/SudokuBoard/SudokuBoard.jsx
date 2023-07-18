import { useState } from 'react';
import './SudokuBoard.css';
import SudokuCell from '../SudokuCell/SudokuCell';

// eslint-disable-next-line react/prop-types
const SudokuBoard = ({ sudokuBoard, handleInputChange, solved, isSolved }) => {
  const [inputValues, setInputValues] = useState(sudokuBoard || []);

  const handleChange = (index, value) => {
    // console.log(value, solved[index])
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
    handleInputChange(updatedValues);
  };

  return (
    <div className="sudoku-board">
      {inputValues ? (
        <div className="sudoku-row">
          {!isSolved 
          ? inputValues.map((cell, index) => (
            <SudokuCell key={index} value={cell ?? ''} handleChange={handleChange} index={index} />
          ))
          : solved.map((cell, index) => (
            <SudokuCell key={index} value={cell ?? ''} handleChange={handleChange} index={index} />
          ))}
        </div>
      ) : (
        <div>Loading Sudoku board...</div>
      )}
    </div>
  );
};

export default SudokuBoard;
