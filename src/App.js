import React, { useState, useEffect } from "react";
import Options from "./Components/Options";

import "./App.css";

const errorUserNameMessage = (
    <p className="error-message">
        Name must contain no spaces and be at least 1 character!
    </p>
);

const errorNumOfProblemsMessage = (
    <p className="error-message">Must have at least 1 problem!</p>
);

function App() {
    const [timeElapsed, setTimeElapsed] = useState(0);

    //Settings, difficulty isnt going to have a problem, one is always selected
    const [userName, setUserName] = useState("");
    const [hasUserNameError, setHasUserNameError] = useState(false);
    const [numOfProblems, setNumOfProblems] = useState(10);
    const [hasNumOfProblemsError, setHasNumOfProblemsError] = useState(false);
    const [difficulty, setDifficulty] = useState("easy");
    const [didGameStart, setDidGameStart] = useState(false);

    const userNameChange = (e) => {
        const name = e.target.value;
        if (name.indexOf(" ") === -1 && name.length >= 1) {
            setUserName(name);
            setHasUserNameError(false);
        } else {
            setHasUserNameError(true);
        }
    };

    const numOfProblemsChange = (e) => {
        const numOfProblems = e.target.value; //NOT the same numOfProblems in the Settings States
        if (numOfProblems <= 0) {
            setNumOfProblems(numOfProblems);
            setHasNumOfProblemsError(true);
        } else {
            setHasNumOfProblemsError(false);
        }
    };

    const difficultyChange = (e) => {
        const difficulty = e.target.value;
        setDifficulty(difficulty);
    };

    const startGame = (e) => {
        console.log("gameStarted!!!!");
    };

    return (
        //Render this Settings Page before the game starts
        <div className="App">
            <Options
                onBlurName={userNameChange}
                onBlurNumOfProblems={numOfProblemsChange}
                onChangeDifficulty={difficultyChange}
                onClickStartGame={startGame}
            />
            {hasUserNameError ? errorUserNameMessage : <p></p>}
            {hasNumOfProblemsError ? errorNumOfProblemsMessage : <p></p>}
        </div>
    );
}

export default App;

/**
 *     useEffect(() => {
        setTimeout(() => {
            setTimeElapsed(timeElapsed + 1);
        }, 1000);
    });
 */
