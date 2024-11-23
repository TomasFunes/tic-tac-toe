export default function GameBoard({ onSquareClick, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex} className="row">
          <ol>
            {row.map((square, colIndex) => (
              <li className="column" key={colIndex}>
                <button
                  onClick={() => onSquareClick(rowIndex, colIndex)}
                  disabled={square}
                  className="square"
                >
                  {square}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
