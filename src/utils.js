import { NUM_OF_CARDS } from "./constants";

export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const shuffle = (list) => {
  let arrayCopy = [...list];
  let newArray = [];

  if (list.length === 0) return;

  for (let i = 0; i < NUM_OF_CARDS; i++) {
    let randNum = Math.floor(Math.random() * arrayCopy.length);
    let splicedItem = arrayCopy.splice(randNum, 1)[0];
    newArray.push(splicedItem);
  }
  return newArray;
};
