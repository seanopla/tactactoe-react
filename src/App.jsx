import "./App.css"
import { useState } from "react"

const Button = ({ children }) => {
  return <button className="button">{children}</button>
}

const Square = ({ value, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  )
}

function App() {
  const [isXNext, setIsXNext] = useState(false)
  const handleSquareClick = () => {
    setIsXNext(!isXNext)
    console.log("CLICKED SQUARE NUMBER")
  }

  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <Square value={1} onClick={handleSquareClick} />
          <Square value={2} onClick={handleSquareClick} />
          <Square value={3} onClick={handleSquareClick} />
        </div>
        <div className="row">
          <Square value={4} onClick={handleSquareClick} />
          <Square value={5} onClick={handleSquareClick} />
          <Square value={6} onClick={handleSquareClick} />
        </div>
        <div className="row">
          <Square value={7} onClick={handleSquareClick} />
          <Square value={8} onClick={handleSquareClick} />
          <Square value={9} onClick={handleSquareClick} />
        </div>
      </div>
      <div className="game-info">
        <h2>Next Player: {isXNext ? "X" : "O"}</h2>
        <Button>Start Over</Button>
        <h2>History</h2>
        <Button>Langkah 1</Button>
        <Button>Langkah 2</Button>
        <Button>Langkah 3</Button>
      </div>
    </div>
  )
}

export default App
