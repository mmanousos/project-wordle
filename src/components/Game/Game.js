import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessDisplay from './GuessDisplay';
import GuessInput from './GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleUpdateGuesses = (guess) => {
    const nextGuesses = [...guesses, guess.toUpperCase()];
    setGuesses(nextGuesses);
  }

  return (
    <>
      {<GuessDisplay guesses={guesses} answer={answer}/>}
      <GuessInput updateGuesses={handleUpdateGuesses}/>
    </>
  );
}

export default Game;
