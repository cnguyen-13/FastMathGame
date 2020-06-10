import React from "react";
import EndGameStats from "./EndGameStats";
import Button from "./Button";

export default function EndGamePage({
    difficulty,
    correct,
    time,
    numOfProblems,
    resetFunc,
}) {
    const stats = {
        difficulty: difficulty,
        correct: correct,
        time: time,
        numOfProblems: numOfProblems,
    };

    return (
        <div className="main-section">
            <h2 className="sub-header">Your Results!</h2>
            <EndGameStats stats={stats} />
            <Button label="Restart" onClickFunc={resetFunc} />
        </div>
    );
}
