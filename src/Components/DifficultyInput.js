import React from "react";

export default function Difficulty({ label, onChangeFunc }) {
    return (
        <div className="user-input" onChange={onChangeFunc}>
            <label className="user-input-label">{label}</label>
            <div className="difficulty-input-line">
                <input
                    id="easy"
                    className="difficulty-radio-btn"
                    type="radio"
                    value="easy"
                    name="difficulty"
                    defaultChecked
                ></input>
                <label htmlFor="easy">Easy</label>
            </div>

            <div className="difficulty-input-line">
                <input
                    id="medium"
                    className="difficulty-radio-btn"
                    type="radio"
                    value="medium"
                    name="difficulty"
                ></input>
                <label htmlFor="medium">Medium</label>
            </div>

            <div className="difficulty-input-line">
                <input
                    id="hard"
                    className="difficulty-radio-btn"
                    type="radio"
                    value="hard"
                    name="difficulty"
                ></input>
                <label htmlFor="hard">Hard</label>
            </div>
        </div>
    );
}
