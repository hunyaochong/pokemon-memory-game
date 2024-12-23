import React from "react";
import "./scoreboard.css";

function Scoreboard({ score }) {
  return (
    <div className="scoreboard_wrapper">
      <div className="scoreboard">
        <span>score: {score}</span>
        <span>best: 10</span>
      </div>
    </div>
  );
}

export default Scoreboard;
