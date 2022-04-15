import React, { Component } from "react";
import Logo from "../vet-wallet-guy.png";

/* Need functionality to check against already logged in wallet i.e
compare current input with password on file*/
function checkAndConnect() {
    alert('checkin credentials');
    window.location.assign('./Home');
}


// save input as variables
// pass vairiables to API call
// API call pass to CA backend

export default class ConnectWallet extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }



    render() {

        return (
            <div className="connect-page">
                <header className="app-header">
                    <img className="logo" src={Logo} />
                    <p className="app-title">Vet wallet</p>
                </header>

                <button className="backToSetup" onClick={() => window.location = '/'}>
                    Back
                </button>

                <div className="connect-body">
                    <h1>Enter your username</h1>
                    <form className="user">
                        <input 
                        type="text" 
                        id="username" 
                        value={this.state.name} 
                        /> <br></br>
                    </form>

                    <button className="unlock" onClick={checkAndConnect} >
                        Unlock
                    </button>
                </div>

                <h2 className="seedphrase-link" onClick={() => window.location = './SeedPhrase'}> import using private key</h2>
            </div>
        );
    }
}