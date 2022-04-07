import React from "react";

export default function Setup() {
    return (
        <div className="setup">
            <header className="app-header">
                <p className="app-title">Vet wallet</p>
            </header>

            <div className="button-setup">
    
                <button className="connect-wallet" onClick= { () => window.location="./ConnectWallet"}>
                    <p>Connect wallet</p>
                </button>

                <button className="create-wallet" onClick= { () => window.location="./CreateWallet"}>
                    <p>Create wallet</p>
                </button>
            </div>
        </div>
    )
}