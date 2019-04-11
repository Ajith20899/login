import React from 'react';
import './loginCssCode.css';
import 'semantic-ui-css/semantic.min.css';
import Register from './Register';
import Password from '../Password';
import history from './history';
import { Router, Route, Switch, withRouter } from "react-router-dom";
// import Styled from 'styled-components';
// import ReactDOM from 'react-dom';
import LoginPageConnect from './loginPageCOnnect';

class Login extends React.Component{

    state = {
        RegisterChange : false,
        userNameInputValue : '',
        passwordInputvalue : ''
    }

    userNameInputOnChange = (e) => {
        this.setState({
            userNameInputValue : e.target.value
        });
    } 

    passwordInputOnChange = (e) => {
        this.setState({
            passwordInputValue : e.target.value
        });
    } 

    forgotPassword = (props) => {
        history.push("/password");
    }

    Register = (props) => {
        history.push("/Register");
    }
    

    Homepage = () => {
        history.push("./Home")
    }

    render() {
        return (
            <React.Fragment>                
                <div>
                    <Router history={history}> 
                        {console.log(window.innerHeight)}
                        {/* login page first page main content  */}
                        <button onClick={this.Homepage} 
                            className="ReturnHome">
                        </button>
                        <div className="loginFormContentMainPage">
                            <div className="logincontentdesign">
                                <h1>LOGIN</h1>

                            {/* get the input from the user */}
                                
                                <input 
                                    autoComplete="off"
                                    className="userNameInput"
                                    type="text"
                                    placeholder="Username"
                                    onChange={this.userNameInputOnChange}
                                />   
                                
                                <input 
                                    className="passwordInput"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.PasswordInputOnChange}
                                />

                                {/* Register and ForgotPassword submit */}
                                
                                <button className="ForgotPasswordStyle" 
                                    onClick={this.forgotPassword} >
                                    forgot?
                                </button>
                                <button className="SubmitButtonStyle" 
                                    type="submit" > 
                                    Login
                                </button>
                                <span>Have not yet to be Register</span>
                                <button className="RegisterStyle"
                                    onClick={this.Register}>
                                    Register
                                </button>
                            </div>
                                {/* router content */}
                            <div>
                                <Switch>
                                    <Route exact
                                        strict
                                        path="/Register"
                                        component={withRouter(Register)}
                                    />
                                    <Route exact
                                        strict
                                        path="/password"
                                        component={withRouter(Password)}
                                    />
                                    <Route exact
                                        strict
                                        path="/Home"
                                        component={withRouter(LoginPageConnect)}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </div>
            </React.Fragment>
            );
        }
    }
    

export default Login;