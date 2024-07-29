import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessDisplay from './GuessDisplay';
import GuessInput from './GuessInput';
import Banner from './Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [winCondition, setWinCondition] = useState('');

  const handleUpdateGuesses = (guess) => {
    const nextGuesses = [...guesses, guess.toUpperCase()];
    setGuesses(nextGuesses);
    console.log('guess, answer', guess, answer)
    if (guess === answer) {
      setGameOver(true);
      setWinCondition('win');
    } else if (guesses.length === 6) {
      setGameOver(true);
      setWinCondition('lose');
    }
  }

  return (
    <>
      <GuessDisplay guesses={guesses} answer={answer}/>
      {gameOver &&
        <Banner answer={answer} guesses={guesses} winCondition={winCondition} />}
        <GuessInput updateGuesses={handleUpdateGuesses} gameOver={gameOver}/>
    </>
  );
}

export default Game;
