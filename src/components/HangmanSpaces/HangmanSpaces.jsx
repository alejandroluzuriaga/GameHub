/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const HangmanSpaces = ({ word, usedLetters, handleWin }) => {
  const wordArray = word.split('');
  const [spacesArray, setSpacesArray] = useState(Array(wordArray.length).fill('_'));
  const [isWordComplete, setIsWordComplete] = useState(false);

  useEffect(() => {
    const updatedSpacesArray = wordArray.map((letter) => {
      if (usedLetters.includes(letter)) {
        return letter;
      } else {
        return '_';
      }
    });
  
    setSpacesArray(updatedSpacesArray);
  
    if (!isWordComplete && wordArray.every((letter, index) => letter === updatedSpacesArray[index])) {
      setIsWordComplete(true);
      handleWin();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usedLetters, word, handleWin, isWordComplete]);

  return (
    <div className='hangman-spaces'>
      {spacesArray.map((character, index) => (
        <div className="hangman-letters" key={index}>
          <p className='hangman-letters' type='text' maxLength="1">
            {character}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HangmanSpaces;