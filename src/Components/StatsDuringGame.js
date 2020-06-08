import React from "react";
import Statistic from "./Statistic";

export default function StatsDuringGame({
    time,
    playerName,
    difficultyLevel,
    totalProblems,
    currentProblemNumber,
}) {
    return (
        <div className="stats-during-game">
            <Statistic label="Timer" stat={time} />
            <Statistic label="Player" stat={playerName} />
            <Statistic label="Difficulty" stat={difficultyLevel} />
            <Statistic
                label="Problem"
                stat={`${currentProblemNumber} / ${totalProblems}`}
            />
        </div>
    );
}
