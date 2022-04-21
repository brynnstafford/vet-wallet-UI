import React from "react";
import Setup from "./pages/Setup";
import Home from "./pages/Home";
import AccountScreen from "./pages/AccountScreen";
import ConnectWallet from "./pages/ConnectWallet";
import CreateWallet from "./pages/CreateWallet";
import SeedPhrase from "./pages/SeedPhrase";
import Send from "./pages/Send";
import TxtData from "./pages/TxtData";

import {
  BrowserRouter as Router, 
  Route, 
  Routes
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