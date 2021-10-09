import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="container">
          <SideBar />
          <div className="others">Other Pages</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
