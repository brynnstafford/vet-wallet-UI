import React from "react"
import logo from "./vet_logo.png";

export default function Header() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <p className="app-title">Vet wallet</p>

            </header>
        </div>
    )
}