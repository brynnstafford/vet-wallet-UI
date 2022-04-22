import React, { Component } from "react";

const axios = require('axios');
const baseURL = 'http://3.16.156.31:3000/user/api/v1/';

const sendBtn = () => {
    // submit address (in input box) to backend as param for ERC20 CC
    axios({
        method: 'post',
        url: baseURL + 'RequestTransfer',
        data: {
            fabricUserName: 'minter',
            to: 'chron',
            value: 10
        }
    });
    alert('Transaction complete!');
    window.location.assign('./Home');
}

function recents() {
    // at startup in page
    // create new box for each recent transaction in order from newest to oldest
    // loop boxes for how many transaction addresses previosuly been used
    // limit 10
    // box contains address
    // onClick() address will populate into the search box
}





export default class Send extends Component {

    render() {

        return (
            <div className="send-page">
                <header className="send-header">
                    <p>Send to</p>
                </header>

                <button className="cancel-send-btn" onClick={() => window.location = './Home'}>Cancel</button>

                <div className="recipient-info">
                    <p className="paste-text">Enter username: </p>
                    <form className="search">
                        <input type="text" className="address_search" id="address_search" /> <br></br>

                        <p>Enter amount:</p> <br></br>
                        <input type="text" className="amount" id="amount" /> <br></br>
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
}