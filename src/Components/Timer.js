import React, { useState, useEffect } from "react";
//import function
const stringTime = require("./misc/stringTime").calculateTimeString;

export default function Timer({ time }) {
    return <p>Timer: {stringTime(time)}</p>;
}
