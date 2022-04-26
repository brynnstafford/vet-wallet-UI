import React, { useState, useEffect } from "react";
const baseURL = 'http://3.16.156.31:3000/user/api/v1/';

function Home()  {
    const [value, setValue] = useState();
    const [ID, setID] = useState("");
    sessionStorage.setItem('fabricID', ID);
    (async () => {
        useEffect(()=>{
        fetch(baseURL + 'GetAccountBalance', {
            method: "POST",
            body: JSON.stringify({
                fabricUserName: sessionStorage.getItem('fabricUserName')
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        // Converting to JSON
        .then(response => response.json())
        // Setting balance value to response value
        .then(json => setValue(json));
            },[])
            
            useEffect(()=>{
                fetch(baseURL + 'GetID', {
                    method: "POST",
                    body: JSON.stringify({
                        fabricUserName: sessionStorage.getItem('fabricUserName')
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                // Converting to JSON
                .then(response => response.json())
                // Setting balance value to response value
                .then(json => setID(json));
                    },[])
      })()
        return (
            <div className="home-page">
                <header className="home-header">
                    <div className="header-home-title">
                        <p className="username">{ sessionStorage.getItem('fabricUserName') }</p>
                        <p className="address">{ sessionStorage.getItem('fabricID') }</p>
                    </div>
                    <button className="account-link" onClick={() => window.location = './AccountScreen'}>
                        Account
                    </button>
                </header>

                <div className="balance">
                    <h2 className="balance-title">Balance:</h2>
                    <form className="balance-box">
                        {/* create function to call backend getTotal() */}
                        <output><p className="balance-amt">{value}</p></output>
                    </form>
                    <button className="send-btn" onClick={() => window.location = './Send'}>
                        Send →
                    </button>
                </div> 
            </div>
        );  
}
export default Home;