import React from "react";
import Nav from "./components/Nav"
import Home from "./components/Home";
import Setup from "./components/Setup";

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
        <Route path="/home" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </Router>
  );
}

export default App;