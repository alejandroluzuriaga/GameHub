import React from 'react';
import './SudokuBoard.css';

const SudokuBoard = ({ sudokuBoard, handleButtonChange }) => {
  return (
    <div className="sudoku-board">
  {sudokuBoard ? (
    <div className="sudoku-row">
      {sudokuBoard.map((cell, index) => (
        <input className='sudoku-cell'
          key={index}
          type="text"
          value={cell ?? ''}
          onChange={(e) => handleButtonChange(Math.floor(index / 9), index % 9, e.target.value)}
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
