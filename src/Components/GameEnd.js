import React from "react";

export default function GameEnd({
    difficulty,
    correct,
    time,
    numOfProblems,
    resetFunc,
}) {
    //Calculate accuracy
    const calculateAccuracy = () => {
        return `${(correct / numOfProblems) * 100} %`;
    };

    return (
        <div>
            <h1>Your Results</h1>
            <section>
                <p>Difficulty: {difficulty}</p>
                <p>Correct Answers: {correct}</p>
                <p>Number of Problems: {numOfProblems}</p>
                <p>Time to Complete: {time}</p>
                <p>Accuracy: {calculateAccuracy()}</p>
            </section>
            <button onClick={5}>Restart</button>
        </div>
    );
}
