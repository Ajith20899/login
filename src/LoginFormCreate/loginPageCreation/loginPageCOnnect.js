import React from 'react';
import Login from './Login';
import history from './history';
import {  Router, Route, Switch, withRouter } from "react-router-dom";

class LoginPageConnect extends React.Component{

    loginPageConnect = () => {
        history.push('/Login')
    }

    render(){
        return(
            <div>
                <Router history={history}>
                    <Switch>
                    <Route exact
                        strict
                        path="/Login"
                        component={withRouter(Login)}
                    />
                    </Switch>
                </Router>
                <button onClick={this.loginPageConnect}>Login</button>
            </div>
        )
    }
}

export default LoginPageConnect;