import { useState } from "react";
import '../PagesCSS/Sudoku/sudoku.css';
import SudokuBoard from "../components/SudokuBoard/SudokuBoard";
import sudoku from "sudoku";

const Sudoku = () => {
  const [start, setStart] = useState(false);
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [actualBoard, setActualBoard] = useState(null)
  const [solvedSudoku, setSolvedSudoku] = useState(null)
  const [isSolved, setIsSolved] = useState(false)

  const isSudokuSolved = (sudokuActual, solvedSudoku) => {
    console.log(sudokuActual, solvedSudoku)
    return sudokuActual.every((value, index) => value == solvedSudoku[index])
  }

  const handleStart = () => {
    setStart(!start);
    const newBoard = sudoku.makepuzzle()
    const solvedBoard = sudoku.solvepuzzle(newBoard)
    setSudokuBoard(newBoard)
    setActualBoard(newBoard)
    setSolvedSudoku(solvedBoard)
  };

  const resetGame = () => {
    setStart(!start);
    setIsSolved(false)
    setSudokuBoard(null)
  };

  const handleInputChange = (updatedValues) => {
    setActualBoard(updatedValues);
    if (isSudokuSolved(updatedValues, solvedSudoku)) {
      console.log('is solved')
      setIsSolved(true);
    }
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
      {isSolved ? 
      <div className="win-message">
        <h3>Well done! You solved it</h3>
      </div> : null
      }
      {start ? (
        <SudokuBoard sudokuBoard={sudokuBoard} handleInputChange={handleInputChange} solved={solvedSudoku} />
      ) : (
        // eslint-disable-next-line react/no-unescaped-entities
        <div>Press 'Start' to play</div>
      )}
    </div>
  );
};

export default Sudoku;
