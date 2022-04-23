import React, { useState, useEffect } from "react";
const baseURL = 'http://3.16.156.31:3000/user/api/v1/';

function Home()  {
    const [value, setValue] = useState();
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
      })()
        return (
            <div className="home-page">
                <header className="home-header">
                    <div>
                        <p className="username">{ }</p>
                        <p className="address">0xs4mp134ddr355.....</p>
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