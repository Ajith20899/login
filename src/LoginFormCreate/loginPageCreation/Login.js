import React from "react";
import './loginCssCode.css';
import LoginPageMainContent from "./loginPageMainContent";
class Login extends React.Component {

    state = {
        loginpage : true
    }

    render() {
        return (
            <React.Fragment>              
                <section>
                    {this.state.loginpage === true ? 
                    
                    // Login Page Main Content call
                    <LoginPageMainContent /> : 
                    null } 
                </section>
            </React.Fragment>
            );
        }
    }

export default Login;