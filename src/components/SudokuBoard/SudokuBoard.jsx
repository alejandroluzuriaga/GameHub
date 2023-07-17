import { useState } from 'react';
import './SudokuBoard.css';
import SudokuCell from '../SudokuCell/SudokuCell';

// eslint-disable-next-line react/prop-types
const SudokuBoard = ({ sudokuBoard, handleInputChange, solved }) => {
  const [inputValues, setInputValues] = useState(sudokuBoard || []);

  const handleChange = (index, value) => {
    console.log(value, solved[index])
    if (value == solved[index]) {
      const updatedValues = [...inputValues];
      updatedValues[index] = value;
      setInputValues(updatedValues);
      handleInputChange(updatedValues);
    }
  };

  return (
    <div className="sudoku-board">
      {inputValues ? (
        <div className="sudoku-row">
          {inputValues.map((cell, index) => (
            <SudokuCell key={index} value={cell ?? ''} handleChange={handleChange} solved={solved} index={index} />
            // <input
            //   disabled={!solved}
            //   className="sudoku-cell"
            //   key={index}
            //   type="text"
            //   inputMode="numeric"
            //   min={1}
            //   max={9}
            //   value={cell ?? ''}
            //   onChange={(e) => handleChange(index, parseInt(e.target.value, 10))}
            // />
          ))}
        </div>
      ) : (
        <div>Loading Sudoku board...</div>
      )}
    </div>
  );
};

export default SudokuBoard;
