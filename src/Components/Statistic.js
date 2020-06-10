import React from "react";

export default function Statistic({ label, stat }) {
    return (
        <p className="stats-row">
            <span className="stats-row-label">{label}:</span> {stat}
        </p>
    );
}
