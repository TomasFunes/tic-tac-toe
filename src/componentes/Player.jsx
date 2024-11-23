import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onSavePlayerName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const playerNameContainer = isEditing ? (
    <input
      type="text"
      className="player-name"
      value={playerName}
      onChange={handleChange}
      required
    />
  ) : (
    <span className="player-name">{playerName} ({symbol})</span>
  );

  function handleEditClick() {
    if (isEditing) onSavePlayerName(symbol, playerName);
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    setPlayerName((playerName) => event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">{playerNameContainer}</span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
