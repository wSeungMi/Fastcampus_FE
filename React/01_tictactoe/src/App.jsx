import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <div className="game">
        <div className="gamd-board">
          <Board />
        </div>
        <div className="game-info">
          game-info
          <div>{/* status */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    </>
  );
}

export default App;
