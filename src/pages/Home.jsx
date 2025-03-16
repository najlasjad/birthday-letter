import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom"; 
import "../App.css";

function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="app">
      <div className="text-container">
        <div className="text">
          <Typewriter
            options={{
              strings: ["HAPPY BIRTHDAY 🎂"],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </div>
        <button className="btn" onClick={() => navigate("/letter")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
