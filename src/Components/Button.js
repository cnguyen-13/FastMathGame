import React from "react";

export default function Button({ label, onClickFunc }) {
    return (
        <button className="action-button" onClick={onClickFunc}>
            {label}
        </button>
    );
}
