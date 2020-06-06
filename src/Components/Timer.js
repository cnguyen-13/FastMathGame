import React, { useState, useEffect } from "react";
//import function

export default function Timer({ seconds }) {
    const calculateTimeString = (sec) => {
        const minutes = Math.floor(sec / 60);
        const seconds = sec % 60;
        let secondsStringed;
        if (seconds < 10) {
            secondsStringed = `0${seconds}`;
        } else {
            secondsStringed = `${seconds}`;
        }
        return `${minutes}:${secondsStringed}`;
    };

    return <p>Timer: {calculateTimeString(seconds)}</p>;
}
