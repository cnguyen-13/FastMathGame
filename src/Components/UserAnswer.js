import React from "react";
import Button from "./Button";

export default function UserAnswer({ submitAnswerFunc }) {
    return (
        <div>
            <label htmlFor="user-answer">Your Answer:</label>
            <input type="number" id="user-answer"></input>
            <Button label="Submit" onClickFunc={submitAnswerFunc} />
        </div>
    );
}
