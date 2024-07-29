import React from 'react';
import { range } from '/src/utils';
import { checkGuess } from '/src/game-helpers';

const Guess = ({ guess, answer }) => {
  const letters = range(5);

  // use checkGuess to determine the status of each letter in the guess
  // use that result to take into account the status of each letter
  const checkedGuess = checkGuess(guess, answer);

  return (
    <>
      {letters.map((idx) => {
        if (checkedGuess) {
          const status = checkedGuess[idx].status;
          return <span className={`cell ${status}`} key={idx}>{checkedGuess[idx].letter}</span>
        } else
          return <span className="cell" key={idx}></span>;
      })}
    </>
  );
};

export default Guess;
