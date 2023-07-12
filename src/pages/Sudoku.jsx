import {React, useState, useEffect} from "react"
import '../PagesCSS/Sudoku/sudoku.css'
import SudokuBoard from "../components/SudokuBoard/SudokuBoard"
import sudoku from "sudoku"

const Sudoku = () => {
  const [start, setStart] = useState(false);
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const newBoard = sudoku.makepuzzle();
      setSudokuBoard(newBoard);
      setLoading(false);
    } catch (error) {
      console.error('Error generating Sudoku board:', error);
      setLoading(false);
    }
  }, []);

  const handleStart = () => {
    setStart(!start);
  };

  const resetGame = () => {
    setStart(!start);
  };

  const handleButtonChange = (rowIndex, colIndex, value) => {
    console.log(rowIndex, colIndex, value);
  };

  return (
    <div className="sudoku">
      <div className="title-and-button">
        <h2 className="title">Sudoku</h2>
        {!start ? (
          <button className="start-button" onClick={handleStart}>
            Start
          </button>
        ) : (
          <button className="reset-button" onClick={resetGame}>
            Reset
          </button>
        )}
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <SudokuBoard sudokuBoard={sudokuBoard} handleButtonChange={handleButtonChange} />
      )}
    </div>
  );
};

export default Sudoku;
