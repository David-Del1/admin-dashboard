import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';

import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <div className="container">
          <SideBar />
          <Home /> 
        </div>
      </div>
    </Router>
  );
}

export default App;
