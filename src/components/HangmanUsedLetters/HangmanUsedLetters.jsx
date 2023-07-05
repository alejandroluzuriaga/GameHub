/* eslint-disable react/prop-types */
const HangmanUsedLetters = ({ usedLetters }) => {
    return (
      <div className="usedletters-container">
        {usedLetters.map((letter, index) => (
          <p 
            key={index} 
            className="used-letters"
            style={{
              textDecoration: 'line-through'
            }}
            >
              {letter}
          </p>
        ))}
      </div>
    );
  };

export default HangmanUsedLetters