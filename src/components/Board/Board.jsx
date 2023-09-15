import React, { useEffect, useState } from "react";
import Node from '../Node/Node';
import AStar from "../../algos/Astar";
import './Board.scss';

const cols = 20;
const rows = 10;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1;

const Board = () => {
    const [grid, setGrid] = useState([]);
    const [path, setPath] = useState([]);
    const [visitedNodes, setVisitedNodes] = useState([]);

    useEffect(() => {
        initializeGrid();
    }, []);

    const initializeGrid = () => {
        const grid = new Array(rows);
        for (let i = 0; i < rows; i++) {
            grid[i] = new Array(cols);
        }
        createCell(grid);

        setGrid(grid);
        
        addNeighbors(grid);
        const startNode = grid[NODE_START_ROW][NODE_START_COL];
        const endNode = grid[NODE_END_ROW][NODE_END_COL];
        let path = AStar(startNode, endNode);
        startNode.isWall = false;
        endNode.isWall = false;
        setPath(path.path);
        setVisitedNodes(path.visitedNodes);
    }

    const createCell = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j] = new Cell(i, j);
            }
        }
    }

    const addNeighbors = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j].getUnvisitedNeighbors(grid)
            }
        }
    }
    //Cell Constructor
    function Cell(row, col) {
        this.x = row;
        this.y = col;
        this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
        this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
        this.g = 0;
        this.f = 0;
        this.h = 0;
        this.isWall = false;
        if (Math.random(1) < 0.2) {
            this.isWall = true;
        }
        this.neighbors = [];
        this.previous = undefined;
        //add all adjacent neighbors for curr x,y position
        this.getUnvisitedNeighbors = function(grid) {
            let x = this.x;
            let y = this.y;
            if (x > 0) this.neighbors.push(grid[x-1][y]);
            if (x < rows - 1) this.neighbors.push(grid[x+1][y]);
            if (y > 0) this.neighbors.push(grid[x][y-1]);
            if (y < cols - 1) this.neighbors.push(grid[x][y+1]);
        }
    }
    const gridWithNode = (
        <div>
            {grid.map((row, ridx) => {
                return (
                    <div key={ridx}
                    className="rowWrapper">
                        {
                            row.map((col, cidx) => {
                                const {isStart, isEnd, isWall} = col;
                                return (
                                    <Node 
                                    key={cidx} 
                                    isStart={isStart} 
                                    isEnd={isEnd}
                                    row={ridx}
                                    col={cidx}
                                    isWall={isWall}
                                    />
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    );

    const visualizeShortestPath = (shortestPath) => {
        for (let i = 0; i < shortestPath.length; i++) {
            setTimeout(() => {
                const node = shortestPath[i];
                document.getElementById(`node-${node.x}-${node.y}`).className = 
                "node node-shortest-path";
            }, 10 * i);
        }
    }
    const visualizePath = () => {
        for (let i = 0; i <= visitedNodes.length; i++) {
            if (i === visitedNodes.length) {
                setTimeout(() => {
                    visualizeShortestPath(path);
                }, 20 * i);
            }
            else {
                setTimeout(() => {
                    const node = visitedNodes[i];
                    document.getElementById(`node-${node.x}-${node.y}`).className = 
                    "node node-visited";
                }, 20 * i);
            }
        }
    }
    return (
        <div className="board">
            <button onClick={visualizePath}>Visualize</button>
            {gridWithNode}
        </div>
    )
}

export default Board;