import React from 'react';
import './Node.scss';

export default function Node({ isStart, isEnd, row, col}) {
  const classes = isStart ? "node-start" : isEnd ? "node-end" : "";
  return (
    <div className={`node ${classes}`} id={`node-${row}-${col}`}></div>
  )
}