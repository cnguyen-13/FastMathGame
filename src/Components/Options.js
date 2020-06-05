import React from "react";
import Difficulty from "./Difficulty";
import NameInput from "./NameInput";
import NumberOfProblems from "./NumberOfProblems";
import StartButton from "./StartButton";

export default function Options({
    onBlurName,
    onBlurNumOfProblems,
    onChangeDifficulty,
    onClickStartGame,
}) {
    return (
        <div className="options">
            <h2>Game Settings</h2>
            <NameInput label="Name:" onBlurFunc={onBlurName} />
            <NumberOfProblems
                label="Number of Problems"
                onBlurFunc={onBlurNumOfProblems}
            />
            <Difficulty
                label="Difficulty Level"
                onChangeFunc={onChangeDifficulty}
            />
            <StartButton label="Start Game" onClickFunc={onClickStartGame} />
        </div>
    );
}
