import React from "react";
import Board from "../Board/Board";
import Header from "../Header/Header";
import Option from "../Option/Option";
import './Visualizer.scss'

export default function Visualizer() {
    return (<div className="visualizer">
        <Header />
        <Option />
        <Board />
    </div>)
}