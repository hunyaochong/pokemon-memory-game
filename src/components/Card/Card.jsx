import React from "react";
import "./card.css";

function Card({ imgSrc, imgAlt }) {
  console.log(imgSrc);
  return (
    <div className="card">
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
}

export default Card;
