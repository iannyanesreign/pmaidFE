import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Dashboard from "./views/Dashboard";
import Welcome from "./views/Welcome";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    const { loading } = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="App">
            <Router history={history}>
                <header>
                    <NavBar />
                </header>
                <Switch>
                    <Route path="/" exact >
                        <Welcome />
                    </Route>
                    <PrivateRoute path="/profile" component={Profile} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </div>
    );
}
export default App;
