import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SudokuCell = ({ value, handleChange, index }) => {
    const [content, setContent] = useState(value);
    const [changed, setChanged] = useState(false)
  
    const handleCellChange = (e) => {
      setChanged(true)
      const newInput = parseInt(e.target.value, 10);
      if (newInput !== NaN && newInput <= 10){
        setContent(newInput)
        handleChange(index, newInput)
      } else{
        setContent('')
        handleChange(index, null)
      }
    };
  
    return (
      <>
        <input
          className={`sudoku-cell ${changed ? 'changed' : 'not-changed'}`}
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