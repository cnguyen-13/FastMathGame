import React from "react";

export default function NameInput({ label, onBlurFunc }) {
    return (
        <div>
            <label forHtml="name" className="user-input-label">
                {label}
            </label>
            <input
                onBlur={onBlurFunc}
                type="text"
                id="name"
                className="user-input-field"
                placeholder="Enter your name"
            />
        </div>
    );
}
