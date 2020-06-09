import React, { useState, useEffect } from "react";

export default function TransitionPage({ settings, afterTransitionFunc }) {
    const readySetGo = ["GO!", "Set", "Ready"];
    const [countDown, setCountDown] = useState(3);
    const [countDownMessage, setCountDownMessage] = useState(readySetGo[2]);

    useEffect(() => {
        setTimeout(() => {
            setCountDown(countDown - 1);
            const idx = countDown - 2;
            setCountDownMessage(readySetGo[idx]);
            if (countDown === 1) {
                afterTransitionFunc();
            }
        }, 1000);
    });

    return (
        <div className="transition-page">
            <h2 className="transition-page-title">
                <p>Good Luck {settings.player}!</p>
            </h2>
            <span className="transition-page-countdown">{countDown}</span>
            <p className="transition-page-countdown-message">
                {countDownMessage}
            </p>
        </div>
    );
}
