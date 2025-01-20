import React, { useState } from 'react';
import Board from './Board';
import './Game.css';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);

  function handleClick(index) {
    if (squares[index] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? 'X' : 'O';
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  function restartGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="game">
      <h1>Tres en Raya</h1>
      <Board squares={squares} onSquareClick={handleClick} />
      <div className="info">
        {winner
          ? `Ganador: ${winner}`
          : squares.every(Boolean)
          ? 'Empate'
          : `Turno de: ${isXNext ? 'X' : 'O'}`}
      </div>
      <button className="restart-button" onClick={restartGame}>
        Reiniciar Juego
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}



export default Game;
