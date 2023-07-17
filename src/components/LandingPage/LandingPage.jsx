import React, { useEffect, useState } from "react";
import "./LandingPage.scss";
import Typewriter from 'typewriter-effect';

export default function LandingPage() {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowBtn(true);
        }, 5000);
    }, [])
    return (<div id="landing-page">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div id="typewriter-welcome">
            <Typewriter onInit={(typewriter) => {
                typewriter.typeString("Welcome to Path Visualizer").start();
            }}/>
        </div>
        {showBtn && <a href="something" class="button1">Start</a>}
    </div>)
}