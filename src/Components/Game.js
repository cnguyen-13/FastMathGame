import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import StatsDuringGame from "./StatsDuringGame";
import MathProblem from "./MathProblem";
import UserAnswer from "./UserAnswer";
import AttemptMessage from "./AttemptMessage";
import GameEnd from "./GameEnd";

//import arrays and functions
const operations = require("./misc/operationsList").operations;
const correctMessages = require("./misc/correctMessages").correctMessages;
const incorrectMessages = require("./misc/incorrectMessages").incorrectMessages;

//Component
export default function Game({ settings, resetFunc }) {
    useEffect(() => {
        if (currentProblem > settings.numberOfProblems) {
            setDidGameEnd(true);
        } else {
            setMathAnswer(eval(mathProblem));
            setTimeout(() => {
                setTimeElapsedSeconds(timeElapsedSeconds + 1);
            }, 1000);
        }
    });
    //Other Functions

    const generateRandomNumber = () => {
        let multiplier;
        if (settings.difficultyLevel === "easy") {
            multiplier = 1;
        } else if (settings.difficultyLevel === "medium") {
            multiplier = 2;
        } else {
            multiplier = 3;
        }
        return Math.floor(
            Math.random() * parseInt(`1${"0".repeat(multiplier)}`)
        );
    };

    const checkUserAnswer = (e) => {
        const userAnswer = parseInt(e.target.value, 10);
        const idx = Math.floor(Math.random() * correctMessages.length);

        if (userAnswer === mathAnswer) {
            setCorrectAttempts(correctAttempts + 1);
            setAttemptMessage(correctMessages[idx]);
        } else {
            setAttemptMessage(incorrectMessages[idx]);
        }

        setFirstNum(generateRandomNumber());
        setSecondNum(generateRandomNumber());
        setMathProblem(generateMathProblem());
        setCurrentProblem(currentProblem + 1);
        e.target.value = "";
    };

    const generateMathProblem = () => {
        const idx = Math.floor(Math.random() * operations.length);
        const mathProblem = `${firstNum} ${operations[idx]} ${secondNum}`;
        return mathProblem;
    };

    //States
    const [timeElapsedSeconds, setTimeElapsedSeconds] = useState(0);
    const [currentProblem, setCurrentProblem] = useState(1);
    const [firstNum, setFirstNum] = useState(generateRandomNumber());
    const [secondNum, setSecondNum] = useState(generateRandomNumber());
    const [mathProblem, setMathProblem] = useState(generateMathProblem());
    const [mathAnswer, setMathAnswer] = useState(eval(mathProblem));
    const [correctAttempts, setCorrectAttempts] = useState(0);
    const [attemptMessage, setAttemptMessage] = useState("");
    const [didGameEnd, setDidGameEnd] = useState(false);

    if (didGameEnd) {
        return (
            <GameEnd
                difficulty={settings.difficultyLevel}
                correct={correctAttempts}
                time={timeElapsedSeconds - 1}
                numOfProblems={settings.numberOfProblems}
                resetFunc={resetFunc}
            />
        );
    } else {
        return (
            <div className="game">
                <Timer time={timeElapsedSeconds} />
                <StatsDuringGame
                    playerName={settings.player}
                    difficultyLevel={settings.difficultyLevel}
                    totalProblems={settings.numberOfProblems}
                    currentProblem={currentProblem}
                />
                <MathProblem mathProblem={mathProblem} />
                <UserAnswer onBlurFunc={checkUserAnswer} />
                <AttemptMessage message={attemptMessage} />
            </div>
        );
    }
}
