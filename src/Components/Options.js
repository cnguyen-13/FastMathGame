import React from "react";
import DifficultyInput from "./DifficultyInput";
import NameInput from "./NameInput";
import NumberOfProblemsInput from "./NumberOfProblemsInput";
import Button from "./Button";

export default function Options({
    userName,
    onChangeName,
    onChangeNumOfProblems,
    onChangeDifficulty,
    onClickStartGame,
}) {
    return (
        <div className="options">
            <h2>Game Settings</h2>
            <NameInput
                label="Name"
                onChangeFunc={onChangeName}
                name={userName}
            />
            <NumberOfProblemsInput
                label="Number of Problems"
                onChangeFunc={onChangeNumOfProblems}
            />
            <DifficultyInput
                label="Difficulty Level"
                onChangeFunc={onChangeDifficulty}
            />
            <Button label="Start Game" onClickFunc={onClickStartGame} />
        </div>
    );
}
