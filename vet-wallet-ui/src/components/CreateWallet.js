import React from "react";
import Logo from "../vet-wallet-guy.png"

const walletSub = () => { 
    // save input as variables
    // pass username and password params to API/backend
    // backend does stuff and creates account
    // connect account and go to home page
    alert('im doin stuff');
    window.location.assign('./Home');
}

export default function CreateWallet() {
    return (

        <div className="create-page">

            <header className="app-header">
                <img className="logo" src={Logo} />
                <p className="app-title">Vet wallet</p>
            </header>

            <button className="backToSetup" onClick={() => window.location = '/'}>
                Back
            </button>

            <h1 className="create-wallet-text">Create Your Wallet</h1>
            <div className="connect-body">
                <h1>Please type a <br></br>Username and Password!</h1>

                <form className="username-password">
                    Username: <input type="text" id="username" /> <br></br>
                    <br></br>
                    Password: <input className='password' type="text" id="pw" /> <br></br>
                </form><br></br>

                <button className="enrollAndRegister" onClick={walletSub}>
                    Submit
                </button>
            </div>

        </div>
    );
}