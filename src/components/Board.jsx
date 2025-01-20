import React from 'react';
import Square from './Square';
import './Board.css';

function Board({ squares, onSquareClick }) {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          className={value} 
        />
      ))}
    </div>
  );
}

export default Board;
