import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Options from "./Components/Options";
import Game from "./Components/Game";
import TransitionPage from "./Components/TransitionPage";
import "./App.css";

//Might put these in another file
const errorUserNameMessage = (
    <p className="error-message">
        Name must contain no spaces and be at least 1 character!
    </p>
);

const errorNumOfProblemsMessage = (
    <p className="error-message">Must have at least 1 problem!</p>
);

export default function App() {
    const [timeElapsed, setTimeElapsed] = useState(0);

    //Settings, difficulty isnt going to have a problem, one is always selected
    const [userName, setUserName] = useState("");
    const [hasUserNameError, setHasUserNameError] = useState(false);
    const [numOfProblems, setNumOfProblems] = useState(10);
    const [hasNumOfProblemsError, setHasNumOfProblemsError] = useState(false);
    const [difficulty, setDifficulty] = useState("easy");
    const [didGameStart, setDidGameStart] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [finishedSettings, setFinishedSettings] = useState({});

    const resetGame = () => {
        setUserName("");
        setHasUserNameError(false);
        setNumOfProblems(10);
        setHasNumOfProblemsError(false);
        setDifficulty("easy");
        setDidGameStart(false);
        setIsTransitioning(false);
        setFinishedSettings({});
    };
    //Functions
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
        if (numOfProblems >= 1) {
            setNumOfProblems(numOfProblems);
            setHasNumOfProblemsError(false);
        } else {
            setHasNumOfProblemsError(true);
        }
    };

    const difficultyChange = (e) => {
        const difficulty = e.target.value;
        setDifficulty(difficulty);
    };

    const startGame = (e) => {
        //Send the settings of the game to the Game Component to use!!!
        if (
            userName.indexOf(" ") === -1 &&
            userName.length >= 1 &&
            numOfProblems >= 1
        ) {
            const settings = {
                player: userName,
                difficultyLevel: difficulty,
                numberOfProblems: numOfProblems,
            };
            setIsTransitioning(true);
            setFinishedSettings(settings);
            setDidGameStart(true);
        } else {
            if (userName.length < 1 || userName.indexOf(" ") !== -1) {
                setHasUserNameError(true);
            }

            if (numOfProblems < 1) {
                setHasNumOfProblemsError(true);
            }
        }
    };

    //Might need a transistion function
    const afterTransition = () => {
        setIsTransitioning(false);
    };
    //Rendering Section
    if (isTransitioning) {
        return (
            <TransitionPage
                settings={finishedSettings}
                afterTransitionFunc={afterTransition}
            />
        );
        //Use TransistionPage Component here, this page should last like 7secondsish
    } else if (didGameStart && !isTransitioning) {
        return <Game settings={finishedSettings} resetFunc={resetGame} />;
        //Use Game Component here
    } else {
        return (
            <div className="App">
                <Header
                    title="Fast MATH"
                    description="How Fast Can You Simple Math?"
                />
                <Options
                    onChangeName={userNameChange}
                    onChangeNumOfProblems={numOfProblemsChange}
                    onChangeDifficulty={difficultyChange}
                    onClickStartGame={startGame}
                />
                {hasUserNameError ? errorUserNameMessage : <p></p>}
                {hasNumOfProblemsError ? errorNumOfProblemsMessage : <p></p>}
            </div>
        );
    }
}

/**
 *     useEffect(() => {
        setTimeout(() => {
            setTimeElapsed(timeElapsed + 1);
        }, 1000);
    });
*/
