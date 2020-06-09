import React from "react";

export default function Button({ label, onClickFunc, classes }) {
    return (
        <button className={classes} onClick={onClickFunc}>
            {label}
        </button>
    );
}
