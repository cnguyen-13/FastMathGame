import React from "react";

export default function Button({ label, onClickFunc }) {
    return (
        <button className="action-btn" onClick={onClickFunc}>
            {label}
        </button>
    );
}
