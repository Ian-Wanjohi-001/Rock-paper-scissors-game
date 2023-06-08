import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Picks from "./Picks";
import Rules from "./Rules";
import Score from "./Score";
import Outcome from "./Outcome";

const Game = () => {
  const [pick, setPick] = useState(""); //useState hook to manage the user's pick (rock, paper, or scissors).
  const [score, setScore] = useState({
    player: 0,
    computer: 0,
  }); //useState hook to manage the game score, with initial values of 0 for both the player and the computer.
  const [computerPick, setComputerPick] = useState(""); //useState hook to store the computer's pick.

  const handlePick = (pick) => { //Updates the pick state variable when the user selects a pick.
    setPick(pick);
  };

  const playAgain = () => {  //Resets the pick state to an empty string and score state to the initial values 
    setPick("");
    setScore({
      player: 0,
      computer: 0,
    });
  };

  useEffect(() => {  //Triggers when the pick state changes.
    const randomPick = Math.floor(Math.random() * 3);  //Generates a random pick for the computer
    const pickOptions = ["rock", "paper", "scissors"];
    const newComputerPick = pickOptions[randomPick]; //Updates the computerPick state variable with the new computer pick.
    setComputerPick(newComputerPick);
  }, [pick]);

  useEffect(() => {  //Triggers when either the pick or the computerPick state changes.
    if (pick !== "") {
      const outcome = checkOutcome(pick, computerPick); //Checks the outcome of the game by calling the checkOutcome function with the player's pick and the computer's pick.
      setScore((prevScore) => {
        if (outcome === "Player Wins") {
          return { ...prevScore, player: prevScore.player + 1 };
        } else if (outcome === "Computer Wins") {
          return { ...prevScore, computer: prevScore.computer + 1 };
        } else {
          return { player: 0, computer: 0 }; // Reset scores to zero for both sides
        }
      });
    }
  }, [pick, computerPick]);

  const checkOutcome = (playerPick, computerPick) => {
    const results = {
      rock: {
        rock: "Tie",
        paper: "Computer Wins",
        scissors: "Player Wins",
      },
      paper: {
        rock: "Player Wins",
        paper: "Tie",
        scissors: "Computer Wins",
      },
      scissors: {
        rock: "Computer Wins",
        paper: "Player Wins",
        scissors: "Tie",
      },
    };

    if (playerPick === computerPick) {
      return "Tie";
    } else {
      return results[playerPick][computerPick];
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Score score={score}  />
        <Routes>
          <Route
            path="/"
            element={<Picks handlePick={handlePick} />}
          />
          <Route
            path="/outcome"
            element={
              <Outcome 
                playerPick={pick}
                computerPick={computerPick}
                playAgain={playAgain}
              />
            }
          />
        </Routes>
        <Rules />
      </BrowserRouter>
    </div>
  );
};

export default Game;
