import React from "react";
import Typewriter from "typewriter-effect";
import {useNavigate} from "react-router-dom"; 
import "../App.css";

function Letter() {
    const navigate = useNavigate();

    return (
        <div className="app">
            <div className="title">
                <Typewriter
                    options={{
                        strings: ["Letter for You💌"],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 50
                    }}/>
            </div>
            <img className="floating-img" src="/img/letter.png" alt="letter"/>
            <div>
                <button className="btn" onClick={() => navigate("/")}>
                    Go Back
                </button>
                <button className="btn" onClick={() => navigate("/the-birthday-letter")}>Open It</button>
            </div>
        </div>
    );
}

export default Letter;
