import Player from "./Player";
import GameBoard from "./GameBoard";
import Log from "./Log";
import GameOver from "./GameOver";
import { useRef, useState } from "react";
import {
  deriveWinner,
  deriveGameBoard,
  isDraw,
} from "../game-utils";


export default function Game() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  const gameOverModal = useRef();

  const activePlayer = gameTurns.length % 2 == 0 ? "X" : "O";
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  if (winner || isDraw(gameTurns, winner)) gameOverModal.current.open();

  function handleSquareClick(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        {
          square: { rowIndex, colIndex },
          player: activePlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRematchClick() {
    gameOverModal.current.close();
    setGameTurns(() => []);
  }

  function handleSavePlayerName(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <GameOver
        ref={gameOverModal}
        winner={winner}
        onRematchClick={handleRematchClick}
      />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onSavePlayerName={handleSavePlayerName}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onSavePlayerName={handleSavePlayerName}
          />
        </ol>
        <GameBoard onSquareClick={handleSquareClick} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};