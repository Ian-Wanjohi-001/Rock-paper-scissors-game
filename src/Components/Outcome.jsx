import PropTypes from "prop-types";
import rockIcon from '../assets/icon-rock.svg';
import paperIcon from '../assets/icon-paper.svg';
import scissorsIcon from '../assets/icon-scissors.svg';
import { Link } from "react-router-dom";
import '../App.css'

const Outcome = ({ playerPick, computerPick, playAgain }) => {
  const icons = { //Maps each pick (rock, paper, scissors) to an icon
    rock: rockIcon,
    paper: paperIcon,
    scissors: scissorsIcon,
  };

  const getOutcomeText = () => { //Determines the outcome text based on the player's pick and the computer's pick.
    if (playerPick === computerPick) {
      return "It's a Tie🤞!";
    } else if (
      (playerPick === "rock" && computerPick === "scissors") ||
      (playerPick === "paper" && computerPick === "rock") ||
      (playerPick === "scissors" && computerPick === "paper")
    ) {
      return "You Win🎉!";
    } else {
      return "You Lose 🙃!";
    }
  };

  return (
    <>
    <div className="outcome-container">
        <div className="player-icon">
          <label className="picked-label">YOU PICKED</label>
          <button className="picked-icon-player">
             <img src={icons[playerPick]} alt="" />
          </button>
        </div>
        <div className="outcome-label">
        <label className="outcome-text">{getOutcomeText()}</label>
        <Link to="/">
        <button onClick={playAgain}>PLAY AGAIN</button>
        </Link>
        </div>
        
        <div className="computer-icon">
        <label className="picked-label">THE COMPUTER PICKED</label>
        <button className="picked-icon-computer">
           <img src={icons[computerPick]} alt="" />
        </button>
        
      </div>
    </div>
    </>
  );
};

Outcome.propTypes = {
  playerPick: PropTypes.string.isRequired,
  computerPick: PropTypes.string.isRequired,
  playAgain: PropTypes.func.isRequired,
};

export default Outcome;