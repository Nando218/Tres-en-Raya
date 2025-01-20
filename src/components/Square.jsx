import React from 'react';
import './Square.css';

function Square({ value, onClick }) {
  return (
    <button className={`square ${value}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
