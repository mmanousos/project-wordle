import React from 'react';

const GuessInput = ({ updateGuesses, gameOver }) => {
  const [ guess, setGuess ] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        updateGuesses(guess.toUpperCase());
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required={true}
        pattern={'[a-zA-Z]{5}'}
        title="5 letter word"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        placeholder="five letters here..."
        disabled={gameOver}
      />
    </form>
  );
};

export default GuessInput;
