import React from "react";

export default function Home() {
    return (
        <div className="home-page">
            <header className="home-header">
                <div>
                    <p className="username">Hardcoded_walletname</p> 
                    <p className="address">0xs4mp134ddr355.....</p>
                </div>
                <button className="account-link" onClick={() => window.location = './AccountScreen'}>
                    Account
                </button>
            </header>

            <div className="balance">
                <h2 className="balance-title">Balance:</h2>
                <form className="balance-box">
                    {/* create function to call backend and retrieve funds for account */}
                    <output><p className="balance-amt">$1,500.00</p></output>
                </form>
                <button className="send-btn" onClick={() => window.location = './Send'}>
                    Send
                </button>
            </div>

            <div className="history">
                <h3>History</h3>

                <form className="tx-log">
                    {/* loop list of most recent transactions from server*/}
                    <output>individual log</output><br></br>
                    <output>individual log</output><br></br>
                    <output>individual log</output><br></br>
                    <output>individual log</output><br></br>
                    <output>individual log</output><br></br>
                </form>
            </div>
        </div>
    );
}