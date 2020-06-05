import React from "react";

export default function StartButton({ label, onClickFunc }) {
    return <button onClick={onClickFunc}>{label}</button>;
}
