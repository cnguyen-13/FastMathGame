import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import StatsDuringGame from "./StatsDuringGame";
import MathProblem from "./MathProblem";
import UserAnswer from "./UserAnswer";
import AttemptMessage from "./AttemptMessage";
import GameEnd from "./GameEnd";

const stringTime = require("./misc/stringTime").calculateTimeString;
const operations = require("./misc/operationsList").operations; //Add divide later
const correctMessages = require("./misc/correctAttemptMessages")
    .correctMessages;
const incorrectMessages = require("./misc/incorrectAttemptMessages")
    .incorrectMessages;

export default function Game({ settings }) {
    //Makes sure the mathAnswer is always correct
    useEffect(() => {
        setTimeout(() => {
            setTimeElapsedSeconds(timeElapsedSeconds + 1);
        }, 1000);

        if (currentProblem > settings.numberOfProblems) {
            setDidGameEnd(true);
        } else {
            setMathAnswer(eval(mathProblem));
        }
    });

    //Generate random math problem
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

    //Other Functions
    //function to CHECK mathAnswer vs userAnswer
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
                time={5} //use stringTime function here
                numOfProblems={settings.numberOfProblems}
            />
        );
    } else {
        return (
            <div className="game">
                <Timer seconds={timeElapsedSeconds} />
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
