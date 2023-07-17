import "./App.scss"

import LandingPage from "./components/LandingPage/LandingPage"
import Board from "./components/Board/Board"
import Header from "./components/Header/Header"
import Option from "./components/Option/Option"
import { useState } from "react"

function App() {

    return (<div className="App">
        <LandingPage />
        {/* <Header />
        <Option />
        <Board /> */}
    </div>);
}

export default App;