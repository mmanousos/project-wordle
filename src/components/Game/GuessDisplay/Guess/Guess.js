import React from 'react';
import { range } from '/src/utils';

const Guess = ({ guess }) => {
  const letters = range(5);
  return (
    <>
      {letters.map((idx) => (
        <span className="cell" key={idx}>{guess && guess[idx]}</span>
      ))}
    </>
  );
};

export default Guess;
