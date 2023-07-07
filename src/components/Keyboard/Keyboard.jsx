/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './keyboard.css'

const Keyboard = ({ letters, handleButtonClicked, start, visibleWord}) => {
  return (
    <div className='hangman-keyboard'>
      {letters.split('').map((letter, index) =>
        letter === 'A' || letter === 'Z' ? (
          <>
            <span className='line-break'></span>
            <button 
              onClick={handleButtonClicked} 
              key={index}
              disabled={!start  && visibleWord !== null}
              style={{ 
                cursor: !start ? 'auto' : 'pointer', 
                backgroundColor: !start ? 'transparent' : 'rgba(255, 255, 255, 0.859)'}}
            >
              {letter}
            </button>
          </>
        ) : (
          <button 
            onClick={handleButtonClicked} 
            key={letter}
            disabled={!start && visibleWord !== null}
            style={{ 
              cursor: !start ? 'auto' : 'pointer', 
              backgroundColor: !start ? 'transparent' : 'rgba(255, 255, 255, 0.859)'}}
          >
            {letter}
          </button>
        )
      )}
    </div>
  );
};

Keyboard.propTypes = {
    letters: PropTypes.string.isRequired,
  };

export default Keyboard