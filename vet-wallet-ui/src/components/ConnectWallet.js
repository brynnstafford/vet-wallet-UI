import React from "react";

function ConnectWallet() {

    return(
        <div>
            <button className="backBtn" onClick={ () => window.location='/'}> 
                Back
            </button>
            <h1>Connecto the Walleto!!!</h1>
        </div>
    );
}

export default ConnectWallet;