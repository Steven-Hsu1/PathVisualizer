import React, { useEffect, useState } from "react";
import "./LandingPage.scss";
import Typewriter from 'typewriter-effect';
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const [btn, setBtn] = useState(false);
    let navigate = useNavigate();
    const visualizer = () => {
        let path = `/visualizer`
        navigate(path);
    }
    const handleAnimationEnd = () => {
        setBtn(true);
    }
    return (
    <>
    <div id="landing-page">
        <h1 onAnimationEnd={handleAnimationEnd}
        className="typewriter-welcome">
            Welcome to Path Visualizer
        </h1>
        {btn && <button className="btn" onClick={visualizer}>Start</button>}
    </div>
    </>)
}