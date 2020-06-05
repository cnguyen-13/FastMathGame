import React from "react";

export default function NumberOfProblems({ label, onBlurFunc }) {
    return (
        <div>
            <label forHtml="num-of-problems" className="user-input-label">
                {label}
            </label>
            <input
                onBlur={onBlurFunc}
                type="number"
                id="num-of-problems"
                className="user-input-field"
                placeholder="10"
                min="1"
            />
        </div>
    );
}
