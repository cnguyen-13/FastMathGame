import React, { useState, useEffect } from "react";
import StatsDuringGame from "./StatsDuringGame";
import UserAnswer from "./UserAnswer";

const operations = ["+", "-", "*"]; //Add divide later

export default function Game({ settings }) {
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
    //Figure out how to evaluate the operation sign in 'x + y'
    const generateMathProblem = () => {
        const indexOperation = Math.floor(Math.random() * operations.length);
        const mathProblem = `${firstNum} ${operations[indexOperation]} ${secondNum}`;
        return mathProblem;
    };

    const [currentProblem, setCurrentProblem] = useState(1);
    const [firstNum, setFirstNum] = useState(generateRandomNumber());
    const [secondNum, setSecondNum] = useState(generateRandomNumber());
    const [mathProblem, setMathProblem] = useState(generateMathProblem());
    const [mathAnswer, setMathAnswer] = useState(eval(mathProblem));

    return (
        <div className="game">
            <StatsDuringGame
                playerName={settings.player}
                difficultyLevel={settings.difficultyLevel}
                totalProblems={settings.numberOfProblems}
                currentProblem={1} //State of Game Component
            />
        </div>
    );
}
