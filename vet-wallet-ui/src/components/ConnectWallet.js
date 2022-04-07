import React from "react";

/* Need functionality to check against already logged in wallet i.e
compare current input with password on file*/
function checkAndConnect() {
    alert('checkin credentials');
    window.location.assign('./Home');
}

export default function ConnectWallet() {

    return (
        <div className="connect-page">
            <header className="app-header">
                <p className="app-title">Vet wallet</p>
            </header>
            <button className="backToSetup" onClick={() => window.location = '/'}>
                Back
            </button>

            <div className="connect-body">
                <h1>Connect to your wallet</h1>
                <form className="pass">
                    <input type="text" id="pw" /> <br></br>
                </form>

                <button className="unlock" onClick={checkAndConnect} >
                    Unlock
                </button>
            </div>

            <h2 className="seedphrase-link" onClick = {() => window.location = './SeedPhrase'}> import using seed phrase</h2>


        </div>
    );
}