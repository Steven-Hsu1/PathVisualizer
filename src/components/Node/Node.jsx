import React from 'react';
import './Node.scss';

const Node = (props) => {
  const {row, col, isStart, isWall, isEnd} = props;
  const classes = isStart ? "node-start" : isEnd ? "node-end" : isWall ? "node-wall" : "";
  return (
    <div 
      className={`node ${classes}`} 
      id={`node-${row}-${col}`}
    >
    </div>
  )
}

export default Node;