import React, { useState, useEffect } from "react";
import Header from "./Header";
import StatsDuringGame from "./StatsDuringGame";
import MathProblem from "./MathProblem";
import UserAnswer from "./UserAnswer";
import AttemptMessage from "./AttemptMessage";
import GameEnd from "./EndGamePage";
import Statistic from "./Statistic";

//import arrays and functions
const operations = require("./misc/operationsList").operations;
const correctMessages = require("./misc/correctMessages").correctMessages;
const incorrectMessages = require("./misc/incorrectMessages").incorrectMessages;
const stringTime = require("./misc/stringTime").calculateTimeString;

//Game Component
export default function GamePage({ settings, resetFunc }) {
    useEffect(() => {
        if (currentProblem > settings.numberOfProblems) {
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

    const generateOperandNumber = () => {
        return Math.floor(
            Math.random() * parseInt(`1${"0".repeat(multiplier)}`)
        );
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

        //Change Math Problem and Reset inputField
        setfirstOperand(generateOperandNumber());
        setsecondOperand(generateOperandNumber());
        setMathProblem(generateMathProblem());
        setCurrentProblem(currentProblem + 1);
        inputField.value = "";
    };

    const generateMathProblem = () => {
        const idx = Math.floor(Math.random() * operations.length);
        const mathProblem = `${firstOperand} ${operations[idx]} ${secondOperand}`;
        return mathProblem;
    };

    //States
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [currentProblem, setCurrentProblem] = useState(1);
    const [multiplier, setMultiplier] = useState(getMultiplier());
    const [firstOperand, setfirstOperand] = useState(generateOperandNumber());
    const [secondOperand, setsecondOperand] = useState(generateOperandNumber());
    const [mathProblem, setMathProblem] = useState(generateMathProblem());
    const [mathAnswer, setMathAnswer] = useState(eval(mathProblem));
    const [correctAttempts, setCorrectAttempts] = useState(0);
    const [attemptMessage, setAttemptMessage] = useState("");
    const [didGameEnd, setDidGameEnd] = useState(false);

    if (didGameEnd) {
        return (
            <>
                <Header
                    title="Fast MATH"
                    description="How Fast Can You Simple Math?"
                />
                <GameEnd
                    difficulty={settings.difficultyLevel}
                    correct={correctAttempts}
                    time={secondsElapsed - 1}
                    numOfProblems={settings.numberOfProblems}
                    resetFunc={resetFunc}
                />
            </>
        );
    } else {
        return (
            <>
                <Header
                    title="Fast MATH"
                    description="How Fast Can You Simple Math?"
                />
                <div className="game">
                    <Statistic
                        label="Timer"
                        stat={stringTime(secondsElapsed)}
                    />
                    <StatsDuringGame
                        playerName={settings.player}
                        difficultyLevel={settings.difficultyLevel}
                        totalProblems={settings.numberOfProblems}
                        currentProblem={currentProblem}
                    />
                    <MathProblem mathProblem={mathProblem} />
                    <UserAnswer submitAnswerFunc={checkUserAnswer} />
                    <AttemptMessage message={attemptMessage} />
                </div>
            </>
        );
    }
}
