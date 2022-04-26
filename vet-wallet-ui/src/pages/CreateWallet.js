import React, { useState } from "react";
import Logo from "../logo2.png"

const axios = require('axios');
const baseURL = 'http://3.16.156.31:3000/user/api/v1/';


function CreateWallet() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const walletSub = () => {
        // save input as variables
    
        // pass username and password params to API/backend
        axios({
            method: 'post',
            url: baseURL + 'registerAndEnrollUser',
            data: {
                fabricUserName: name,
                password: password
            }
        });
        // backend does stuff and creates account
    
        // connect account and go to home page
        alert('Wallet Creation Complete!');
        window.location.assign('/');
    }

    return (
        <div className="create-page">
            <header className="app-header">
                <img className="logo" src={Logo} alt="vet logo" />
                <p className="app-title">Vet wallet</p>
            </header>

            <button className="backToSetup" onClick={() => window.location = '/'}>
                Back
            </button>

            <h1 className="create-wallet-text">Create Your Wallet</h1>
            <div className="connect-body">
                <h1>Please type a <br></br>Username and Password!</h1>

                <form className="username-password">
                    Username:
                    <input
                        type="text"
                        id="username"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    /> <br></br>

                    <br></br>
                    Password:
                    <input className='password'
                        type="text"
                        id="pw"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br></br>
                </form><br></br>

                <button className="enrollAndRegister" onClick={walletSub}>
                    Submit
                </button>
            </div>
        </div>
    )
}
export default CreateWallet;