import PropTypes from 'prop-types';
import './keyboard.css'

const Keyboard = ({letters}) => {
  return (
    <div className='hangman-keyboard'>
    {letters.split('').map((letter) => (
        letter == 'A' || letter == 'Z' ? (
        <>
            <span className='line-break'></span>
            <button key={letter}>{letter}</button>
        </>
        ) : (
        <button key={letter}>{letter}</button>
        )
    ))}
</div>
  )
}

Keyboard.propTypes = {
    letters: PropTypes.string.isRequired,
  };

export default Keyboard