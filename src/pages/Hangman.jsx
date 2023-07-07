/* eslint-disable react/prop-types */
import words from '../data/words'
import Keyboard from '../components/Keyboard/Keyboard';
import HangmanSpaces from '../components/HangmanSpaces/HangmanSpaces';
import '../components/Pages CSS/hangman.css'
import HangmanUsedLetters from '../components/HangmanUsedLetters/HangmanUsedLetters';
import { useState, useEffect } from 'react';
import '../components/Pages CSS/tictactoe.css'
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

  const handleWin = () =>{
    setWin(!win)
    setResult('won')
  }

  const handleButtonClicked = (event) =>{
    const buttonClicked = event.target.textContent
    const letter = buttonClicked.toLowerCase()
    const word = randomWord.split('')

    if (!usedLetters.includes(letter)  && tries > 0){
      setUsedLetters([...usedLetters, letter])
      setTries(tries - 1)
    }
    if (word.includes(letter) && tries > 0){
      setTries(tries - 1)
    }
  }

  const checkGameOver = () =>{
    if (tries == 0 || win){
      setGameOver(!gameOver)
      setVisibleWord(randomWord)
    }
  }
  const handleStart = () =>{
    setStart(!start)
    setTries(10)
  }

  const resetGame = () =>{
      setStart(false)
      setTries(10)
      setStart(false)
      setUsedLetters([])
      setGameOver(true);
      setGameOver(false)
      setVisibleWord(null)
      setRandomWord(words[Math.floor(Math.random() * 15)])
      setWin(!win)
  }
//El problema que hay es que si se introduce la palabra en un orden diferente, no la reconoce. Hay q mirar hangmanSpaces y corregirlo
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
        <p>{`${tries} tries left ${randomWord}`}</p>
        : null
      }
      {
        !start && !visibleWord ?
        <p>Press Start to play</p>
        :
        null
      }
      {
        visibleWord ? 
          <div className='result-message'>
            <p>You {result}</p>
            <p>WORD: {randomWord}</p>
          </div> 
      : null
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