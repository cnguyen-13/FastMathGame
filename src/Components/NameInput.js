import React from "react";

export default function NameInput({ label, onChangeFunc }) {
    return (
        <div>
            <label forHtml="name" className="user-input-label">
                {label}
            </label>
            <input
                onChange={onChangeFunc}
                type="text"
                id="name"
                className="user-input-field"
                placeholder="Enter your name"
            />
        </div>
    );
}
