import React from "react";

export default function NumberOfProblems({ label, onChangeFunc }) {
    return (
        <div className="user-input">
            <label htmlFor="num-of-problems" className="user-input-label">
                {label}
            </label>
            <input
                onChange={onChangeFunc}
                type="number"
                id="num-of-problems"
                className="user-input-field"
                placeholder="10"
                min="1"
            />
        </div>
    );
}
