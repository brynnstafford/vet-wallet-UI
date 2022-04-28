import React, { useState, useEffect } from "react";
const baseURL = 'http://3.16.156.31:3000/user/api/v1/';


function Home()  {
    const [Balance, setBalance] = useState();
    const [ID, setID] = useState("");
    sessionStorage.setItem('userBalance', Balance);

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
        .then(json => setBalance(json));
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
                .then(response => {response.text().then(function (text) {
                    setID(text)
                  });})
                .catch(e => {
                    console.log(e);
                });
                    },[])
      })()
      
        return (
            <div className="home-page">
                <header className="home-header">
                    <div className="header-home-title">
                        <p className="username">{ sessionStorage.getItem('fabricUserName') }</p>
                        <p className="address">{ ID }</p>
                    </div>
                    <button className="account-link" onClick={() => window.location = './AccountScreen'}>
                        Account
                    </button>
                </header>

                <div className="balance">
                    <h2 className="balance-title">Balance:</h2>
                    <form className="balance-box">
                        {/* create function to call backend getTotal() */}
                        <output><p className="balance-amt">{Balance}</p></output>
                    </form>
                    <button className="send-btn" onClick={() => window.location = './Send'}>
                        Send →
                    </button>
                </div> 
    
                <div className="history">
                    <h3>History</h3>

                    <form className="tx-log">
                        {/* loop list of most recent transactions from server*/}
                        <output>individual log</output><br></br>

                    </form>
                </div>
            </div>
        );  
}
export default Home;