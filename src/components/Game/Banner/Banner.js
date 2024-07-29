export default function Banner({ answer, guesses, winCondition, restartGame }) {
  return (
    <div className={`banner ${winCondition === "win"? 'happy' : 'sad'}`}>
        {winCondition === "win" ?
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{guesses.length}</strong> guesses!
          </p> :
          <p>
            <strong>Game Over!</strong> The word was <strong>{answer}</strong>
          </p>
        }
        <button onClick={restartGame}><strong>Restart</strong></button>
    </div>
  )
}
