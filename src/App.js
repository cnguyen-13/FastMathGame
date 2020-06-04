import React, { useState, useEffect } from "react";
import InitialScreen from "./Components/InitialScreen";

import "./App.css";

function App() {
    const [timeElapsed, setTimeElapsed] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setTimeElapsed(timeElapsed + 1);
        }, 1000);
    });

    return <div className="App">Time Elapsed: {timeElapsed}</div>;
}

export default App;
