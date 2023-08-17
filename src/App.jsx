import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss"

import LandingPage from "./components/LandingPage/LandingPage"
import Visualizer from "./components/Visualizer/Visualizer";
// import { useState } from "react"

function App() {
    return (
    <>
        <Router>
            <Routes>
                <Route path="/"
                    exact element={<LandingPage />} />
                <Route path="/visualizer"
                    element={<Visualizer />} />
            </Routes>
        </Router>
    </>);
}

export default App;