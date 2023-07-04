/* eslint-disable react/prop-types */
import words from '../data/words'
import Keyboard from '../components/Keyboard/Keyboard';
import HangmanSpaces from '../components/HangmanSpaces/HangmanSpaces';
import '../components/Pages CSS/hangman.css'
import HangmanUsedLetters from '../components/HangmanUsedLetters/HangmanUsedLetters';

const Hangman = ({triesLeft, usedLetters}) => {
  const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  const randomNumber = Math.floor(Math.random() * (15))
  const randomWord = words[randomNumber]

  return (
    <div className="hangman">
      <div className='hangman-tries'>{`${triesLeft} tries left`}</div>
      <div className='hangman-result-message'>
        <p>You lost!</p>
        <p>WORD: LALAL</p>
      </div>
        <HangmanSpaces word={randomWord}/>
        <HangmanUsedLetters usedLetters={usedLetters}/>
        <Keyboard letters={letters}/>
    </div>
  );
};

export default Hangman;