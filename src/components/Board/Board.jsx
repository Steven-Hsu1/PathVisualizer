import React from "react";
import { useState } from "react";
import './Board.scss';


const generateBoard = (row, col) => {
    const newBoard = [];
    for (let i = 0; i < row; i++) {
        newBoard.push([...Array(col)]);
    }
    return newBoard;
}

export default function Board() {
    let vpWidth = window.innerWidth;
    window.onresize = () => {
        vpWidth = window.innerWidth;
    }
    // const vpHeight = window.innerHeight;
    const numCols = Math.floor(vpWidth / 50);
    const [board, setBoard] = useState(generateBoard(10, numCols));
    return (
        <div id="board">
            {
                board.map((row, r) => {
                    return (
                        <div 
                        key={r}
                        style={{
                            display: 'flex'
                        }}>
                            {row.map((cell, c) => {
                                return (
                                    <div 
                                    key={c} 
                                    style={{
                                        border: 'solid black 1px',
                                        height: '50px',
                                        width: '50px',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        {cell}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    );
}