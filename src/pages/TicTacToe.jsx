import '../components/Pages CSS/tictactoe.css'
import TictactoeBoard from '../components/TictactoeBoard/TictactoeBoard';

const TicTacToe = () => {
  return (
    <div className="tictactoe-container">
      <div className="tictactoe">
        <TictactoeBoard/>
      </div>
    </div>
  );
};

export default TicTacToe