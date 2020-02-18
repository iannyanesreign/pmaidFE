// src/Home.js

import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    async login() {
        // Redirect to '/' after login
        this.props.auth.login('/');
    }

    async logout() {
        // Redirect to '/' after logout
        this.props.auth.logout('/');
    }

    render() {

        if (this.state.authenticated === null) return null;
        return this.state.authenticated ?
            <button onClick={this.logout}>Logout</button> :
            <a href ="https://dev-298200.okta.com/oauth2/v1/authorize?idp=0oa2ak92zVKYSwSyL4x6&client_id0oa2ak1sq2mPSXP724x6&response_type=id_token&response_mode=fragment&scope=openid profile email &redirect_uri=http://localhost:3000&state=654&nonce=token">
                asfasfaf</a>;
    }
});