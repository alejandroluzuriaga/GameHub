/* eslint-disable react/prop-types */
const HangmanSpaces = ({word}) => {
  return (
    <div className='hangman-spaces'> 
        {
          word.split('').map((character, index)=>(
            <div className="hangman-letters" key={index}>
              <p className='hangman-letters' type='text' maxLength="1">
                  _
              </p>
            </div>
          ))
        }
      </div>
  )
}

export default HangmanSpaces