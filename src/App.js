import React from "react";
import history from './history';
import Login from './LoginFormCreate/loginPageCreation/Login'
import {  Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Register from "./LoginFormCreate/loginPageCreation/Register";
import LoginPageConnect from "./LoginFormCreate/loginPageCreation/loginPageCOnnect";
import Password from "./LoginFormCreate/loginPageCreation/Password";

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
                        path="/register"
                        component={Register}
                    />
                    <Route
                        path="/password"
                        component={Password}
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