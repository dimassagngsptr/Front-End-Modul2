import { useState } from "react";
import "./style.css";
function Square(value, onSquareClick) {
   return (
      <button onClick={onSquareClick} className="square">
         {value}
      </button>
   );
}
export default function board() {
   const [squares, setSquares] = useState(Array(9).fill(null));
   function handleClick() {}
   return (
      <div className="board">
         <Square value={squares[0]} onClick={handleClick} />
         <Square value={squares[1]} onClick={handleClick} />
         <Square value={squares[2]} onClick={handleClick} />
         <Square value={squares[3]} onClick={handleClick} />
         <Square value={squares[4]} onClick={handleClick} />
         <Square value={squares[5]} onClick={handleClick} />
         <Square value={squares[6]} onClick={handleClick} />
         <Square value={squares[7]} onClick={handleClick} />
         <Square value={squares[8]} onClick={handleClick} />
      </div>
   );
}
