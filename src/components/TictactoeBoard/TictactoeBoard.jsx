import { useState, useEffect } from "react";
import '../../PagesCSS/Tictactoe/tictactoe.css'
const TictactoeBoard = () => {
    const [board, setBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
        ]);
    const [start, setStart] = useState(false)
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);

    const handleStart = () =>{
        setStart(!start)
    }

    const checkGameOver = () => {
        // FILAS
        for (let i = 0; i < 3; i++) {
          if (
            board[i][0] !== null &&
            board[i][0] === board[i][1] &&
            board[i][0] === board[i][2]
          ) {
            setGameOver(true);
            setWinner(board[i][0]);
            return;
          }
        }
    
        // COLUMNAS
        for (let i = 0; i < 3; i++) {
          if (
            board[0][i] !== null &&
            board[0][i] === board[1][i] &&
            board[0][i] === board[2][i]
          ) {
            setGameOver(true);
            setWinner(board[0][i]);
            return;
          }
        }
    
        // DIAGONALES
        if (
          board[0][0] !== null &&
          board[0][0] === board[1][1] &&
          board[0][0] === board[2][2]
        ) {
          setGameOver(true);
          setWinner(board[0][0]);
          return;
        }
    
        if (
          board[0][2] !== null &&
          board[0][2] === board[1][1] &&
          board[0][2] === board[2][0]
        ) {
          setGameOver(true);
          setWinner(board[0][2]);
          return;
        }
    
        // EMPATE
        if (!board.flat().includes(null)) {
          setGameOver(true);
          setWinner('Tie');
        }
      };

    useEffect(() => {
        checkGameOver();
      });
    
      const handleCellClick = (row, col) => {
        if (board[row][col] === null && !gameOver) {
          const newBoard = [...board];
          newBoard[row][col] = currentPlayer;
          setBoard(newBoard);
          setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
      };

    
      const resetGame = () => {
        setBoard([
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ]);
        setCurrentPlayer('X');
        setGameOver(false);
        setWinner(null);
        setStart(false)
      };

  return (
    <div className="tictactoe-board">
        <div className="title-and-button">
            <h2 className="title">TicTacToe</h2>
            {!gameOver && winner==null && !start ? 
            <button 
                className="start-button"
                onClick={handleStart}> Start </button> 
            : 
            <button 
            className="reset-button"
            onClick={resetGame}> Reset </button>
            }
        </div>
        {gameOver && (
        <div className="tictactoe-result-message">
            {winner === 'Tie' ? (
            <p>Tie!</p>
            ) : (
            <p>The winner is {winner}!</p>
            )}
        </div>
        )}
        {!start && !winner && <p>Press Start to play</p>}
        {start && !winner && <p>Is {currentPlayer} turn</p>}
        <div className="board">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className={`row row${rowIndex}`}>
                {row.map((cell, colIndex) => (
                    <button
                    style={{
                        color: cell === 'O' ? 'yellow' : cell === 'X' ? 'rgb(67, 255, 4)' : 'inherit'
                    }}
                    key={colIndex}
                    className= {!start ? "cell" : "cell active"}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    disabled={cell !== null || gameOver || !start}
                    >
                    {cell}
                    </button>
                ))}
                </div>
            ))}
        </div>
    </div>
  );
};

export default TictactoeBoard