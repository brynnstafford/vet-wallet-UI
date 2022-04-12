import React from "react";

function recents() {
    // at startup in page
    // create new box for each recent transaction in order from newest to oldest
    // loop boxes for how many transaction addresses previosuly been used
    // limit 10
    // box contains address
    // onClick() address will populate into the search box
}

function sendBtn(address_search) {
    // submit address (in input box) to backend as param for ERC20 CC
    return address_search;
}

export default function Send() {
    return (
        <div className="send-page">
            <header className="send-header">
                <p>Send to</p>
            </header>

            <button className="cancel-send-btn" onClick={() => window.location = './Home'}>Cancel</button>
            <p className="paste-text">Paste address here</p>
            <form className="search">
                <input type="text" className="address_search" id="address_search" /> <br></br>
                <button className="submit-send">Send →</button>
            </form>

            <div className="recent">
                <form>
                    <h4 className="recent-title">Recents</h4>
                </form>
            </div>
        </div>
    );
}