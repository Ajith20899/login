import React from "react";
import history from './history';
import Login from './LoginFormCreate/loginPageCreation/Login'
import {  Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import LoginPageConnect from "./LoginFormCreate/loginPageCreation/loginPageCOnnect";

const App = () => {
    return(
        <div>
            <Router history={history}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={LoginPageConnect}
                    />
                    <Route exact
                        path="/login"
                        component={Login}
                    />
                    <Route
                        default
                        component={LoginPageConnect}
                    />
                </Switch>
            </Router>
        </div>
    )
}
export default App