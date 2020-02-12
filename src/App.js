import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./js/store/index";
import List from "./components/List";
import Form from "./components/Form";
import {signIn} from './services/auth'
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <div className="App">
            {/* Don't forget to include the history module */}
            <Router history={history}>
                <header>
                    <NavBar />
                </header>
                <Switch>
                    <Route path="/" exact />
                    <PrivateRoute path="/profile" component={Profile} />
                </Switch>
            </Router>
        </div>
    );
}


export default App;
