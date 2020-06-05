import React from "react";

export default function StatsDuringGame({
    playerName,
    difficultyLevel,
    totalProblems,
    currentProblem,
}) {
    return (
        <header className="stats-during-game">
            <p className="stats-during-game-player">Player: {playerName}</p>
            <p className="stats-during-game-difficulty">
                Difficulty: {difficultyLevel}
            </p>
            <p className="stats-during-game-problem-count">
                Problem #{currentProblem} / {totalProblems}
            </p>
        </header>
    );
}
