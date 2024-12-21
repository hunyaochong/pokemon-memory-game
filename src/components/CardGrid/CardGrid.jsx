import React from "react";
import Card from "../Card";
import "./cardgrid.css";
import { NUM_OF_CARDS } from "../../constants";
import { range } from "../../utils";

function CardGrid() {
  return (
    <main>
      {range(NUM_OF_CARDS).map(() => (
        <Card key={crypto.randomUUID()}></Card>
      ))}
    </main>
  );
}

export default CardGrid;
