import React from 'react';

const GuessInput = ({ updateGuesses }) => {
  const [ guess, setGuess ] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        updateGuesses(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required={true}
        pattern={'[a-zA-Z]{5}'}
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        placeholder="five letters here..."
      />
    </form>
  );
};

export default GuessInput;
