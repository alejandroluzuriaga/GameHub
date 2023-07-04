import PropTypes from 'prop-types';

const GameCard = ({name, image}) => {
  return (
    <div className="card">
      <p className="card-name">{name}</p>
      <img src={image} alt={name + ' image'} className="card-image" />
    </div>
  );
};

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GameCard;