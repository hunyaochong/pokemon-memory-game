import React from "react";
import pikachuSvg from "../../assets/pikachu.svg";
import "./pikachu_boop.css";

function PikachuBoop() {
  return (
    <div>
      <img className="boop" src={pikachuSvg} alt="Pikachu icon" />
    </div>
  );
}

export default PikachuBoop;
