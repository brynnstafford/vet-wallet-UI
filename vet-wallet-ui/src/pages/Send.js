import React, { useState } from "react";

const axios = require('axios');
const baseURL = 'http://3.16.156.31:3000/fabric/api/v1/';

function Send() {

    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");

    const sendBtn = () => {
        // submit address (in input box) to backend as param for ERC20 CC
        axios({
            method: 'post',
            url: baseURL + 'RequestTransfer',
            data: {
                fabricUserName: sessionStorage.getItem('fabricUserName'),
                to: to,
                value: amount
            }
        });
        alert('Transaction complete!');
        //window.location.assign('./Home');
    }

        return (
            <div className="send-page">
                <header className="send-header">
                    <p>Send to</p>
                </header>

                <button className="cancel-send-btn" onClick={() => window.location = './Home'}>Cancel</button>

                <div className="recipient-info">
                    <p className="paste-text">Enter Who you want to send to!: </p>
                    <form className="search">
                        <input type="text" 
                        className="address_search" 
                        id="address_search" 
                        required
                        value={to}
                        onChange={e => setTo(e.target.value)}/><br></br>

                        <p>Enter amount:</p> <br></br>
                        <input type="number" 
                        className="amount" 
                        id="amount" 
                        required
                        value={amount}
                        onChange={e => setAmount(e.target.value)}/><br></br>
                    </form>
                    <button className="submit-send" onClick={sendBtn}>
                        Send →
                    </button>
                </div>

                <div className="recent">
                    <form>
                        <h4 className="recent-title">Recents</h4>
                    </form>
                </div>
            </div>
        );
}
export default Send;