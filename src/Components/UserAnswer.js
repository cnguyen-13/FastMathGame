import React from "react";
import Button from "./Button";

export default function UserAnswer({ submitAnswerFunc, submitEnterFunc }) {
    return (
        <div className="user-answer">
            <label className="user-answer-label"htmlFor="user-answer">Your Answer</label>
            <input
                className="user-answer-input"
                autoFocus
                type="number"
                id="user-answer"
                onKeyPress={submitEnterFunc}
            ></input>
            <Button label="Submit" onClickFunc={submitAnswerFunc} />
        </div>
    );
}
