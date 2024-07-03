import Button from "./Button"

const GameInfo = ({ winner, isXNext }) => {
  return (
    <div className="game-info">
      {winner ? (
        <h2>Winner: {winner}</h2>
      ) : (
        <h2>Next Player: {isXNext ? "X" : "O"}</h2>
      )}
    </div>
  )
}

export default GameInfo
