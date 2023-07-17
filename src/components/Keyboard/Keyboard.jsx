/* eslint-disable react/prop-types */
import React from 'react';
import './keyboard.css'

const Keyboard = ({ letters, handleButtonClicked, start, visibleWord }) => {
  return (
    <div className="hangman-keyboard">
      {letters.split('').map((letter, index) => (
        <React.Fragment key={`${letter}-${index}`}>
          {letter === 'A' || letter === 'Z' ? (
            <React.Fragment>
              <span className='line-break'></span>
              <button
                onClick={handleButtonClicked}
                disabled={!start && visibleWord !== null}
                style={{
                  cursor: !start ? 'auto' : 'pointer',
                  backgroundColor: !start ? 'transparent' : 'rgba(255, 255, 255, 0.859)',
                }}
              >
                {letter}
              </button>
            </React.Fragment>
          ) : (
            <button
              onClick={handleButtonClicked}
              disabled={!start && visibleWord == null}
              style={{
                cursor: !start ? 'auto' : 'pointer',
                backgroundColor: !start ? 'transparent' : 'rgba(255, 255, 255, 0.859)',
              }}
              key={`${letter}-${index}`}
            >
              {letter}
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Keyboard

