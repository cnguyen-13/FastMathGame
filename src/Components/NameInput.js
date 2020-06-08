import React from "react";

export default function NameInput({ label, onChangeFunc, name }) {
    if (name) {
        return (
            <div>
                <label htmlFor="name" className="user-input-label">
                    {label}
                </label>
                <input
                    onChange={onChangeFunc}
                    type="text"
                    id="name"
                    className="user-input-field"
                    placeholder={name}
                />
            </div>
        );
    } else {
        return (
            <div>
                <label htmlFor="name" className="user-input-label">
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
}
