import React from "react";
import Setup from "./components/Setup";
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
        <Route path="/Home" element={<Home />} />
        <Route path="/AccountScreen" element={<AccountScreen />} />
        <Route path="/ConnectWallet" element={<ConnectWallet />} />
        <Route path="/CreateWallet" element={<CreateWallet />} />
        <Route path="/SeedPhrase" element={<SeedPhrase />} />
        <Route path="/Send" element={<Send />} />
        <Route path="/TxtData" element={<TxtData />} />
      </Routes>
    </Router>
  );
}

export default App;