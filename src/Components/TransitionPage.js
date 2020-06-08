import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function TransitionPage({ settings, afterTransitionFunc }) {
    const [countDown, setCountDown] = useState(3);

    useEffect(() => {
        setTimeout(() => {
            setCountDown(countDown - 1);
            if (countDown === 1) {
                afterTransitionFunc();
            }
        }, 1000);
    });

    return (
        <>
            <Header
                title="Fast MATH"
                description="How Fast Can You Simple Math?"
            />
            <div className="trasition-page">
                <h1 className="transition-page-title">
                    Good Luck {settings.player}!
                </h1>
                <p className="transition-page-message">
                    You have {settings.numberOfProblems}{" "}
                    {settings.difficultyLevel} problems!
                </p>
                <span className="transition-page-countdown">{countDown}</span>
            </div>
        </>
    );
}
