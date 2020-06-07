import React from "react";

const stringTime = require("./misc/stringTime").calculateTimeString;
const calculateAccuracy = require("./misc/calculateAccuracy").calculateAccuracy;

export default function GameEnd({
    difficulty,
    correct,
    time,
    numOfProblems,
    resetFunc,
}) {
    return (
        <div>
            <h1>Your Results</h1>
            <section>
                <p>Difficulty: {difficulty}</p>
                <p>Correct Answers: {correct}</p>
                <p>Number of Problems: {numOfProblems}</p>
                <p>Time to Complete: {stringTime(time)}</p>
                <p>Accuracy: {calculateAccuracy(correct, numOfProblems)}</p>
            </section>
            <button onClick={resetFunc}>Restart</button>
        </div>
    );
}
