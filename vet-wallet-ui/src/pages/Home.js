import React, { Component } from "react";

const axios = require('axios');
const baseURL = 'http://3.16.156.31:3000/user/api/v1/';

const showTotalBalance = () => {

    axios.get(baseURL + 'GetAccountBalance')
        .then(res=> {
            console.log(res.data)
            this.setState({ balance: res.data })
        })
    
        alert(this.state.balance)
}

export default class Home extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //     }
    // }

    render() {

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
                        <output><p className="balance-amt">{  }</p></output>
                    </form>
                    <button className="send-btn" onClick={() => window.location = './Send'}>
                        Send →
                    </button>
                </div>

                <button onClick={showTotalBalance}></button>

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
}