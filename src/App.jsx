import "./App.css"
import { useState } from "react"
import Button from "./components/Button"
import calculateWinner from "./utils/calculateWinner"
import Board from "./components/Board"
import Square from "./components/Square"
import GameInfo from "./components/GameInfo"
import Timeline from "./components/Timeline"

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
      <Board board={board} handleSquareClick={handleSquareClick} />
      <div>
        <GameInfo
          winner={winner}
          handlerResetGameClick={handlerResetGameClick}
          isXNext={isXNext}
        />
        <Timeline />
      </div>
    </div>
  )
}

export default App
