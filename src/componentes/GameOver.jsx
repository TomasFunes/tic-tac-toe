import { forwardRef, useImperativeHandle, useRef } from "react";

const GameOver = forwardRef(function GameOver({ winner, onRematchClick }, ref) {
  const modal = useRef();


  useImperativeHandle(ref, () => ({
    open: () => modal.current.showModal(),
    close: () => modal.current.close(),
  }))

  return (
    <dialog ref={modal} className="modal">
      <h2>Game Over!</h2>
      <p>{winner ? `${winner} won!` : "It's a draw!"}</p>
      <button onClick={onRematchClick}>Rematch!</button>
    </dialog>
  );
})

export default GameOver;