import React from "react";
import Setup from "./components/Setup";
import Nav from "./components/Nav"
import Home from "./components/Home";
import AccountScreen from "./components/AccountScreen";
import ConnectWallet from "./components/ConnectWallet";
import CreateWallet from "./components/CreateWallet";
import SeedPhrase from "./components/SeedPhrase";
import Send from "./components/Send";
import TxtData from "./components/TxtData";

import {
  BrowserRouter as Router, 
  Route, 
  Routes,
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Setup />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account-screen" element={<AccountScreen />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route path="/seed-phrase" element={<SeedPhrase />} />
        <Route path="/send" element={<Send />} />
        <Route path="/txt-data" element={<TxtData />} />
      </Routes>
    </Router>
  );
}

export default App;