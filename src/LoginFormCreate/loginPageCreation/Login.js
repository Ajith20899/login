import React from "react";
import './loginCssCode.css';
import history from '../../history'

class Login extends React.Component {

    backButton = () => {
        history.push('/');
    }

    render() {
        console.log(window.innerHeight)
        return (
            <React.Fragment>              
                <section className="loginPageMain">
                    <div className="mainPageContent">
                        <div className="userNameAndPasswordCreation">
                        <input id="userNameInputBox" placeholder="Email"></input>
                        <input id="passwordInputBox" placeholder="Password" type="password"></input>
                        <input type="submit" className="submitButton" value="Login" />
                        <section className="span">
                            <span className="forgotPassword">Forgot password&#63;</span>
                            <span className="signUp">Sign up</span>
                        </section>
                        </div>
                    </div>
                    <div className="loginPageImageDiv">
                    </div>
                </section>
            </React.Fragment>
            );
        }
    }

export default Login;