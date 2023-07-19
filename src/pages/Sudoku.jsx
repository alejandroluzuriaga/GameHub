import { useState, useEffect } from "react";
import '../PagesCSS/Sudoku/sudoku.css';
import SudokuBoard from "../components/SudokuBoard/SudokuBoard";
import sudoku from "sudoku";

const Sudoku = () => {
  const [start, setStart] = useState(false);
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [actualBoard, setActualBoard] = useState(null)
  const [solvedSudoku, setSolvedSudoku] = useState(null)
  const [isSolved, setIsSolved] = useState(false)
  const [checkError, setCheckError] = useState(false)

  const isSudokuSolved = (sudokuActual, solvedSudoku) => {
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
  };

  const handleSolve = () =>{
    setIsSolved(true)
  }

  const handleCheck = () =>{
    if (!isSudokuSolved(actualBoard, solvedSudoku)) {
      setCheckError(true)
    } else{
      setIsSolved(true)
    }
  }

  useEffect(() => {
    if (checkError) {
      const timer = setTimeout(() => {
        setCheckError(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [checkError]);

  return (
    <div className="sudoku">
      <div className="title-and-button">
        <h2 className="title-sudoku">Sudoku</h2>
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
      {checkError ? (
        <p className="check-error-message">Wrong solution. Check your sudoku and try again!</p>
      ) : (
        null
      )

      }
      {start ? (
        <div className="solve-check-buttons">
          <button className="start-button" onClick={handleSolve} style={{color: "yellow"}}>
            Solve
          </button>
          <button className="start-button" onClick={handleCheck} style={{color: "yellow"}} disabled={isSolved}>
            Check
          </button>
        </div>
      ) : (
        null
      )}
      {isSolved ? 
      <div className="win-message">
        <h3>Sudoku solved</h3>
      </div> : null
      }
      {start ? (
        <SudokuBoard sudokuBoard={sudokuBoard} handleInputChange={handleInputChange} solved={solvedSudoku} isSolved={isSolved}/>
      ) : (
        // eslint-disable-next-line react/no-unescaped-entities
        <div>Press 'Start' to play</div>
      )}
    </div>
  );
};

export default Sudoku;
