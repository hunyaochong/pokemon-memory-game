import React from "react";
import "./Scoreboard.css";

function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard_wrapper">
      <div className="scoreboard">
        <span>score: {score}</span>
        <span>best: {bestScore}</span>
      </div>
    </div>
  );
}

export default Scoreboard;
