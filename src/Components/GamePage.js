import React, { useState, useEffect } from "react";
import StatsDuringGame from "./StatsDuringGame";
import MathProblem from "./MathProblem";
import UserAnswer from "./UserAnswer";
import AttemptMessage from "./AttemptMessage";
import GameEnd from "./EndGamePage";

//import arrays and functions
const operations = require("./misc/operationsList").operations;
const correctMessages = require("./misc/correctMessages").correctMessages;
const incorrectMessages = require("./misc/incorrectMessages").incorrectMessages;
const stringTime = require("./misc/stringTime").calculateTimeString;

//Game Component
export default function GamePage({ settings, resetFunc }) {
    useEffect(() => {
        if (currentProblemNumber > settings.numberOfProblems) {
            setDidGameEnd(true);
        } else {
            setMathAnswer(eval(mathProblem));
            setTimeout(() => {
                setSecondsElapsed(secondsElapsed + 1);
            }, 1000);
        }
    });

    //Other Functions
    const getMultiplier = () => {
        //Gets how many digits firstOperand and secondOperand will have
        let multiplier;
        const difficulty = settings.difficultyLevel;
        if (difficulty === "easy") {
            multiplier = 1;
        } else if (difficulty === "medium") {
            multiplier = 2;
        } else {
            multiplier = 3;
        }
        return multiplier;
    };

    const generateNewProblem = () => {
        setfirstOperand(generateOperandNumber());
        setsecondOperand(generateOperandNumber());
        setMathProblem(generateMathProblem());
        setCurrentProblemNumber(currentProblemNumber + 1);
    };

    const generateOperandNumber = () => {
        return Math.floor(
            Math.random() * parseInt(`1${"0".repeat(multiplier)}`, 10)
        );
    };

    const submitEnterKey = (e) => {
        if (e.key === "Enter") {
            const inputField = e.target;
            const submitButton = inputField.nextElementSibling;
            submitButton.click();
        }
    };

    const checkUserAnswer = (e) => {
        //This function will be binded to a submit button
        const inputField = e.target.previousElementSibling; //This is the user input box
        const userAnswer = parseInt(inputField.value, 10);
        const idx = Math.floor(Math.random() * correctMessages.length);

        if (userAnswer === mathAnswer) {
            setCorrectAttempts(correctAttempts + 1);
            setAttemptMessage(correctMessages[idx]);
        } else {
            setAttemptMessage(incorrectMessages[idx]);
        }

        inputField.value = "";
        generateNewProblem();
    };

    const generateMathProblem = () => {
        const idx = Math.floor(Math.random() * operations.length);
        const mathProblem = `${firstOperand} ${operations[idx]} ${secondOperand}`;
        return mathProblem;
    };

    //States and variables
    const multiplier = getMultiplier();
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [currentProblemNumber, setCurrentProblemNumber] = useState(1);
    const [firstOperand, setfirstOperand] = useState(generateOperandNumber());
    const [secondOperand, setsecondOperand] = useState(generateOperandNumber());
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
                time={secondsElapsed - 1}
                numOfProblems={settings.numberOfProblems}
                resetFunc={resetFunc}
            />
        );
    } else {
        return (
            <div className="main-section">
                <h2 className="sub-header">Game Time {settings.player}!</h2>
                <StatsDuringGame
                    time={stringTime(secondsElapsed)}
                    playerName={settings.player}
                    difficultyLevel={settings.difficultyLevel}
                    totalProblems={settings.numberOfProblems}
                    currentProblemNumber={currentProblemNumber}
                />
                <MathProblem mathProblem={mathProblem} />
                <UserAnswer
                    submitAnswerFunc={checkUserAnswer}
                    submitEnterFunc={submitEnterKey}
                />
                <AttemptMessage message={attemptMessage} />
            </div>
        );
    }
}
