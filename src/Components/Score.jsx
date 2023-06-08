import logo from '../assets/logo.svg'
import PropTypes from "prop-types";

const Score = ({ score }) => {
    return (
      <>
      <div className="top">
        <img src={logo} alt="" />
        <div className="top-right">
        <h2>Score</h2>
        <div className="top-score">
          <ul>
            <li>Player: {score.player}</li>
            <li>Computer: {score.computer}</li>
          </ul>
        </div>
        </div>
    
      </div>

  
</>
    );
  };
  // Score component ends
  
  Score.propTypes = {
    score: PropTypes.shape({
      player: PropTypes.number.isRequired,
      computer: PropTypes.number.isRequired,
    }).isRequired,
  };

  export default Score;
  