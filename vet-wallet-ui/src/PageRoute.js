import React from "react";
import { Router, Routes, Switch, Route } from "react-router-dom";

import Setup from "./components/Setup";
import Home from "./components/Home";
import AccountScreen from "./components/AccountScreen";
import ConnectWallet from "./components/ConnectWallet";
import CreateWallet from "./components/CreateWallet";
import SeedPhrase from "./components/SeedPhrase";
import Send from "./components/Send";
import TxtData from "./components/TxtData";

export default function PageRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Setup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/account-screen" element={<AccountScreen />} />
                <Route path="/connect-wallet" element={<ConnectWallet />} />
                <Route path="/create-wallet" element={<CreateWallet />} />
                <Route path="/seed-phrase" element={<SeedPhrase />} />
                <Route path="/send" element={<Send />} />
                <Route path="/txt-data" element={<TxtData />} />
                <Route />
            </Routes>
        </Router>
    );
}