// src/components/NavBar.js
import { Link } from "react-router-dom";
import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button className="btn btn-secondary" onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && <button className="btn btn-secondary" onClick={() => logout()}>Log out</button>}

            {isAuthenticated && (
                <span>
        <Link to="/">Home</Link>&nbsp;
                    <Link to="/profile">Profile</Link>
                    <Link to="/dashboard">Dashboard</Link>
      </span>
            )}

        </div>
    );
};

export default NavBar;
