import React from "react";

export default function UserAnswer({ onBlurFunc }) {
    return (
        <div onBlur={onBlurFunc}>
            <label forHtml="user-answer">Your Answer:</label>
            <input type="number" id="user-answer"></input>
        </div>
    );
}
