export default function Log({turns}) {
    return (
        <ol id="log">
            {turns.map(turn => (
                <li key={`${turn.square.rowIndex}${turn.square.colIndex}`}>
                    {turn.player} on Row: {turn.square.rowIndex + 1} Column: {turn.square.colIndex + 1}
                </li>
            ))}
        </ol>
    );
}