import React from "react";
import Statistic from "./Statistic";

export default function StatsDuringGame({
    playerName,
    difficultyLevel,
    totalProblems,
    currentProblem,
}) {
    return (
        <div className="stats-during-game">
            <Statistic label="Player" stat={playerName} />
            <Statistic label="Difficulty" stat={difficultyLevel} />
            <Statistic
                label="Problem"
                stat={`${currentProblem} / ${totalProblems}`}
            />
        </div>
    );
}
