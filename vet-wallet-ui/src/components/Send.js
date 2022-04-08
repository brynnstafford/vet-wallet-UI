import React from "react";

export default function Send() {
    return (
        <div className="send-page">
            <h1>Send to</h1>

            <form className="search">
                <input type="text" id="address_search" /> <br></br>
            </form>

            <form>
                <h4 className="recent-title">Recents</h4>
            </form>
        </div>
    );
}