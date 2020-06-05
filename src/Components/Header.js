import React from "react";

export default function Header({ title, description }) {
    return (
        <header className="app-header">
            <h1 className="app-header-title">{title}</h1>
            <p className="app-header-description">{description}</p>
        </header>
    );
}
