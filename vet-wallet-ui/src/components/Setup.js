import React from "react";
//import { Link } from "react-router-dom";

export default function Setup() {
    return (
        <div className="setup">
            <header className="app-header">
                <p className="app-title">Vet wallet</p>
            </header>

            <div className="button-setup">
                <button className="connect-wallet">
                    <p>Connect Wallet</p>
                </button>

                <button className="create-wallet">
                    <p>Create Wallet</p>
                </button>
            </div>
        </div>
    )
}