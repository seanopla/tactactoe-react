import Button from "./Button"

const GameInfo = ({ winner, handlerResetGameClick, isXNext }) => {
  return (
    <div className="game-info">
      {winner ? (
        <h2>Winner: {winner}</h2>
      ) : (
        <h2>Next Player: {isXNext ? "X" : "O"}</h2>
      )}
      <Button onClick={handlerResetGameClick}>Start Over</Button>
    </div>
  )
}

export default GameInfo
