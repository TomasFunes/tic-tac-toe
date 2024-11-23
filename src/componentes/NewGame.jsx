import { Link } from "react-router-dom";

export default function NewGame() {
  return (
    <div id="game-menu">
      <Link to="/play">vs. computer</Link>
      <Link to="/play">vs. friend</Link>
    </div>
  );
}