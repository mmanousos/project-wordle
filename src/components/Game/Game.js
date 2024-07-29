import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessDisplay from './GuessDisplay';
import GuessInput from './GuessInput';
import Banner from './Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [winCondition, setWinCondition] = useState('');
  const [answer, setAnswer] = useState(() => sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const handleUpdateGuesses = (guess) => {
    const nextGuesses = [...guesses, guess.toUpperCase()];
    setGuesses(nextGuesses);
    console.log('guess, answer', guess, answer)
    if (guess === answer) {
      setGameOver(true);
      setWinCondition('win');
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameOver(true);
      setWinCondition('lose');
    }
  }

  const handleRestartGame = () => {
    setGuesses([]);
    setGameOver(false);
    setWinCondition('');
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessDisplay guesses={guesses} answer={answer}/>
      {gameOver &&
        <Banner
          answer={answer}
          guesses={guesses}
          winCondition={winCondition}
          restartGame={handleRestartGame}
        />}
        <GuessInput updateGuesses={handleUpdateGuesses} gameOver={gameOver}/>
    </>
  );
}

export default Game;
