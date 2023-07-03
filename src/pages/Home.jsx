import GameCard from "../components/GameCard/GameCard";
import { games } from "../games/games"
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const Home = ({ name }) => {

  return (
    <div className="home">
      <div className="home-left-side ">
        <div className="home-left-side-elements">
          <h1>Hello</h1>
          <p>{name}</p>
        </div>
        <h2>Ready to dive into the gaming fun?</h2>
      </div>
      <div className="home-right-side side">
        <ul className="game-cards-container">
          {games.map((game) => (
            <li className="card-container" key={game.name}>
              <NavLink 
                to={'/' + game.link}
              >
                <GameCard></GameCard>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home