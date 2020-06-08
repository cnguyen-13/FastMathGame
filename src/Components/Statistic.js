import React from "react";

export default function Statistic({ label, stat }) {
    return (
        <p className="stats-row">
            {label}: {stat}
        </p>
    );
}
