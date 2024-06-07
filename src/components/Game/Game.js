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
    const guessData = {
      id: crypto.randomUUID(),
      guess: guess.toUpperCase(),
    }
    const nextGuesses = [...guesses, guessData];
    setGuesses(nextGuesses);
  }

  return (
    <>
      {guesses.length > 0 && <GuessDisplay guesses={guesses}/>}
      <GuessInput updateGuesses={handleUpdateGuesses}/>
    </>
  );
}

export default Game;
