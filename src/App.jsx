import "./App.css"
import { useState } from "react"

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

const Square = ({ value, onClick, index }) => {
  return (
    <div className="square" onClick={onClick}>
      <span
        style={{
          position: "absolute",
          color: "red",
          fontSize: "20px",
          top: "0",
          left: "4px",
        }}
      >
        {index}
      </span>
      {value}
    </div>
  )
}

function calculateWinner(board) {
  // list down semua kemungkinan menang

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  // loop through winning combination dan bandingkan dengan board
  for (let i = 0; i < winningCombination.length; i++) {
    const [a, b, c] = winningCombination[i]

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
}

const App = () => {
  const [isXNext, setIsXNext] = useState(false)
  const [board, setBoard] = useState(Array(9).fill(null))
  const winner = calculateWinner(board)

  const handlerResetGameClick = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(false)
  }

  const handleSquareClick = (index) => {
    if (winner) return
    setBoard((currBoard) => {
      const newBoard = [...currBoard]

      if (newBoard[index]) {
        return newBoard
      }

      newBoard[index] = isXNext ? "X" : "O"

      setIsXNext(!isXNext)
      return newBoard
    })
    console.log("CLICKED SQUARE NUMBER")
  }

  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <Square
            index={0}
            value={board[0]}
            onClick={() => handleSquareClick(0)}
          />
          <Square
            index={1}
            value={board[1]}
            onClick={() => handleSquareClick(1)}
          />
          <Square
            index={2}
            value={board[2]}
            onClick={() => handleSquareClick(2)}
          />
        </div>
        <div className="row">
          <Square
            index={3}
            value={board[3]}
            onClick={() => handleSquareClick(3)}
          />
          <Square
            index={4}
            value={board[4]}
            onClick={() => handleSquareClick(4)}
          />
          <Square
            index={5}
            value={board[5]}
            onClick={() => handleSquareClick(5)}
          />
        </div>
        <div className="row">
          <Square
            index={6}
            value={board[6]}
            onClick={() => handleSquareClick(6)}
          />
          <Square
            index={7}
            value={board[7]}
            onClick={() => handleSquareClick(7)}
          />
          <Square
            index={8}
            value={board[8]}
            onClick={() => handleSquareClick(8)}
          />
        </div>
      </div>
      <div className="game-info">
        {winner ? (
          <h2>Winner: {winner}</h2>
        ) : (
          <h2>Next Player: {isXNext ? "X" : "O"}</h2>
        )}
        <Button onClick={handlerResetGameClick}>Start Over</Button>
        <h2>History</h2>
        <Button>Langkah 1</Button>
        <Button>Langkah 2</Button>
        <Button>Langkah 3</Button>
      </div>
    </div>
  )
}

export default App
