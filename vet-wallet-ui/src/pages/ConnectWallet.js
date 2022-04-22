import React, { useState } from "react";
import Logo from "../vet-wallet-guy.png";


/* Need functionality to check against already logged in wallet i.e
compare current input with password on file*/


// save input as variables
// pass vairiables to API call
// API call pass to CA backend

function ConnectWallet(){
    const [name, setName] = useState("");
    function checkAndConnect() {
        alert('checkin credentials: '+ name);
        
        window.location.assign('./Home');
        
    }
    sessionStorage.setItem('fabricUserName', name)
    
  
        return (
            <div className="connect-page">
                <header className="app-header">
                    <img className="logo" src={Logo} alt="vet logo"/>
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
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        /> <br></br>  
                    </form>
                    
                    <button className="unlock" onClick={checkAndConnect}>
                        Unlock
                    </button>
                </div>

                <h2 className="seedphrase-link" onClick={() => window.location = './SeedPhrase'}> import using private key</h2>
            </div>
        );
    }
export default ConnectWallet;