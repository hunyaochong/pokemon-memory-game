import React from "react";
import "./card.css";

function Card({ imgSrc, imgAlt }) {
  console.log(imgSrc);
  return (
    <button className="card">
      <img src={imgSrc} alt={imgAlt} />
    </button>
  );
}

export default Card;
