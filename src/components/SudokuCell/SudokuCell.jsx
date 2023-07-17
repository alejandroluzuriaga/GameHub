import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SudokuCell = ({ value, handleChange, solved, index }) => {
    const [incorrect, setIncorrect] = useState(false);
  
    const handleCellChange = (e) => {
      const newInput = parseInt(e.target.value, 10);
      console.log(newInput, solved[index]);
      if (newInput == solved[index]) {
        handleChange(index, newInput);
      } else {
        setIncorrect(true);
  
        setTimeout(() => {
          setIncorrect(false);
        }, 300);
      }
    };
  
    return (
      <>
        <input
          disabled={!solved}
          className={`sudoku-cell ${incorrect ? 'incorrect show' : ''}`}
          type="text"
          inputMode="numeric"
          min={1}
          max={9}
          value={value}
          onChange={(e) => handleCellChange(e)}
        />
      </>
    );
  };

  export default SudokuCell
  