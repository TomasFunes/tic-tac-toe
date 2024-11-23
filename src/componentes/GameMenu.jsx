import { Link } from "react-router-dom";

export default function GameMenu() {
  return (
    <ul id="game-menu">
      <li><Link to="/new-game">Play</Link></li>
      <li><Link to="#">Settings</Link></li>
    </ul>
  )
}