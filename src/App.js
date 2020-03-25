import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.css";


function App() {
  return (
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
          <div>
              {routes.map((route, index) => {
                  return (
                      <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={withTracker(props => {
                              return (
                                  <route.layout {...props}>
                                      <route.component {...props} />
                                  </route.layout>
                              );
                          })}
                      />
                  );
              })}
          </div>
      </Router>
  )

  /*
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
    */
}
export default App;
