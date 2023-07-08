/* eslint-disable react/prop-types */
import words from '../data/words'
import Keyboard from '../components/Keyboard/Keyboard';
import HangmanSpaces from '../components/HangmanSpaces/HangmanSpaces';
import '../PagesCSS/Tictactoe/tictactoe.css'
import '../PagesCSS/Hangman/hangman.css'
import HangmanUsedLetters from '../components/HangmanUsedLetters/HangmanUsedLetters';
import { useState, useEffect } from 'react';

const Hangman = () => {

  const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'

  const [randomWord, setRandomWord] = useState(words[Math.floor(Math.random() * (15))])
  const [start, setStart] = useState(false)
  const [tries, setTries] = useState(10)
  const [usedLetters, setUsedLetters] = useState([])
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState(null)
  const [visibleWord, setVisibleWord] = useState(null)
  const [win, setWin] = useState(false)

  useEffect(()=>{
    checkGameOver()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tries])

  const handleButtonClicked = (event) => {
    if (gameOver || win) {
      return;
    }
  
    const buttonClicked = event.target.textContent;
    const letter = buttonClicked.toLowerCase();
    const word = randomWord.split('');
  
    if (!usedLetters.includes(letter) && tries > 0) {
      setUsedLetters([...usedLetters, letter]);
      setTries(tries - 1);
    }
  };

  const checkGameOver = () => {
    if (tries === 0 || win) {
      setGameOver(true);
      setResult(win ? 'won' : 'lost');
      setVisibleWord(randomWord);
    }
  };

  const handleStart = () =>{
    setResult(null)
    setStart(!start)
    setTries(10)
    setTries(10)
  }

  const handleWin = () => {
    setWin(true)
    setResult('won')
    setVisibleWord(randomWord)
  };

  const resetGame = () => {
    setResult(null);
    setStart(false);
    setWin(false);
    setUsedLetters([]);
    setGameOver(false);
    setVisibleWord(null);
    setRandomWord(words[Math.floor(Math.random() * 15)]);
  };

  return (
    <div className="hangman">
      <div className="title-and-button">
        <h2 className="title">Hangman</h2>
        {!start ? 
          <button 
              className="start-button"
              onClick={handleStart}> Start </button> 
          : 
          <button 
            className="reset-button"
            onClick={resetGame}> Reset </button>
        }
      </div>
      { start ?
        <p>{`${tries} tries left`}</p>
        : null
      }
      {
        !start && !visibleWord ?
        <p>Press Start to play</p>
        :
        null
      }
      {
        visibleWord && (result == 'won' || result == 'lost')  ? (
          <div className='result-message'>
            <p>You {result}!</p>
            <p>WORD: {randomWord}</p>
          </div>
        ) : null
      }
      {
        !visibleWord ? 
        <HangmanSpaces word={randomWord} usedLetters={usedLetters} handleWin={handleWin}/>
        :
        null
      }
        <HangmanUsedLetters usedLetters={usedLetters}/>
        <Keyboard letters={letters} handleButtonClicked={handleButtonClicked} start={start} visibleWord={visibleWord}/>
    </div>
  );
};

export default Hangman;