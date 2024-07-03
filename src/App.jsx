import "./App.css"
import { useState } from "react"
import Button from "./components/Button"
import calculateWinner from "./utils/calculateWinner"
import Board from "./components/Board"
import Square from "./components/Square"
import GameInfo from "./components/GameInfo"
import Timeline from "./components/Timeline"

const App = () => {
  const [timeline, setTimeline] = useState([
    {
      isXNext: false,
      board: Array(9).fill(null),
    },
  ])

  const board = timeline[timeline.length - 1].board
  const isXNext = timeline[timeline.length - 1].isXNext
  const winner = calculateWinner(board)

  const handlerResetGameClick = () => {
    // setBoard(Array(9).fill(null))
    // setIsXNext(false)
  }

  const handleSquareClick = (index) => {
    if (winner || board[index]) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? "X" : "O"

    setTimeline([
      ...timeline,
      {
        board: newBoard,
        isXNext: !isXNext,
      },
    ])
  }

  return (
    <div className="container">
      <Board board={board} onAction={handleSquareClick} />
      <div>
        <GameInfo
          winner={winner}
          handlerResetGameClick={handlerResetGameClick}
          isXNext={isXNext}
        />
        <Timeline timeline={timeline} />
      </div>
    </div>
  )
}

export default App
