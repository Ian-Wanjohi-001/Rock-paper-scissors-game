import PropTypes from "prop-types";
import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'
import { Link } from "react-router-dom";

const Picks = ({ handlePick }) => {
  return (
    <div>
      <h2>Select to play</h2>
      <div className="button">
        <Link to="/outcome">
          <button className="round-btn1" onClick={() => handlePick("rock")}>
            <img src={rock} alt="" />
          </button>
        </Link>
        <Link to="/outcome">
          <button className="round-btn2" onClick={() => handlePick("paper")}>
            <img src={paper} alt="" />
          </button>
        </Link>
        <Link to="/outcome">
          <button className="round-btn3" onClick={() => handlePick("scissors")}>
            <img src={scissors} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

Picks.propTypes = {
  handlePick: PropTypes.func.isRequired,
};

export default Picks;
