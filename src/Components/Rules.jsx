import { useState } from "react";
import rulesImage from "../assets/image-rules.svg";
import "../App.css";

// Rules component: Displays the game rules image
const Rules = () => {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div >
      
      {showImage && (
          <div className="rules-image">
            <img src={rulesImage} alt="Rules" />
          </div>
      )}
      <button className="rules" onClick={toggleImage}>Show Rules</button>
    </div>
  );
};

export default Rules;
