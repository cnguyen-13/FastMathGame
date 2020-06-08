import React from "react";
import Button from "./Button";

export default function UserAnswer({ submitAnswerFunc, submitEnterFunc }) {
    return (
        <div>
            <label htmlFor="user-answer">Your Answer:</label>
            <input
                autoFocus
                type="number"
                id="user-answer"
                onKeyPress={submitEnterFunc}
            ></input>
            <Button label="Submit" onClickFunc={submitAnswerFunc} />
        </div>
    );
}
