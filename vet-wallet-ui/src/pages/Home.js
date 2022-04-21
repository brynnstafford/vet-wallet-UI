import React, { Component, useState } from "react";

const axios = require('axios');
const baseURL = 'http://3.16.156.31:3000/user/api/v1/';

async function showTotalBalance(){
    let payload = { fabricUserName: 'chron'};
    return await axios.post(baseURL + 'GetAccountBalance', payload)
}


function Home () {
    const [valuepp, setValuepp] = useState();

        (async () => {
            let res = await showTotalBalance()
            let data = res;
            const value = JSON.stringify(data.data)
            console.log(value);
            setValuepp(value)
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
                        <output><p className="balance-amt">{valuepp}</p></output>
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