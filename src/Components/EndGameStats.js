import React from "react";
import Statistic from "./Statistic";

const stringTime = require("./misc/stringTime").calculateTimeString;
const calculateAccuracy = require("./misc/calculateAccuracy").calculateAccuracy;

export default function RundownStatistics({ stats }) {
    return (
        <section className="run-down-section">
            <Statistic label="Difficulty" stat={stats.difficulty} />
            <Statistic label="Correct Answers" stat={stats.correct} />
            <Statistic label="Number of Problems" stat={stats.numOfProblems} />
            <Statistic label="Time to Complete" stat={stringTime(stats.time)} />
            <Statistic
                label="Accuracy"
                stat={calculateAccuracy(stats.correct, stats.numOfProblems)}
            />
        </section>
    );
}
