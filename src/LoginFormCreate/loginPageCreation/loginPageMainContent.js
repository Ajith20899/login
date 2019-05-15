import React from "react";
import './loginCssCode.css';
import history from '../../history';
import { Icon } from 'semantic-ui-react';
import Password from "./Password";
import SignUp from './signUp';
class LoginPageMainContent extends React.Component {

    state = {
        icon : false,
        passwordType : 'password',
        password : true,
        passwordOrsignUp : '',
        emailValue : ''
    }

    backButton = () => {
        history.push('/');
    }

    eyeIconChange = () => {
        this.setState({
            icon : !this.state.icon,
            passwordType: 'password'
        },()=>{
            console.log(this.state.icon)
        })
    }

    eyeSlashIconChange = () => {
        this.setState({
            icon : !this.state.icon,
            passwordType: 'text'
        })
    }

    eyeIcon = () => {
        return(
            <Icon className="eyeslashIcon" 
                name="eye slash" 
                size="large" 
                onClick={this.eyeSlashIconChange} 
                style={{
                margin:"10px 5px",
                cursor:"pointer"
            }}>
            </Icon>   
        )
    }

    eyeSlashIcon = () => {
        return(
            <Icon className="eyeIcon" 
                name="eye" 
                size="large" 
                onClick={ this.eyeIconChange} 
                style={{
                margin:"10px 5px",
                cursor:"pointer"
            }}>
            </Icon>   
        )
    }

    forgotPassword = () => {
        this.setState({
            password : false,
            passwordOrsignUp : false
        })
    }

    signUp = () => {
        this.setState({
            password : false,
            passwordOrsignUp : true
        },()=> console.log(this.state.passwordOrsignUp))
    }

    onChange = (e) => {
        this.setState({
        emailValue : e.target.value
        })
    }

    submit = (e) => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let address = this.state.emailValue;
        if (reg.test(address) === false) 
        {
            e.preventDefault();
            alert('Invalid Email Address');
            this.refs.emailAddress.focus();
        }
    }


    // onChange = (e) => {
    //     if(e.target.value !==  ) {
    //         this.setState({
    //             Value : e.target.value
    //         })
    //     }
    //     else{
    //         alert('Please Check Email')
    //     }
    // }

    render() {
        return (
            <React.Fragment>              
                
                <section className="loginPageMain">
                {this.state.password === true ? 
                    (<div className="mainPageContent">
                        <form onSubmit={this.submit}>
                        <div className="userNameAndPasswordCreation">
                        <input type="email" id="userNameInputBox" 
                            placeholder="Email" 
                            value={this.state.emailValue} 
                            ref="emailAddress"
                            onChange={this.onChange} required></input>
                        <div id="passwordInputBox">
                            <input className="passwordInputBoxChild" 
                                placeholder="Password"  
                                type={this.state.passwordType} required></input>
                            {this.state.icon === false ? this.eyeIcon() : this.eyeSlashIcon()}
                        </div>
                        <input type="submit" className="submitButton" value="Login" />              
                        <section className="span">
                            <span className="forgotPassword" onClick={this.forgotPassword}>Forgot password&#63;</span>
                            <span className="signUp" onClick={this.signUp}>Sign up</span>
                        </section>
                        </div>
                        </form>
                    </div>) :
                    (this.state.passwordOrsignUp ? 

                    //signup page
                    <SignUp/> :    
                    // password main page call
                    <Password/>
                    )
                }
                    <div className="loginPageImageDiv">
                    </div>
                </section>
            </React.Fragment>
            );
        }
    }

export default LoginPageMainContent;