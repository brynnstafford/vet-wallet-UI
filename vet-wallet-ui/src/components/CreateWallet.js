import React from "react";

export default function CreateWallet() {
    return(
        <div>
            <header className="app-header">
                <p className="app-title">Vet wallet</p>
            </header>
            <button className="backToSetup" onClick={ () => window.location='/'}> 
                Back
            </button>
            <h1>Create the Walleto!!!</h1>
        </div>
    );
}