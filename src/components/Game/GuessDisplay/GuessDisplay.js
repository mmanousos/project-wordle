import React from 'react';
import Guess from './Guess';
import { range } from '/src/utils';
import { NUM_OF_GUESSES_ALLOWED } from '/src/constants';

const GuessDisplay = ({ guesses }) => {
  const rows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((idx) => (
        <p key={idx} className="guess">
            <Guess guess={guesses[idx]} />
        </p>
      ))}
    </div>
  );
};

export default GuessDisplay;
