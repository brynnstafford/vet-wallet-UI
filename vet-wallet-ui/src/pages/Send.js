import React, { useState } from "react";

const baseURL = 'http://3.16.156.31:3000/fabric/api/v1/';

function SendFunds(to, amount) {
        fetch(baseURL + 'RequestTransfer', {
            method: "POST",
            body: JSON.stringify({
                fabricUserName: sessionStorage.getItem('fabricUserName'),
                to: to,
                value: parseInt(amount)
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        alert('Transaction complete!');
}

function Send() {

    const [to, setTo] = useState("");
    const [amount, setAmount] = useState();

    const sendBtn = () => {
        SendFunds(to, amount)
    }

        return (
            <div className="send-page">
                <header className="send-header">
                    <p>Send to</p>
                </header>

                <button className="cancel-send-btn" onClick={() => window.location = './Home'}>Back</button>

                <div className="recipient-info">
                    <p className="paste-text">Enter Who you want to send to!: </p>
                    <form className="search">
                        <input type="text" 
                        className="address_search" 
                        id="address_search" 
                        required
                        onChange={e => setTo(e.target.value)}/><br></br>

                        <p>Enter amount:</p> <br></br>
                        <input type="number" 
                        className="amount" 
                        id="amount" 
                        required
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