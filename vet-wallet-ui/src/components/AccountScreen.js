import React from "react";

export default function AccountScreen() {
    return (
        <div className="account-page">
            <button className="cancel-btn" onClick={() => window.location = './Home'}>Cancel</button><br></br>
            <div className="body-btns">
                <button className="lock-btn" onClick={() => window.location = './'}>Lock</button><br></br>
                <button className="settings-btn">Settings</button>
            </div>
        </div>
    );
}