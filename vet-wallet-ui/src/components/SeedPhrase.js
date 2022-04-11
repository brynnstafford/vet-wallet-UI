import React from "react";
import Logo from "../vet-wallet-guy.png"

function importKey() {
    // import key file
    // Documentation: send a secondary one time password (duo authentication) to vet
    alert('fetching from backend...');
    window.location.assign('./Home');
}

export default function SeedPhrase() {
    return(
        <div className="import-page">
            <header className="app-header">
                <img className="logo" src={Logo} />
                <p className="app-title">Vet wallet</p>
            </header>

            <button className="backToConnect" onClick={() => window.location = './ConnectWallet'}>
                Back
            </button>

            <h1 className="connect-wallet-pk">Import wallet through private key</h1>
            <div className="connect-body-pk">
                <h1>Import your private pictures here: </h1>

                <form className="keys">
                    Private key: <input className='private-key' type="text" id="pw" /> <br></br>
                </form><br></br>

                <button className="connect-pk" onClick={importKey}>
                    Submit
                </button>
            </div>
        </div>
    );
}