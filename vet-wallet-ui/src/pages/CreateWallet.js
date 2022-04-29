import React, { useState } from "react";
import Logo from "../logo2.png"

const baseURL = 'http://3.16.156.31:3000/user/api/v1/';


function CreateWallet() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    function walletSub() {
        return new Promise(function (resolve, reject) {
            fetch(baseURL + 'registerAndEnrollUser', {
                method: "POST",
                body: JSON.stringify({
                    fabricUserName: name,
                    password: password
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            // Converting to JSON
            .then((response) => {
                var result = response.text();
                resolve(result);
            },
            (error) => {
                reject(error)
            }
            );
        })
    }

    async function onChangeFunction() {
        let result = await walletSub();
        console.log(result);
    if(result === "Wallet Exists"){
        alert("Wallet creation failed, Wallet already exists");
    }else{
        alert("Wallet creation complete. Login on the connect wallet page.")
        
    }
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

                <button className="enrollAndRegister" onClick={onChangeFunction}>
                    Submit
                </button>
            </div>
        </div>
    )
}
export default CreateWallet;