import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';

import './App.css';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';

function App() {
  return (
    <Router>
        <TopBar />
        <div className="container">
          <SideBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <UserList />
            </Route>
            <Route exact path="/user/:id">
              <User />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
