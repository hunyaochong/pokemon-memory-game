import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>POKEMON GAME</h1>
      <button className="music_button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="hsl(48 100% 62%)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-volume"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        </svg>
      </button>
    </header>
  );
}

export default Header;
