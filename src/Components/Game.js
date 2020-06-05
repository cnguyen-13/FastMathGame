import React, { useState, useEffect } from "react";
import StatsDuringGame from "./StatsDuringGame";
import MathProblem from "./MathProblem";
import UserAnswer from "./UserAnswer";
import AttemptMessage from "./AttemptMessage";

const operations = ["+", "-", "*"]; //Add divide later
const correctMessages = [
    "That is correct!",
    "Keep going!",
    "Good job, that was correct!",
];
const incorrectMessages = [
    "That was incorrect!",
    "Maybe next time!",
    "Not quite the answer!",
];
export default function Game({ settings }) {
    //Makes sure the mathAnswer is always correct
    useEffect(() => {
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
    //mathAnswer is out of sync
    const checkUserAnswer = (e) => {
        const userAnswer = parseInt(e.target.value, 10);
        const idx = Math.floor(Math.random() * correctMessages.length);

        if (userAnswer === mathAnswer) {
            setCorrectAttempts(correctAttempts + 1);
            setAttemptMessage(correctMessages[idx]);
        } else {
            setAttemptMessage(incorrectMessages[idx]);
        }

        setAttempts(attempts + 1);
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

    const [currentProblem, setCurrentProblem] = useState(1);
    //These 4 things change each time
    const [firstNum, setFirstNum] = useState(generateRandomNumber());
    const [secondNum, setSecondNum] = useState(generateRandomNumber());
    const [mathProblem, setMathProblem] = useState(generateMathProblem());
    const [mathAnswer, setMathAnswer] = useState(eval(mathProblem));
    //WAY MORE STATES
    const [correctAttempts, setCorrectAttempts] = useState(0);
    const [attempts, setAttempts] = useState(0);
    //Attempt correctness message
    const [attemptMessage, setAttemptMessage] = useState("");
    //Game Status
    const [didGameEnd, setDidGameEnd] = useState(false);

    if (didGameEnd) {
        return <p>Game ended!!!!</p>;
    } else {
        return (
            <div className="game">
                <StatsDuringGame
                    playerName={settings.player}
                    difficultyLevel={settings.difficultyLevel}
                    totalProblems={settings.numberOfProblems}
                    currentProblem={currentProblem} //State of Game Component
                />
                <MathProblem mathProblem={mathProblem} />
                <UserAnswer onBlurFunc={checkUserAnswer} />
                <AttemptMessage message={attemptMessage} />
            </div>
        );
    }
}
