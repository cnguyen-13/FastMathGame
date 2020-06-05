import React, { useState, useEffect } from "react";
import StatsDuringGame from "./StatsDuringGame";
import UserAnswer from "./UserAnswer";

const operations = ["+", "-", "/", "*"];

export default function Game({ settings }) {
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
