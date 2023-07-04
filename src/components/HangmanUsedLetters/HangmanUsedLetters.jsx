/* eslint-disable react/prop-types */
const HangmanUsedLetters = ({ usedLetters }) => {
    return (
      <div>
        {usedLetters?.split('').map((letter, index) => (
          <p key={index} className="used-letters">{letter}</p>
        ))}
      </div>
    );
  };

export default HangmanUsedLetters