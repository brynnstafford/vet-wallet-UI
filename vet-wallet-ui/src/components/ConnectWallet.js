import React from "react";

function ConnectWallet() {
    return(
        <div>
            <button className="back" onClick={window.location='./Setup'}> 
                Back
            </button>
        </div>
    );
}

export default ConnectWallet;