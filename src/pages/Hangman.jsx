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

  useEffect(()=>{
    checkGameOver()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tries])

  const handleButtonClicked = (event) =>{
    const buttonClicked = event.target.textContent
    const letter = buttonClicked.toLowerCase()
    const word = randomWord.split('')

    if (!usedLetters.includes(letter)){
      setUsedLetters([...usedLetters, letter])
      setTries(tries - 1)
    }
    if (word.includes(letter)){

      setTries(tries - 1)
    }
    //ESTOY TRABAJANDO EN HACER APARECER LA LETRA DE LA PALABRA QUE COINCIDA CON LA PRESIONADA
  }

  const checkGameOver = () =>{
    if (tries == 0){
      setGameOver(!gameOver)
      setResult('lost')
      setVisibleWord(randomWord)
    }
  }
  const handleStart = () =>{
    setStart(!start)
    setTries(10)
  }

  const resetGame = () =>{
      setUsedLetters([])
      setGameOver(true);
      setStart(false)
      setGameOver(false)
      setVisibleWord(null)
      setRandomWord(words[Math.floor(Math.random() * 15)]);
  }

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
        visibleWord ? 
          <div className='result-message'>
            <p>You {result}</p>
            <p>WORD: {randomWord}</p>
          </div> 
      : null
      }
        <HangmanSpaces word={randomWord}/>
        <HangmanUsedLetters usedLetters={usedLetters}/>
        <Keyboard letters={letters} handleButtonClicked={handleButtonClicked} start={start}/>
    </div>
  );
};

export default Hangman;